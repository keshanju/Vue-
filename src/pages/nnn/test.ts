
import {Component, Vue} from "vue-property-decorator";
import router from './router/routers';


@Component
export class tset extends Vue{
    public haha:string = "我是测试内容！";
}


new tset(router).$mount("#app");

// new Vue(router).$mount("#app");