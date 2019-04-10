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
import router from './router/router';

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
    public test: string = "我是测试数据";
    public sidebar_index:number = 0;    //侧边栏索引

    created () {

    }

    mounted () {
        console.log(this.$data);
        console.log(this.$children);
        console.log(this.$router);
    }

    /**
     * 选择头像回调
     * @param event
     */
    public tirggerFile (event) {

    }

    // 复制邀请码
    public copy () {

    }

    /**
     * 点击侧边栏
     */
    public clickSideBar(index: number) {
        this.sidebar_index = index;
    }
}
new User({router}).$mount('#app');