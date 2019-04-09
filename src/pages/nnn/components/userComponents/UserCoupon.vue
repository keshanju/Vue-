<template>
    <div class="my-coupon">
        <div class="font-personnal_title">
            我的优惠券
        </div>
        <div class="sidebar-line"></div>
        <div class="grid-w30_cell">
            <div class="personal-common clear_fix">
                <div class="f_left">
                    <el-select v-model="test" placeholder="全部类型">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select style="margin-left: 25px;" v-model="test" placeholder="可用优惠券">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="f_right" style="height: 40px;line-height: 40px;">
                    <span>新到期</span>
                    <span style="margin: 0 15px;">即将过期</span>
                    <span>优惠最大</span>
                </div>
            </div>
            <!--全部优惠券-->
            <ul class="clear_fix">
                <li class="coupon-list coupon-list_play">
                    <div class="coupon-list_l clear_fix">
                        <div class="f_left" style="position:relative;">
                            <span style="position: absolute;left: -10px;top: 30px;">￥</span><h2 style="font-size: 100px;margin-top: 4px;">20</h2>
                        </div>
                        <div class="f_right text_right">
                            <p class="mar_t20"><i class="iconfont iconpeiwan"></i><span style="font-size: 14px;">陪玩优惠券</span></p>
                            <p style="font-size: 20px;" class="mar_t20">满10元可用</p>
                            <p style="font-size: 16px;">限新用户第一笔订单</p>
                            <p style="font-size: 12px;" class="mar_t10">2019/03/05-2019/03/31</p>
                        </div>
                    </div>
                    <div class="coupon-list_r">
                        <a class="personnal-common_btn mar_t50">立即使用</a>
                        <p style="color: #CD90FA;font-size: 12px;" class="text_right mar_t30 mar_r10">N0.12345678</p>
                        <img class="pos-img" src="../../images/user/guoqi_quick.png" alt="">
                    </div>
                </li>
                <li class="coupon-list coupon-list_play">
                    <div class="coupon-list_l clear_fix">
                        <div class="f_left" style="position:relative;">
                            <span style="position: absolute;left: -10px;top: 32px;">￥</span><h2 style="font-size: 100px;margin-top: 4px;">20</h2>
                        </div>
                        <div class="f_right text_right">
                            <p class="mar_t20"><i class="iconfont iconpeiwan"></i><span style="font-size: 14px;">陪玩优惠券</span></p>
                            <p style="font-size: 20px;" class="mar_t20">满10元可用</p>
                            <p style="font-size: 16px;">限新用户第一笔订单</p>
                            <p style="font-size: 12px;" class="mar_t10">2019/03/05-2019/03/31</p>
                        </div>
                    </div>
                    <div class="coupon-list_r">
                        <a class="personnal-common_btn mar_t50">立即使用</a>
                        <p style="color: #CD90FA;font-size: 12px;" class="text_right mar_t30 mar_r10">N0.12345678</p>
                        <img class="pos-img" src="../../images/user/guoqi_quick.png" alt="">
                    </div>
                </li>

                <li class="coupon-list coupon-list_zhuhao">
                    5
                </li>
                <li class="coupon-list coupon-list_zhuhao">
                    5
                </li>

                <li class="coupon-list coupon-list_game">
                    5
                </li>
                <li class="coupon-list coupon-list_game">
                    5
                </li>

                <li class="coupon-list coupon-list_guoqi">
                    5
                </li>
                <li class="coupon-list coupon-list_guoqi">
                    5
                </li>
            </ul>
            <!--分页导航-->
            <div class="mar_t20 text_right">
                <el-pagination
                        background
                        layout="jumper, prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import  {Select, Option, Pagination} from 'element-ui'
    @Component({
        components: {
            'el-select': Select,
            'el-option': Option,
            'el-pagination': Pagination
        }
    })
    export default class UserCoupon extends Vue{
        public test: string = '';
        public options:Array<object> = [{
            value: '选项1',
            label: '黄金糕'
        }, {
            value: '选项2',
            label: '双皮奶'
        }];
    }
</script>

<style scoped>

</style>