<template>
    <div class="clear_fix">
        <!--left-->
        <div class="sidebar">
            <!--个人中心-->
            <div class="mar_b25">
                <p class="font-sidebar_title">个人中心</p>
                <ul>
                    <li class="font-sidebar_item" @click="clickSideBar(0)"
                        :class="{'font-sidebar_active': sidebar_index==0}">
                        <router-link to="personaldata">
                            <i class="iconfont icongerenzhongxintubiao_zhuanqu_gerenziliao"></i>个人资料
                        </router-link>
                    </li>
                    <li class="font-sidebar_item" @click="clickSideBar(1)"
                        :class="{'font-sidebar_active': sidebar_index==1}">
                        <router-link to="usersafety">
                            <i class="iconfont icongerenzhongxintubiao-zhuanqu_zhanghuanquan"></i>账户安全
                        </router-link>
                    </li>
                    <li class="font-sidebar_item" @click="clickSideBar(2)"
                        :class="{'font-sidebar_active': sidebar_index==2}">
                        <router-link to="userorder">
                            <i class="iconfont icongerenzhongxintubiao-zhuanqu_wodedingdan"></i>我的订单
                        </router-link>
                    </li>
                    <li class="font-sidebar_item" @click="clickSideBar(3)"
                        :class="{'font-sidebar_active': sidebar_index==3}">
                        <router-link to="userwallet">
                            <i class="iconfont icongerenzhongxintubiao-zhuanqu_wodeqianbao"></i>我的钱包
                        </router-link>
                    </li>
                    <li class="font-sidebar_item" @click="clickSideBar(4)"
                        :class="{'font-sidebar_active': sidebar_index==4}">
                        <router-link to="usercoupon">
                            <i class="iconfont icongerenzhongxintubiao_zhuanqu_wodeyouhuiquan"></i>我的优惠券
                        </router-link>
                    </li>
                    <li class="font-sidebar_item" style="margin-bottom: 0;" @click="clickSideBar(5)"
                        :class="{'font-sidebar_active': sidebar_index==5}">
                        <router-link to="userfocus">
                            <i class="iconfont icongerenzhongxintubiao-zhuanqu_wodeguanzhu"></i>我的关注
                        </router-link>
                    </li>
                </ul>
            </div>
            <!--分割线-->
            <div class="sidebar-line"></div>
            <!--陪玩管理-->
            <div class="mar_t25">
                <p class="font-sidebar_title">陪玩管理</p>
                <ul>
                    <li class="font-sidebar_item"><i
                            class="iconfont icongerenzhongxintubiao-zhuanqu_gerenziliao"></i>陪玩资料
                    </li>
                    <li class="font-sidebar_item"><i
                            class="iconfont icongerenzhongxintubiao_zhuanqu_fuwuguanli"></i>服务管理
                    </li>
                    <li class="font-sidebar_item"><i
                            class="iconfont icongerenzhongxintubiao_zhuanqu_jiedanguanli"></i>接单管理
                    </li>
                    <li class="font-sidebar_item" style="margin-bottom: 1px;"><i
                            class="iconfont icongerenzhongxintubiao_zhuanqu_yaoqingyouli"></i>邀请有礼
                    </li>
                </ul>
            </div>
        </div>

        <!--right-->
        <div class="component-box">
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import PersonalData from './PersonalData.vue';
import UserSafety from './UserSafety.vue';
import UserOrder from './UserOrder.vue';
import OrderDetail from './OrderDetail.vue';
import OrderCheck from './OrderCheck.vue';
import OrderManage from './OrderManage.vue';
import UserWallet from './UserWallet.vue';
import UserFocus from './UserFocus.vue';
import UserCoupon from './UserCoupon.vue';
import UserInvite from './UserInvite.vue';
import PeiwanData from './PeiwanData.vue';
import ServiceManage from './ServiceManage.vue';
@Component({
    components: {
        'personal-data': PersonalData,
        'user-safety': UserSafety,
        'user-order': UserOrder,
        'order-detail': OrderDetail,
        'order-check': OrderCheck,
        'order-manage': OrderManage,
        'user-wallet': UserWallet,
        'user-focus': UserFocus,
        'user-coupon': UserCoupon,
        'user-invite': UserInvite,
        'peiwan-data': PeiwanData,
        'service-manage': ServiceManage,
    }
})
export default class UserContent extends Vue {
    public sidebar_index:number = 0;    //侧边栏索引

    public created() {

    }

    /**
     * 点击侧边栏
     */
    public clickSideBar(index: number) {
        this.sidebar_index = index;
    }
}
</script>
