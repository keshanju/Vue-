<template>
    <div class="service-manage">
        <div class="font-personnal_title">
            服务管理
        </div>
        <div class="sidebar-line"></div>
        <div class="pad_h65">
            <div class="service-inner_box mar_t30">
                <p class="font-service_title">服务 <b>1</b> 信息</p>
                <el-form ref="FormInfo" :model="FormInfo" label-width="80px">
                    <el-form-item label="服务类型:" class="mar_t30">
                        <el-select v-model="FormInfo.account" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择段位:" class="mar_t30">
                        <el-select v-model="FormInfo.account" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="服务截图:" class="mar_t30">
                        <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false">
                            <img v-if="FormInfo.avatar_url" :src="FormInfo.avatar_url" class="avatar">
                            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="技能介绍:" class="mar_t30">
                        <el-input
                                size="large"
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="textarea">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="语音介绍:" class="mar_t30">
                        点击试听
                    </el-form-item>
                </el-form>
                <div class="sidebar-line mar_t50"></div>
                <div class="text_center mar_t20">
                    <a class="font-service_purple">再添加一个服务类型</a>
                </div>
            </div>
            <div class="text_center mar_t50 mar_b50">
                <a class="personal-check_btn">提交</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Select, Option, Input, Upload, Form, FormItem} from 'element-ui';
    @Component({
        components: {
            'el-select': Select,
            'el-option': Option,
            'el-input': Input,
            'el-upload': Upload,
            'el-form': Form,
            'el-form-item': FormItem
        }
    })
    export default class ServiceManage extends Vue {
        public img: Object = null;   //头像
        public name: string = '';    // 昵称
        public textarea: string = '';  //技能介绍
        public FormInfo: object = {
            'name': '110',
            'id': '11000100100',
            'account': '1233213412',
            'qq': '123123121',
            'mobile': '231324123132',
            'sex': 'man',
            'birthday': '1970-01-01',
            'city': 'wuhan',
            'labels': '颜值担当',
            'avatar_url': '../XXX',
            'hobbies': '玩XXX球'
        };
    }
</script>

<style scoped>

</style>