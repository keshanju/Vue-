import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";
@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav
    }
})
class Index extends Vue {
    public created() {

    }

}
new Index().$mount('#app')