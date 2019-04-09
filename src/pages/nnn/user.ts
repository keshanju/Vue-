import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import PersonalData from './components/userComponents/PersonalData.vue';
import UserSafety from './components/userComponents/UserSafety.vue';
import UserOrder from './components/userComponents/UserOrder.vue';
import OrderDetail from './components/userComponents/OrderDetail.vue';
import OrderCheck from './components/userComponents/OrderCheck.vue';
import OrderManage from './components/userComponents/OrderManage.vue';
import UserWallet from './components/userComponents/UserWallet.vue';
import UserFocus from './components/userComponents/UserFocus.vue';
import UserCoupon from './components/userComponents/UserCoupon.vue';
import UserInvite from './components/userComponents/UserInvite.vue';
import PeiwanData from './components/userComponents/PeiwanData.vue';
import ServiceManage from './components/userComponents/ServiceManage.vue';
import {Breadcrumb, BreadcrumbItem, Message, Input, Form, FormItem} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";
// import Routers from './router/routers';
// import {Routers} from '@/ts/router/routers';
import Util from '@/ts/utils/Util';
import CheckUtil from '@/ts/utils/CheckUtil';

//  测试数据
class FormInline {
    public img: Object = null   //头像
    public name: string = ''    // 昵称
    public qq: string = ''  // qq号
    public userID: string = '234'  // 用户ID
    public code: string = '123'    // 邀请码
}

// 验证QQ
var validateQQ = (rule, value, callback) => {
    if (!value) {
        callback()
    } else if (CheckUtil.checkqq(value)) {
        callback()
    } else {
        return callback(new Error('请输入正确的QQ号'))
    }
}

// 验证用户名
var validateName = (rule, value, callback) => {
    let reg = /[\u4e00-\u9fa5]/g    //匹配中文
    let reg2 = /[a-zA-Z0-9]/g  //  匹配英文
    let reg3 = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/   // 匹配中文和英文

    if (reg3.test(value)) {
        // 验证字符长度
        let num1 = value.match(reg) ? value.match(reg).length * 2 : 0
        let num2 = value.match(reg2) ? value.match(reg2).length : 0
        let sum = num1 + num2
        if (sum > 20) {
            callback(new Error('输入超出限制'))
        } else {
            callback()
        }
    } else {
        callback(new Error('请填写争取的昵称'))
    }
}

@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'personal-data': PersonalData,
        'user-safety': UserSafety,
        'user-order': UserOrder,
        'order-detail': OrderDetail,
        'order-check': OrderCheck,
        'order-manage': OrderManage,
        'user-wallet': UserWallet,
        'user-focus': UserFocus,
        'user-coupon': UserCoupon,
        'user-invite': UserInvite,
        'peiwan-data': PeiwanData,
        'service-manage': ServiceManage,
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem,
        'el-input': Input,
        'el-form': Form,
        'el-form-item': FormItem
    }
})
export default class User extends Vue {
    public test: string = "";
    // public router = new Routers();
    // 默认头像
    public img: Object = require('./images/index/test-avatar.png');

    public formInline: FormInline = new FormInline();

    public rules: Object = {
        name: [
            {required: true, message: '请填写昵称', trigger: 'blur'},
            {validator: validateName, trigger: 'blur'}
        ],
        qq: [
            {validator: validateQQ, trigger: 'blur'}
        ]
    }


    // 选择头像回调
    public tirggerFile(event) {
        this.formInline.img = event.target.files[0]
        this.img = URL.createObjectURL(this.formInline.img)
    }

    // 复制邀请码
    public copy() {
        let bol = Util.copyToClipboard(this.formInline.code)
        if (bol) {
            Message.success('复制成功')
        } else {
            Message.warning('复制成功')
        }
    }

    mounted() {

    }

    /**
     * 路由跳转
     */
    public PersonalData() {
        this.$router.push("personaldata");
    }

    public gotoUserSafety() {
        this.$router.push("usersafety");
    }
}

new User().$mount('#app');