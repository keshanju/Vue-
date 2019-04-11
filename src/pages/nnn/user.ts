import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import {Breadcrumb, BreadcrumbItem, Input, Form, FormItem} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";
import router from './router/router';
@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
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