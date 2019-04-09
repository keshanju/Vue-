import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import PersonCenter from './components/PersonalCenter.vue';
import {Table, TableColumn, Select, Option, Pagination, Breadcrumb, BreadcrumbItem} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";

@Component({
    components: {
        'el-table': Table,
        'el-table-column': TableColumn,
        'el-select': Select,
        'el-option': Option,
        'el-pagination': Pagination,
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'person-center': PersonCenter,
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem
    }
})
class MyOrder extends Vue {
    public test: string = "";
    public options: Array<object> = [{
        value: '选项1',
        label: '黄金糕'
    }, {
        value: '选项2',
        label: '双皮奶'
    }];
}
new MyOrder().$mount('#app');