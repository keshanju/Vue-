<template>
    <div class="account-safety">
        <div class="font-personnal_title">
            账户安全 <span>您的账号安全状况良好，请继续保持哦</span>
        </div>
        <div class="sidebar-line"></div>
        <div class="pad_h30">
            <div class="mar_t30">
                <p class="font-personnal_subtitle" style="font-weight: bold;">账号基本设置</p>
                <ul class="clear_fix">
                    <li class="pad_v20 f_left" style="width: 425px;">
                        <div class="clear_fix">
                            <div class="f_left">
                                <p class="font-personnal_subtitle">登录密码</p>
                                <p class="font-personal_tips mar_t5">登录密码不可以随便告诉别人哦</p>
                            </div>
                            <div class="f_right personnal-common_btn mar_t5">
                                修改密码
                            </div>
                        </div>
                    </li>
                    <li class="pad_v20 f_left" style="width: 425px;margin-left: 60px;">
                        <div class="clear_fix">
                            <div class="f_left">
                                <p class="font-personnal_subtitle">绑定手机号（137******23）</p>
                                <p class="font-personal_tips mar_t5">可以为您提供更加便捷的安全服务及提醒</p>
                            </div>
                            <div class="f_right personnal-common_btn mar_t5">
                                更换手机号
                            </div>
                        </div>
                    </li>
                    <li class="pad_v20 f_left" style="width: 425px;">
                        <div class="clear_fix">
                            <div class="f_left">
                                <p class="font-personnal_subtitle">实名认证（*tom）</p>
                                <p class="font-personal_tips mar_t5">请与提现账户的实名信息保持一致</p>
                            </div>
                            <div class="f_right personnal-common_btn mar_t5">
                                更改实名信息
                            </div>
                        </div>
                    </li>
                    <li class="pad_v20 f_left" style="width: 425px;margin-left: 60px;">
                        <div class="clear_fix">
                            <div class="f_left">
                                <p class="font-personnal_subtitle">提现账户（支付宝:137******23）</p>
                                <p class="font-personal_tips mar_t5">绑定提现账户便于陪玩大师提取陪玩收益</p>
                            </div>
                            <div class="f_right personnal-unbind_btn mar_t5">
                                解绑
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class=" mar_t20">
                <p class="font-personnal_subtitle" style="font-weight: bold;">第三方账号绑定</p>
                <ul class="clear_fix">
                    <li class="pad_v20 f_left" style="width: 425px;">
                        <div class="clear_fix">
                            <div class="f_left">
                                <p class="font-personnal_subtitle">绑定QQ</p>
                                <p class="font-personal_tips mar_t5">绑定后可以使用QQ账号快捷登录哦</p>
                            </div>
                            <div class="f_right personnal-common_btn mar_t5">
                                绑定
                            </div>
                        </div>
                    </li>
                    <li class="pad_v20 f_left" style="width: 425px;margin-left: 60px;">
                        <div class="clear_fix">
                            <div class="f_left">
                                <p class="font-personnal_subtitle">绑定微信（我是喵星人）</p>
                                <p class="font-personal_tips mar_t5">绑定后可以使用微信账号快捷登录哦</p>
                            </div>
                            <div class="f_right personnal-unbind_btn mar_t5">
                                解绑
                            </div>
                        </div>
                    </li>
                    <li class="pad_v20 f_left" style="width: 425px;">
                        <div class="clear_fix">
                            <div class="f_left">
                                <p class="font-personnal_subtitle">绑定雷神账号</p>
                                <p class="font-personal_tips mar_t5">绑定后可以使用雷神账号快捷登录哦</p>
                            </div>
                            <div class="f_right personnal-common_btn mar_t5">
                                绑定
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class PersonalData extends Vue {
        public test: string = "";
    }
</script>

<style scoped>

</style>