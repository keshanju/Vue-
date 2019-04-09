<template>
    <div class="peiwan-data">
        <div class="font-personnal_title">
            陪玩资料
        </div>
        <div class="sidebar-line"></div>
        <div class="pad_h95">
            <div class="">
                <p class="mar_t30 font-service_title">实名信息</p>
                <el-form label-position="left" ref="FormInfo" :model="FormInfo" label-width="95px">
                    <el-form-item class="mar_t30" label="姓名：">
                        <el-input v-model="FormInfo.name"></el-input>
                    </el-form-item>
                    <el-form-item class="mar_t30" label="身份证号：">
                        <el-input v-model="FormInfo.id"></el-input>
                    </el-form-item>
                    <el-form-item class="mar_t30" label="提现账号：">
                        <el-input v-model="FormInfo.account"></el-input>
                    </el-form-item>
                    <el-form-item class="mar_t30" label="QQ号：">
                        <el-input v-model="FormInfo.qq"></el-input>
                    </el-form-item>
                    <el-form-item class="mar_t30" label="手机号：">
                        <el-input v-model="FormInfo.mobile"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="sidebar-line mar_t30"></div>
            <div>
                <p class="mar_t30 font-service_title">详细信息</p>
                <el-form label-position="left" ref="FormInfo" :model="FormInfo" label-width="95px">
                    <el-form-item class="mar_t30" label="性别：">
                        <el-radio-group v-model="FormInfo.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item class="mar_t30" label="出身日期：">
                        <el-date-picker type="date" placeholder="选择日期" v-model="FormInfo.birthday" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item class="mar_t30" label="所在城市：">
                        <el-select class="mar_r5" v-model="FormInfo.city" placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <el-select class="mar_r5" v-model="FormInfo.city" placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <el-select v-model="FormInfo.city" placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="mar_t30" label="个性标签：">
                        <div>
                            <p class="font-service_purple">最多可选择3个标签（3/3）</p>
                            <ul class="clear_fix">
                                <li class="special-tags">
                                    御姐
                                </li>
                                <li class="special-tags special-tags_choosed">
                                    萝莉
                                </li>
                                <li class="special-tags">
                                    大叔
                                </li>
                                <li class="special-tags special-tags_choosed">
                                    颜值担当
                                </li>
                                <li class="special-tags">
                                    阳光帅气
                                </li>
                                <li class="special-tags special-tags_choosed">
                                    认真专业
                                </li>
                                <li class="special-tags">
                                    成熟稳重
                                </li>
                                <li class="special-tags">
                                    御姐
                                </li>
                                <li class="special-tags special-tags_choosed">
                                    萝莉
                                </li>
                                <li class="special-tags">
                                    大叔
                                </li>
                                <li class="special-tags special-tags_choosed">
                                    颜值担当
                                </li>
                                <li class="special-tags">
                                    阳光帅气
                                </li>
                                <li class="special-tags special-tags_choosed">
                                    认真专业
                                </li>
                                <li class="special-tags">
                                    成熟稳重
                                </li>
                            </ul>
                        </div>
                    </el-form-item>
                    <el-form-item class="mar_t20" label="形象照：">
                        <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false">
                            <img v-if="FormInfo.avatar_url" :src="FormInfo.avatar_url" class="avatar">
                            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                        </el-upload>
                    </el-form-item>
                    <el-form-item class="mar_t30" label="兴趣爱好：">
                        <el-input v-model="FormInfo.hobbies"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="text_center mar_t50 mar_b50">
                <a class="personal-check_btn">提交</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Input, FormItem, Form, Select, Option, DatePicker, TimePicker, Checkbox, Radio, RadioGroup, Upload} from 'element-ui';
    @Component({
        components: {
            'el-form': Form,
            'el-form-item': FormItem,
            'el-input': Input,
            'el-select': Select,
            'el-option': Option,
            'el-date-picker': DatePicker,
            'el-time-picker': TimePicker,
            'el-checkbox': Checkbox,
            'el-radio': Radio,
            'el-radio-group': RadioGroup,
            'el-upload': Upload
        }
    })
    export default class PeiwanData extends Vue {
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
        // public name: string = '110';    // 姓名
        // public id: number = 110110001110001;   // 身份证号
        // public account: string = '110110001110001';   // 身份证号
        // public qq: number = 110110001110001;   // 昵称
        // public mobile: number = 110009892973;    // 手机号
    }
</script>

<style scoped>

</style>