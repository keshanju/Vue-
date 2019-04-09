<template>
    <div class="personal-data">
        <div class="font-personnal_title">
            个人资料
        </div>
        <div class="sidebar-line"></div>
        <el-form :model="formInline" ref="formInline" :rules="rules" label-width="80px">
            <div class="pad_h30">
                <!--头像-->
                <div class="pad_v20 clear_fix">
                    <div class="f_left">
                        <img class="img_circle" :src="img" alt="" style="width: 120px;height: 120px;">
                    </div>
                    <div class="f_left mar_l20" style="padding-top: 28px;">
                        <a class="personnal-common_btn"><input class="upload-file_ipt" @change="tirggerFile($event)" type="file">上传头像</a>
                        <p class="upload-txt">支持jpg、gif、png、或bmp格式的图片，文件必须小于1M</p>
                    </div>
                </div>
                <div class="sidebar-line"></div>
                <!--用户详细信息-->
                <div class="pad_v20">
                    <!--用户ID-->
                    <div>
                        <span class="personal-info_title">用户ID：</span>
                        <span class="personal-info_num">{{formInline.userID}}</span>
                    </div>
                    <!--邀请码-->
                    <div class="mar_t20">
                        <span class="personal-info_title">邀请码：</span>
                        <span class="personal-info_num">{{formInline.code}}</span>
                        <span class="font-copy_info" @click="copy()">复制</span>
                    </div>
                    <!--昵称-->
                    <div class="mar_t25">
                        <!-- <span class="personal-info_title">昵称：</span> -->
                        <el-form-item prop="name" label="昵称：">
                            <el-input v-model="formInline.name"></el-input>
                        </el-form-item>
                        <span class="personal-info_ext">最多10个字，两个数字或字母算1个字</span>
                    </div>
                    <!--QQ-->
                    <div class="mar_t25">
                        <!-- <span class="personal-info_title">昵称：</span> -->
                        <el-form-item name="qq" prop="qq" label="QQ：">
                            <el-input v-model="formInline.qq"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <a class="personal-check_btn mar_t20" style="margin-left: 75px;">提交修改</a>
            </div>
        </el-form>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import { Message, Input, Form, FormItem } from "element-ui"
    import Util from '@/ts/utils/Util'
    import CheckUtil from '@/ts/utils/CheckUtil'
    
    class FormInline {
        public img: Object = null   //头像
        public name: string = ''    // 昵称
        public qq: string = ''  // qq号
        public userID: string = '234'  // 用户ID
        public code: string = '123'    // 邀请码
    }
    
    // 验证QQ
    var validateQQ = (rule, value, callback) => {
        if (!value) {
            callback()
        } else if (CheckUtil.checkqq(value)) {
            callback()
        } else {
            return callback(new Error('请输入正确的QQ号'))
        }
    }

    // 验证用户名
    var validateName = (rule, value, callback) => {
        let reg = /[\u4e00-\u9fa5]/g    //匹配中文
        let reg2 = /[a-zA-Z0-9]/g  //  匹配英文
        let reg3 = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/   // 匹配中文和英文

        if (reg3.test(value)) {
            // 验证字符长度
            let num1 = value.match(reg) ? value.match(reg).length * 2 : 0
            let num2 = value.match(reg2) ? value.match(reg2).length : 0
            let sum = num1 + num2
            if (sum > 20) {
                callback(new Error('输入超出限制'))
            } else {
                callback()
            }
        } else {
           callback(new Error('请填写争取的昵称'))
        }
    }

    @Component({
        components: {
            'el-input': Input,
            'el-form': Form,
            'el-form-item': FormItem
        }
    })
    export default class PersonalData extends Vue {
        public test: string = "";

        // 默认头像
        public img: Object = require('../../images/index/test-avatar.png')

        public formInline: FormInline = new FormInline()

        public rules: Object = {
            name: [
                { required: true, message: '请填写昵称', trigger: 'blur' },
                { validator: validateName, trigger: 'blur' }
            ],
            qq: [
                { validator: validateQQ, trigger: 'blur' }
            ]
        }


        // 选择头像回调
        public tirggerFile(event) {
            this.formInline.img = event.target.files[0]
            this.img = URL.createObjectURL(this.formInline.img)
        }

        // 复制邀请码
        public copy() {
            let bol = Util.copyToClipboard(this.formInline.code)
            if (bol) {
                Message.success('复制成功')
            } else {
                Message.warning('复制成功')
            }
        }
        
        mounted () {
            
        }
    }
</script>

<style lang="less" scoped>
    /deep/ .el-form-item__label {
        font-size: 16px;
        padding-right: 10px;
        &:before{
            display: none;
        }
    }
    /deep/ .el-form-item{
        width: 665px;
        position: relative;
    }
    /deep/ .mar_t25{
        position: relative;
        .personal-info_ext{
            position: absolute;
            left: 675px;
            top: 0px;
            line-height: 40px;
        }
    }
    /deep/ .el-input__inner:focus{
        border-color: #C563FC;
    }
</style>