<template>
    <div class="order-detail">
        <div class="font-personnal_title">
            订单详情
        </div>
        <div class="sidebar-line"></div>
        <div class="grid-w30_cell">
            <!--订单信息-->
            <div>
                <div class="toolbar-red"></div>
                <div class="clear_fix order-detail_box">
                    <div class="order-detail_cell text_center" style="width: 210px;">
                        <p style="height: 18px;color: #909399;">订单编号:<span>123456789</span></p>
                        <p class="order-to_pay mar_t20" style="height: 30px;">待付款</p>
                        <a class="personnal-common_btn mar_t15" style="height: 38px;">立即付款</a>
                        <p class="mar_t5" style="height: 18px;">剩余时间:<span>02:00</span></p>
                        <a class="mar_t25" style="color: #303133;"><i class="iconfont iconquxiaodingdananniu- mar_r5"></i>取消订单</a>
                    </div>
                    <div class="order-detail_cell" style="width: 697px;border-right: none;">
                        <el-steps style="margin-top: 65px;" :active="2" align-center>
                            <el-step title="提交订单" description="2019/03/0414:30:56"></el-step>
                            <el-step title="付款成功" description=""></el-step>
                            <el-step title="陪玩接单" description=""></el-step>
                            <el-step title="陪玩服务" description=""></el-step>
                            <el-step title="完成" description=""></el-step>
                        </el-steps>
                    </div>
                </div>
            </div>
            <!--主播信息-->
            <div class="mar_t20">
                <div class="clear_fix order-detail_box">
                    <div class="order-detail_cell text_center" style="width: 210px;">
                        <p class="font-order_title">接单主播</p>
                        <div class="mar_t15">
                            <a><img src="../../images/index/test-big.png" alt="" style="width: 60px;height: 80px;"></a>
                            <p class="mar_t10 font-order_user">吃货一枚的熊</p>
                            <p class="mar_t10">ID： <span>112233</span></p>
                            <a class="mar_t15" style="color: #303133;"><i class="iconfont icongerenzhongxintubiao_zhuanqu_gerenziliao mar_r5"></i>查看主播主页</a>
                        </div>
                    </div>
                    <div class="order-detail_cell text_left" style="width: 349px;">
                        <p class="font-order_title">付款信息</p>
                        <div class="mar_t15">
                            <p>付款信息: <span>陪玩订单（刺激战场）</span></p>
                            <p class="mar_t10">单价: <span>¥69 / 小时</span></p>
                            <p class="mar_t10">单数: <span>5</span></p>
                            <p class="mar_t10">总价: <span>¥695</span></p>
                            <p class="mar_t10">优惠金额: <span>5元</span></p>
                        </div>
                    </div>
                    <div class="order-detail_cell text_left" style="width: 347px;border-right: none;">
                        <p class="font-order_title">其他信息</p>
                        <div class="mar_t15">
                            <p>手机号: <span>1100010010001</span></p>
                            <p class="mar_t10">QQ: <span>123456</span></p>
                            <p class="mar_t10">备注信息: <span>无</span></p>
                        </div>
                    </div>
                </div>
                <div class="order-detail_core">
                    <p>实付金额： <span>￥340</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Step, Steps} from "element-ui";

    @Component({
        components: {
            'el-step': Step,
            'el-steps': Steps,
        }
    })
    export default class OrderDetail extends Vue {
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