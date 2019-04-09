import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import PersonCenter from './components/PersonalCenter.vue';
import {Vue, Component} from 'vue-property-decorator';
import  {Breadcrumb, BreadcrumbItem, Select, Option, Pagination} from 'element-ui';

@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'person-center': PersonCenter,
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem,
        'el-select': Select,
            'el-option': Option,
            'el-pagination': Pagination
    }
})
class MyCoupon extends Vue{
    public test: string = '';
    public options:Array<object> = [{
        value: '选项1',
        label: '黄金糕'
    }, {
        value: '选项2',
        label: '双皮奶'
    }];
}
new MyCoupon().$mount("#app");