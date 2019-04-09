import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import {Select, Option} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";
@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'el-select': Select,
        'el-option': Option
    }
})
class PlayList extends Vue {
    public region: string = '';//地区（省市区）
    public options: Array<any> = [{
        value: 'Beijing',
        label: '北京'
    }, {
        value: 'Shanghai',
        label: '上海'
    }, {
        value: 'Nanjing',
        label: '南京'
    }, {
        value: 'Chengdu',
        label: '成都'
    }, {
        value: 'Shenzhen',
        label: '深圳'
    }, {
        value: 'Guangzhou',
        label: '广州'
    }];//地区列表

    /**
     *
     */
    public created() {

    }

}
new PlayList().$mount('#app')