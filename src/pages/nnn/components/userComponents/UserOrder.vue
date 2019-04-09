<template>
    <div class="my-order">
        <div class="font-personnal_title">
            我的订单
        </div>
        <div class="sidebar-line"></div>
        <div class="pad_h30">
            <!--订单类别列表-->
            <div class="clear_fix mar_t20">
                <div class="f_left">
                    <a>全部订单</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a>陪玩订单</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a>租号订单</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a>游戏订单</a>
                </div>
                <div class="f_right">
                    订单搜索
                </div>
            </div>
            <!--订单信息列表-->
            <div class="pad_v20">
                <div class="clear_fix text_center" style="line-height: 40px;">
                    <div class="f_left" style="width: 318px;">
                        <!--select-->
                        <div class="personal-common">
                            <el-select v-model="test" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <span>订单详情</span>
                        </div>
                    </div>
                    <div class="f_left" style="width: 89px;">单价</div>
                    <div class="f_left" style="width: 68px;">数量</div>
                    <div class="f_left" style="width: 92px;">订单金额</div>
                    <div class="f_left" style="width: 92px;">实付金额</div>
                    <div class="f_left" style="width: 102px;">
                        <div class="personal-common">
                            <el-select v-model="test" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="f_left" style="width: 148px;">操作</div>
                </div>
                <ul class="mar_t20">
                    <li class="order-list">
                        <div class="order-top_list">
                            下单时间：<span>2018/12/25 14:12:51</span>
                            订单编号：<span>11112354456</span>
                        </div>
                        <div class="order-main_list">
                            <div class="order-main_cell" style="width: 317px;">
                                <div class="clear_fix">
                                    <div class="f_left">
                                        <a><img src="../../images/index/test-big.png" alt=""
                                                style="width: 60px;height: 80px;"></a>
                                    </div>
                                    <div class="f_left mar_l20">
                                        <a style="width: 202px;">
                                            <p class="words_flow">这里是商品名称这里是商品名称这里是商品名称</p>
                                            <p class="words_flow">这里是商品规格这里是商品规格</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="order-main_cell" style="width: 88px;line-height: 145px;">
                                ¥99
                            </div>
                            <div class="order-main_cell" style="width: 67px;line-height: 145px;">
                                2
                            </div>
                            <div class="order-main_cell" style="width: 91px;line-height: 145px;">
                                ¥198
                            </div>
                            <div class="order-main_cell" style="width: 91px;line-height: 145px;">
                                ¥190
                            </div>
                            <div class="order-main_cell" style="width: 101px;line-height: 145px;">
                                代付款
                            </div>
                            <div class="order-main_cell" style="width: 148px;">
                                <!--根据订单的信息对应显示不同的状态-->
                                <div>
                                    <a class="personnal-common_btn">立即付款</a>
                                    <a style="display: none;" class="personnal-common_btn">确认已完成</a>
                                    <a style="display: none;" class="personnal-common_btn">再次购买</a>
                                </div>
                                <div>
                                    <span>查看详情</span>
                                    <span style="display: none;">取消订单</span>
                                    <span style="display: none;">评价</span>
                                    <span style="display: none;">申请售后</span>
                                </div>
                                <div>
                                    <p>待支付 <span>30.00</span></p>
                                    <p style="display: none;">剩余时间<span>02.00</span></p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>


            </div>
            <!--分页-->
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
    import {Vue, Component} from "vue-property-decorator";
    import {Table, TableColumn, Select, Option, Pagination} from "element-ui";

    @Component({
        components: {
            'el-table': Table,
            'el-table-column': TableColumn,
            'el-select': Select,
            'el-option': Option,
            'el-pagination': Pagination
        }
    })
    export default class UserOrder extends Vue {
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