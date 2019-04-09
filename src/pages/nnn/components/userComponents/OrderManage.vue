<template>
    <div class="order-manage">
        <div class="font-personnal_title">
            接单管理
        </div>
        <div class="sidebar-line"></div>
        <div class="pad_h20">
            <ul class="mar_t30 ordertitle-list_box">
                <li class="ordertitle-list_cell">
                    <p class="font-des_tips">累计接单（笔）</p>
                    <p class="font-number_title">120</p>
                </li>
                <li class="ordertitle-list_cell">
                    <p class="font-des_tips">累计接单时长（小时）</p>
                    <p class="font-number_title">120</p>
                </li>
                <li class="ordertitle-list_cell">
                    <p class="font-des_tips">累计下单用户（人）</p>
                    <p class="font-number_title">120</p>
                </li>
                <li class="ordertitle-list_cell">
                    <p class="font-des_tips">近30天接单数（笔）</p>
                    <p class="font-number_title">120</p>
                </li>
                <li class="ordertitle-list_cell">
                    <p class="font-des_tips">近30天接单时长（小时）</p>
                    <p class="font-number_title">120</p>
                </li>
                <li class="ordertitle-list_cell">
                    <p class="font-des_tips">近30天下单用户（人）</p>
                    <p class="font-number_title">120</p>
                </li>
            </ul>
            <div class="sidebar-line mar_t30"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    @Component({
        components: {

        }
    })
    export default class OrderManage extends Vue {
        public created() {

        }
    }
</script>

<style scoped>

</style>