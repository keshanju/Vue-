<template>
    <div class="my-wallet">
        <div class="font-personnal_title">
            我的钱包
        </div>
        <div class="sidebar-line"></div>
        <div class="pad_h30" style="padding-bottom: 30px;">
            <div class="pad_v30 clear_fix">
                <div class="f_left">
                    <p class="wallet-title_tips">您的余额为 <span class="wallet-remain_num">1330.00</span> 元</p>
                    <p class="wallet-cashing_tips">可提现金额<span class="wallet-cashing_num">1330.00</span>元&nbsp;不可提现金额<span class="wallet-cashing_num">30.00</span>元</p>
                </div>
                <div class="f_right mar_t20">
                    <a class="personnal-common_btn">提现</a>
                    <a class="personnal-common_btn mar_l30 personnal-btn_acitive">充值</a>
                </div>
            </div>
            <div class="sidebar-line"></div>
            <!--日期查询-->
            <div class="mar_t30 clear_fix">
                <el-date-picker
                        class="f_left"
                        v-model="test"
                        type="datetimerange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['12:00:00']">
                </el-date-picker>
                <a class="personnal-common_btn mar_l30 f_left">查询</a>
            </div>
            <!--消费明细列表-->
            <div class="mar_t20">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="创建时间"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="全部类型"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="交易金额"
                            width="185">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="账户余额"
                            width="185">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="备注"
                            width="185">
                    </el-table-column>
                </el-table>
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
    import {Table, TableColumn, DatePicker, Pagination} from "element-ui";

    @Component({
        components: {
            'el-date-picker': DatePicker,
            'el-table': Table,
            'el-table-column': TableColumn,
            'el-pagination': Pagination
        }
    })
    export default class UserWallet extends Vue{
        public test: string = "";
        public tableData: Array<any> = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
</script>

<style scoped>

</style>