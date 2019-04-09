import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import {InputNumber, Input} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";
@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'el-input-number': InputNumber,
        'el-input': Input
    }
})
class PlayEvaluation extends Vue {
    public orderNum: number = 1;//默认一单
    public giveComment: string = ''//获取用户订单留言
    public imgIndex:number = 0;//默认显示第一个
    public hostGameIndex:number = 0;//默认显示第一个
    public commentIndex:number = 0;//默认是显示最新评论

    /**
     * 点击添加订单数
     */
    public addOrder() {
        // this.orderNum = orderNum++;
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

}
new PlayEvaluation().$mount('#app')