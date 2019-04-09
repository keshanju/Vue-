import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import PersonCenter from './components/PersonalCenter.vue';
import {Breadcrumb, BreadcrumbItem} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";

@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'person-center': PersonCenter,
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem
    }
})
class AccountSecurity extends Vue{

}
new AccountSecurity().$mount('#app');