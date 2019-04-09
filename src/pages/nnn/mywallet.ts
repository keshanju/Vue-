import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import PersonCenter from './components/PersonalCenter.vue';
import {Breadcrumb, BreadcrumbItem, Table, TableColumn, DatePicker, Pagination} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";

@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'person-center': PersonCenter,
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem,
        'el-date-picker': DatePicker,
        'el-table': Table,
        'el-table-column': TableColumn,
        'el-pagination': Pagination
    }
})
class MyWallet extends Vue{
    public test: string = "";
    public tableData: Array<any> = [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }]
}
new MyWallet().$mount('#app');