<template>
    <div class="clear_fix enter-site">
        <!--left-->
        <div class="f_left grid-w20_cell">
            <!--tab区-->
            <div class="clear_fix mar_t10">
                <div class="f_left mar_r15 tab-item" :class="{'tab-item_active': choose_login==0}" @click="chooseLogin(0)">登录</div>
                <div class="f_left tab-item" :class="{'tab-item_active': choose_login==1}" @click="chooseLogin(1)">注册</div>
            </div>
            <div class="mar_t10">
                <!--登录-->
                <div v-show="choose_login == 0">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" :hide-required-asterisk="true" class="login-ruleForm">
                        <el-form-item label="手机号：" prop="telphone">
                            <el-input v-model="ruleForm.telphone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="登录密码：" prop="loginPassword">
                            <el-input v-model="ruleForm.loginPassword" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="login-btn_group">
                                <div class="clear_fix">
                                    <label for="" class="f_left"><input v-model="auto_login" type="checkbox"><span class="cursor" @click="autoLogin">下次自动登录</span></label>
                                    <a class="f_right">忘记密码</a>
                                </div>
                                <el-button type="primary" @click="submitForm('ruleForm')" class="login-now">立即登录</el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
                <!--注册-->
                <div v-show="choose_login == 1">
                    <el-form :model="registerRuleForm" :rules="registerRules" ref="registerForm" label-width="100px" :hide-required-asterisk="true" class="register-ruleForm">
                        <el-form-item label="手机号：" prop="registerTelphone">
                            <el-input v-model="registerRuleForm.registerTelphone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="图形验证码：" prop="imageVerify">
                            <el-input v-model="registerRuleForm.imageVerify" placeholder="请输入图形验证码"></el-input>
                        </el-form-item>
                        <el-form-item label="短信验证码：" prop="shortMessageVerify">
                            <el-input v-model="registerRuleForm.shortMessageVerify" placeholder="请输入短信验证码" class="short-message_input"></el-input>
                            <a>获取验证码</a>
                        </el-form-item>
                        <el-form-item label="密码：" prop="password">
                            <el-input v-model="registerRuleForm.imageVerify" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox><span class="cursor" @click="isAgree">我已阅读并同意</span><a>《用户注册服务协议》</a></el-checkbox>
                        </el-form-item>
                    </el-form>
                    <el-button type="primary" class="register-now" @click="submitRegister('registerForm')">立即注册</el-button>
                </div>
            </div>
        </div>
        <!--right-->
        <div style="width: 230px;" class="f_right grid-w20_cell" v-show="choose_login == 0">
            <p>其他登录方式</p>
            <div class="public_btn mar_t20 text_center wechat-login">微信登录</div>
            <div class="public_btn mar_t20 text_center qq-login">QQ登录</div>
            <div class="public_btn mar_t20 text_center leigod-login">雷神登录</div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Form, FormItem, Input, Button, Checkbox} from "element-ui";
    import CheckUtil from "@/ts/utils/CheckUtil";

    @Component({
        components: {
            'el-form': Form,
            'el-form-item': FormItem,
            'el-input': Input,
            'el-button': Button,
            'el-checkbox': Checkbox
        }
    })
    export default class EnterSite extends Vue {
        public choose_login: number = 0;
        public check_agree: boolean = false;
        public auto_login: boolean = false;
        public ruleForm:object = {
            "telphone": "",
            "loginPassword": ""
        };
        public rules:object = {
            "telphone": [
                { required: true, message: '请输入手机号', trigger: 'blur' },
                { validator: this.telphoneValidate, trigger: 'blur' }
            ],
            "loginPassword": [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ]
        };
        public registerRuleForm:object = {
            "registerTelphone": "",
            "imageVerify": "",
            "shortMessageVerify": "",
            "password": ""
        };
        public registerRules:object = {
            "registerTelphone": [
                { required: true, message: '请输入手机号', trigger: 'blur' },
                { pattern: CheckUtil.phoneReg, message: '手机号码格式不正确', trigger: 'blur' }
            ],
            "imageVerify": [
                { required: true, message: '请输入图形验证码', trigger: 'blur' },
                { validator: this.timageVerifyValidate, trigger: 'blur' }
            ],
            "shortMessageVerify": [
                { required: true, message: '请输入短信验证码', trigger: 'blur' },
                { validator: this.shortMessageValidate, trigger: 'blur' }
            ],
            "password": [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ],
        };

        /**
         * @param value 当前输入框的值
         * @param callback 成功或失败的回调函数  可以闯入一个 Error对象提供对应的提示信息
         */
        public telphoneValidate(rule:void, value:string, callback:Function) {
            if (value !== "") {
                if (!CheckUtil.checkPhone(value)) {
                    callback(new Error("手机号码格式不正确"));
                } else {
                    callback();
                }
            } else {
                callback();
            }
        }

        /**
         * @param value 当前输入框的值
         * @param callback 成功或失败的回调函数  可以闯入一个 Error对象提供对应的提示信息
         */
        public timageVerifyValidate(rule:void, value:string, callback:Function) {
            if (value !== "") {
                if (!CheckUtil.checkPhone(value)) {
                    callback(new Error("手机号码格式不正确"));
                } else {
                    callback();
                }
            } else {
                callback();
            }
        }

        /**
         * @param value 当前输入框的值
         * @param callback 成功或失败的回调函数  可以闯入一个 Error对象提供对应的提示信息
         */
        public shortMessageValidate(rule:void, value:string, callback:Function) {
            if (value !== "") {
                if (!CheckUtil.checkPhone(value)) {
                    callback(new Error("手机号码格式不正确"));
                } else {
                    callback();
                }
            } else {
                callback();
            }
        }

        /**
        * @param formName el-form的名称
        */
        public submitForm(formName:string) {
            this.$refs[formName]['validate']((valid) => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        }

        /**
        * @param formName el-form的名称
        */
        public submitRegister(formName:string) {
            this.$refs[formName]['validate']((valid) => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        }

        /**
         * 登录注册切换
         * @param index
         */
        public chooseLogin(index: number) {
            this.choose_login = index;
        }

        /**
         * 是否自动登录
         */
        public autoLogin() {
            this.auto_login = !this.auto_login;
        }

        /**
         * 是否同意用户协议
         */
        public isAgree() {
            this.check_agree = !this.check_agree;
        }
    }
</script>

<style scoped>

</style>