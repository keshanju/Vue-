import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import {InputNumber, Input, FormItem, Form, Button} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";
import CheckUtil from "@/ts/utils/CheckUtil";
@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'el-input-number': InputNumber,
        'el-input': Input,
        'el-form': Form,
        'el-form-item': FormItem,
        'el-button': Button
    }
})
class PlayDetail extends Vue {
    public orderNum: number = 1;//默认一单
    public giveComment: string = ''//获取用户订单留言
    public imgIndex:number = 0;//默认显示第一个
    public hostGameIndex:number = 0;//默认显示第一个
    public commentIndex:number = 0;//默认是显示最新评论
    public ruleForm:object = {
        "telphone": "",
        "QQ": "",
        "giveComment": ""
    };
    public rules:object = {
        "telphone": [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^1\d{10}$/, message: '手机号码格式不正确', trigger: 'blur' }
        ],
        "QQ": [
            { required: true, message: '请输入QQ', trigger: 'blur' },
            { pattern: /^[1-9]{1}[0-9]{4,9}$/, message: 'QQ号码格式不正确', trigger: 'blur' }
        ]
    };

    /**
     * @param formName el-form的名称
     */
    public submitForm(formName:string) {
        this.$refs[formName]['validate']((valid: boolean) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
        });
    }

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
new PlayDetail().$mount('#app')