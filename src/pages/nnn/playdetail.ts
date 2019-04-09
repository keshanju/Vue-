import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";
import {Button} from "element-ui";
@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'el-button': Button
    }
})
class PlayDetail extends Vue {
    public region: string = '';//地区（省市区）
    public imgIndex:number = 0;//默认显示第一个
    public hostGameIndex:number = 0;//默认显示第一个
    public commentIndex:number = 0;//默认是显示最新评论
    public thumbnailObject:object = {
        width: "",
        left: "0px"
    }//缩略图容器ul的样式
    public selected: number = 0;//当天选中的图片
    public shadowIsShow: boolean = false;
    public shadowStyle:object = {
        "top": "0px",
        "left": "0px"
    }
    public imgs: string[] = [
        require("./images/index/test-big.png"),
        require("./images/index/test-online.png"),
        require("./images/index/test-recomment.png"),
        require("./images/index/test-small01.png"),
        require("./images/index/test-small02.png"),
        require("./images/index/test-small03.png")
    ];//测试数据

    /**
     * 点击图片切换
     */
    public goTo(key: number) {
        this.selected = key;
    }
    
    /**
     * 上一张
     */
    public goPrev():void {
        if (parseInt(this.thumbnailObject["left"]) != 0) {
            var start = parseInt(this.thumbnailObject["left"]) / 80 * -1;
            var arr:number[] = [start, start + 1, start + 2, start + 3];//当前展示的四张图片
            if (this.selected == arr[1] || this.selected == arr[0]) {//如果当前展示的四张图之前还有图片，就改变ul的定位
                this.thumbnailObject["left"] = parseInt(this.thumbnailObject["left"]) + 80 + "px";
            }
        }
        this.selected --;
    }

    /**
     * 下一张
     */
    public goNext():void {
        var start = parseInt(this.thumbnailObject["left"]) / 80 * -1;
        var arr:number[] = [start, start + 1, start + 2, start + 3];//当前展示的四张图片
        if (arr[arr.length - 1] != this.imgs.length - 1) {//如果当前展示的四张图之后还有图片，就改变ul的定位
            if (this.selected == arr[arr.length -1] || this.selected == arr[arr.length -2]) {
                this.thumbnailObject["left"] = parseInt(this.thumbnailObject["left"]) - 80 + "px";
            }
        }
        this.selected ++;
    }

    public handleEnter() {
        this.shadowIsShow = true;
    }
    public handleLeave() {
        this.shadowIsShow = false;
    }

    public handleMove(e) {
        this.shadowIsShow = true;
        var container = document.querySelector(".show-img");
        var shadow = document.querySelector(".show-shadow");
        var bigImg = document.querySelector(".show-big_img img");
        var event = e || window.event;
        var X = event.pageX - container["offsetLeft"] - shadow["offsetWidth"]/2;
        var Y = event.pageY - container["offsetTop"] - shadow["offsetHeight"]/2;
        if (X < 0) {
            this.shadowStyle["left"] = "0px";
        } else if (X > (container["offsetWidth"] - shadow["offsetWidth"])) {
            this.shadowStyle["left"] = container["offsetWidth"] - shadow["offsetWidth"] + "px";
        } else {
            this.shadowStyle["left"] = X + "px";
        }
        if (Y < 0) {
            this.shadowStyle["top"] = "0px";
        } else if (Y > (container["offsetHeight"] - shadow["offsetHeight"])) {
            this.shadowStyle["top"] = container["offsetHeight"] - shadow["offsetHeight"] + "px";
        } else {
            this.shadowStyle["top"] = Y + "px";
        }
        bigImg["style"]["left"] = -2 * parseInt(this.shadowStyle["left"]) + "px";
        bigImg["style"]["top"] = -2 * parseInt(this.shadowStyle["top"]) + "px";
    }

    /**
     * 点小图切换大图
     */
    public changeImgTab(index: number) {
        this.imgIndex = index;
    }

    /**
     * 点击切换陪玩游戏
     */
    public changeHostGame(index: number) {
        this.hostGameIndex = index;
    }

    /**
     * 切换最新和热门评论
     */
    public changeComment(index: number) {
        this.commentIndex = index;
    }

    public mounted() {
        this.thumbnailObject["width"] =  70 * this.imgs.length + 10 * (this.imgs.length - 1) + "px";//给图片的容器ul一个初始宽度
    }
}
new PlayDetail().$mount('#app')