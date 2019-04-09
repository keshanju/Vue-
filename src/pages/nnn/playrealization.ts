import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import {InputNumber, Input, Steps, Step, Select, Option, DatePicker, Upload, Dialog, Form, FormItem, Button} from 'element-ui';
import "babel-polyfill";
import {Component, Vue} from "vue-property-decorator";

@Component({
    components: {
        'head-nav': HeadNav,
        'foot-nav': FootNav,
        'el-input-number': InputNumber,
        'el-input': Input,
        'el-step': Step,
        'el-steps': Steps,
        'el-select': Select,
        'el-option': Option,
        'el-date-picker': DatePicker,
        'el-upload': Upload,
        'el-dialog': Dialog,
        'el-form': Form,
        'el-form-item': FormItem,
        'el-button': Button
    }
})
class PlayRealization extends Vue {
    public checkagree: boolean = false;//是否同意条款
    public balance: number = 1236.81;//可提现余额
    public canNotDraw: number = 36.81;//不可提现余额
    public drawBalance: number = 0;//提现金额
    public verifiyCode: string = "";//验证码
    public hasSubmit: boolean = false;//是否点击提现按钮

    public ruleForm: object = {
        "balance": "",
        "verificationCode": ["", "", "", "", "", ""]
    }

    public rules: object = {
        balance: [
            { validator: this.checkBalance, trigger: 'change' }
        ],
        verificationCode: [
            { validator: this.checkVerifiy, trigger: 'change' }
        ]
    }

    /**
     * @param value 当前输入框的值
     * @param callback 回调函数可以闯入一个Error对象抛出对应的提示信息
     */
    public checkBalance(rule:any, value:string, callback:Function) {
        if (value === "") {
            callback(new Error('请输入提现金额'));
        } else {
            if ((Number(value) - Number(this.canDrawBalance)) > 0) {
                callback(new Error('超出可提现金额上限'));
            } else {
                callback();
            }
        }
    }

     /**
     * @param value 当前输入框的值
     * @param callback 回调函数可以闯入一个Error对象抛出对应的提示信息
     */
    public checkVerifiy(rule:any, value:string, callback:Function) {
        var verificationCode = this.ruleForm["verificationCode"].join("");
        if (verificationCode.length === 6) {
            var reg = /^\d{6}$/;
            if (reg.test(verificationCode)) {
                callback();
            } else {
                callback(new Error("验证码为纯数字"));
            }
        } else {
            if (this.hasSubmit) {
                if (verificationCode.length === 0) {
                    callback(new Error("请输入验证码"));
                } else {
                    callback(new Error("请将验证码输入完整"));
                }
            } else {
                callback();
            }
        }
    }

    /**
    * 自动聚焦到下一个验证码输入框
    * @param index 当前验证码输入框的index
    */
    public codeInputChange(index:number) {
        if (index !== 5 && this.ruleForm["verificationCode"][index]) {
            this.$refs['codeItem' + (index + 1)][0]['focus']();
        }
    }

    /**
    * 全部提现
    */
    public drawAll() {
        this.ruleForm["balance"] = this.canDrawBalance;
    }

    /**
    * 获取验证码
    */
    public getVerifiy() {
        this.verifiyCode = "123456";
    }

    /**
    * 提现
    * @param formName el-form指令的ref值
    */
    public submit(formName: string) {
        this.hasSubmit = true;
        this.$refs[formName]['validate']((valid:boolean) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
        });
    }
                
    /**
     * 同意条款
     */
    public checkAgree() {
        this.checkagree = !this.checkagree;
    }

    //可提现余额
    get canDrawBalance():string {
        return ((this.balance*100 - this.canNotDraw*100) / 100).toFixed(2);
    }

}

new PlayRealization().$mount('#app')