<template>
    <div class="order-check">
        <div class="font-personnal_title">
            支付订单
        </div>
        <div class="sidebar-line"></div>
        <div class="grid-w30_cell" style="padding-top: 0;">
            <div class="grid-w20_cell clear_fix">
                <div class="f_left">
                    <img class="mar_b5" src="../../images/user/order_check.png" alt="">
                    <span class="mar_l5 font-check_title">订单已提交成功，请尽快付款，订单号459674615621</span><br>
                    <span class="mar_t5 font-check_warning">请您在<span style="color: #E43B3E;">3分钟</span>内完成支付，否则订单会自动取消！</span>
                </div>
                <div class="f_right">
                    <p class="mar_t15">支付剩余时间: <span style="color: #E43B3E;">03:00</span></p>
                </div>
            </div>
            <div class="sidebar-line"></div>
            <div class="mar_t15">
                <p style="font-size: 18px;">支付方式</p>
                <!--支付方式-->
                <div class="mar_t15">
                    <ul>
                        <li class="clear_fix payments-list payments-list_choosed">
                            <div class="f_left mar_t10">
                                <el-radio v-model="test" label="1"></el-radio>
                                <img src="../../images/user/yue_pay.png" alt="">
                                <span class="mar_l10">余额支付</span>
                                <span class="mar_l30 font-check_remain">当前余额: <span>100.00</span></span>
                                <a class="discount-tags">优惠</a>
                                <span>最高可减99元</span>
                            </div>
                            <div class="f_right">
                                <p class="font-check_remain">支付<span class="font-check_price">69.00</span>元</p>
                                <p class="font-check_remain">已减<span>10.00</span>元</p>
                            </div>
                        </li>
                        <li class="clear_fix payments-list">
                            <div class="f_left mar_t10">
                                <el-radio v-model="test" label="2"></el-radio>
                                <img src="../../images/user/alipay_icon.png" alt="">
                                <span class="mar_l10">支付宝</span>
                                <span class="mar_l30 font-check_remain">当前余额: <span>100.00</span></span>
                                <a class="discount-tags">优惠</a>
                                <span>最高可减99元</span>
                            </div>
                            <div class="f_right">
                                <p class="font-check_remain">支付<span class="font-check_price">69.00</span>元</p>
                                <p class="font-check_remain">已减<span>10.00</span>元</p>
                            </div>
                        </li>
                        <li class="clear_fix payments-list">
                            <div class="f_left mar_t10">
                                <el-radio v-model="test" label="3"></el-radio>
                                <img src="../../images/user/wechat_icon.png" alt="">
                                <span class="mar_l10">微信</span>
                                <span class="mar_l30 font-check_remain">当前余额: <span>100.00</span></span>
                                <a class="discount-tags">优惠</a>
                                <span>最高可减99元</span>
                            </div>
                            <div class="f_right">
                                <p class="font-check_remain">支付<span class="font-check_price">69.00</span>元</p>
                                <p class="font-check_remain">已减<span>10.00</span>元</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--验证码-->
                <div class="verify-ipt_box">
                    <input class="verify-ipt_cell" type="text">
                    <input class="verify-ipt_cell" type="text">
                    <input class="verify-ipt_cell" type="text">
                    <input class="verify-ipt_cell" type="text">
                    <input class="verify-ipt_cell" type="text">
                    <input class="verify-ipt_cell" type="text">
                    <a class="post-msg">获取验证码</a>
                </div>
                <div class="mar_t15 font-verrify_tip">
                    验证码将会发送至账户 <span class="font-check_userinfo"> 吃货一枚的熊</span> 绑定的手机号 <span  class="font-check_userinfo">（130****5678）</span>
                </div>
                <div class="mar_t10">
                    <a class="personal-check_btn">立即支付</a>
                    <span class="mar_l10 font-verrify_tip">您还差 <span style="color: #E43B3E;">56.98</span> 元,请继续选择支付方式</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Radio} from "element-ui";

    @Component({
        components: {
            'el-radio': Radio
        }
    })
    export default class OrderCheck extends Vue {
        public test: string = "";
        public options: Array<object> = [{
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