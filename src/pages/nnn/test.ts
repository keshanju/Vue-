
import {Component, Vue} from "vue-property-decorator";
import router from './router/router';
console.log(router);
Vue.config.productionTip = false;
@Component
export class Test extends Vue {
    public haha:string = "我是测试内容！";

    public mounted() {

    }

    public created() {

    }
}
new Test({
   router
}).$mount("#app");

// new Vue(router).$mount("#app");