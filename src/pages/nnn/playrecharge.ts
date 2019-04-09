import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import {InputNumber, Input, Steps, Step, Select, Option, DatePicker, Upload, Dialog} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";

@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'el-input-number': InputNumber,
        'el-input': Input,
        'el-step': Step,
        'el-steps': Steps,
        'el-select': Select,
        'el-option': Option,
        'el-date-picker': DatePicker,
        'el-upload': Upload,
        'el-dialog': Dialog
    }
})
class PlayRecharge extends Vue {
    public checkagree: boolean = false;//是否同意条款

    /**
     * 同意条款
     */
    public  checkAgree() {
        this.checkagree = !this.checkagree;
    }


}

new PlayRecharge().$mount('#app')