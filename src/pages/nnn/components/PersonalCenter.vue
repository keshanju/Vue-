<template>
    <div class="sidebar">
        <!--个人中心-->
        <div class="mar_b25">
            <p class="font-sidebar_title">个人中心</p>
            <ul>
                <li class="font-sidebar_item font-sidebar_active"><i class="iconfont icongerenzhongxintubiao_zhuanqu_gerenziliao"></i><a href="/user">个人资料</a></li>
                <li class="font-sidebar_item"><i class="iconfont icongerenzhongxintubiao-zhuanqu_zhanghuanquan"></i><a href="/accountsecurity">账户安全</a></li>
                <li class="font-sidebar_item"><i class="iconfont icongerenzhongxintubiao-zhuanqu_wodedingdan"></i>我的订单</li>
                <li class="font-sidebar_item"><i class="iconfont icongerenzhongxintubiao-zhuanqu_wodeqianbao"></i>我的钱包</li>
                <li class="font-sidebar_item"><i class="iconfont icongerenzhongxintubiao_zhuanqu_wodeyouhuiquan"></i>我的优惠券</li>
                <li class="font-sidebar_item" style="margin-bottom: 0;"><i class="iconfont icongerenzhongxintubiao-zhuanqu_wodeguanzhu"></i>我的关注</li>
            </ul>
        </div>
        <!--分割线-->
        <div class="sidebar-line"></div>
        <!--陪玩管理-->
        <div class="mar_t25">
            <p class="font-sidebar_title">陪玩管理</p>
            <ul>
                <li class="font-sidebar_item"><i class="iconfont icongerenzhongxintubiao-zhuanqu_gerenziliao"></i>陪玩资料</li>
                <li class="font-sidebar_item"><i class="iconfont icongerenzhongxintubiao_zhuanqu_fuwuguanli"></i>服务管理</li>
                <li class="font-sidebar_item"><i class="iconfont icongerenzhongxintubiao_zhuanqu_jiedanguanli"></i>接单管理</li>
                <li class="font-sidebar_item" style="margin-bottom: 1px;"><i class="iconfont icongerenzhongxintubiao_zhuanqu_yaoqingyouli"></i>邀请有礼</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class PersonCenter extends Vue {
    public jumpTo(address) {
        console.log(location);
    }
}
</script>

<style scoped>

</style>
