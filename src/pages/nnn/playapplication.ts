import "@/assets/less/nnn.less";
import HeadNav from './components/HeadNav.vue';
import FootNav from './components/FootNav.vue';
import {InputNumber, Input, Steps, Step, Select, Option, DatePicker, Upload, Dialog, Form, FormItem, CheckboxGroup, Checkbox, Button} from 'element-ui';
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
        'el-checkbox-group': CheckboxGroup,
        'el-checkbox': Checkbox,
        'el-button': Button
    }
})
class PlayApplication extends Vue {
    public province: string = '';//地区（省市区）
    public birthday: string = ''//生日
    public orderNum: number = 1;//默认一单
    public giveComment: string = ''//获取用户订单留言
    public imgIndex: number = 0;//默认显示第一个
    public hostGameIndex: number = 0;//默认显示第一个
    public commentIndex: number = 0;//默认是显示最新评论
    public options: Array<any> = [
        {
            value: 'Beijing',
            label: '北京'
        }, {
            value: 'Shanghai',
            label: '上海'
        }, {
            value: 'Nanjing',
            label: '南京'
        }, {
            value: 'Chengdu',
            label: '成都'
        }, {
            value: 'Shenzhen',
            label: '深圳'
        }, {
            value: 'Guangzhou',
            label: '广州'
        }];//地区列表
    public dialogImageUrl:string = '';
    public dialogVisible:boolean = false;

    public ruleForm:object = {
        name: "",//姓名
        province: "",//省市/直辖市/自治区
        municipality: "",//市/区
        county: "",//区/县
        birthday: "",//出生日期
        telphone: "",//联系手机
        qq: "",//QQ
        personalityLabel: [],//个性标签
        interests: "",//兴趣爱好
        photographs: [],
        cashAccount: "",//提现账号
        invitationCode: ""
    }
    public personalityLabels: string[] = ["御姐","大叔","阳光帅气","认真专业","成熟稳重","萝莉","颜值担当","逗比闲聊","电竞大神","声甜貌美","强势辅助","乖巧粘人","活泼精灵","沉着冷静","温文尔雅"];//个性标签列表
    public hasSelectedPhotos: number = 0;
     /**
     * @param value 当前输入框的值
     * @param callback 回调函数，可以闯入一个Error对象已提供提示信息 
     */
    public nameValidate = (rule:void, value:string, callback:Function) => {
        var reg:RegExp = /^[\w]{0,}$/;
            if (!reg.test(value)) {
                callback(new Error("请输入合法昵称，由中文数字字母组成"));
            }
            callback();
    }

    //校验规则对象
    public rules:object = {
        name: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' },
            { validator: this.nameValidate, trigger: 'change' }
        ],
        province: [
            { required: true, message: '请选择省市/直辖市/自治区', trigger: 'blur' }
        ],
        municipality: [
            { required: true, message: '请选择市/区', trigger: 'blur' }
        ],
        county: [
            { required: true, message: '请选择区/县', trigger: 'blur' }
        ],
        birthday: [
            { required: true, message: '请选择日期', trigger: 'blur' }
        ],
        telphone: [
            { required: true, message: '请输入手机', trigger: 'blur' }
        ],
        qq: [
            { required: true, message: '请输入QQ', trigger: 'blur' }
        ],
        personalityLabel: [
            { required: true, message: '请选择个性标签', trigger: 'change' }
        ],
        interests: [
            { max: 30, message: '长度在30个字符以内', trigger: 'change' },
        ],
        photographs: [
            { validator: this.checkPhotograph, trigger: 'change' }
        ],
        cashAccount: [
            { required: true, message: '请输入提现账号', trigger: 'blur' }
        ],
        invitationCode: [
        ]
    }
    
    /**
     * @param file 上传文件的名称 size url等信息
     * @param fileList 包含已上传file的数组 
     */
    public handleChange(file, fileList) {
        console.log(file, fileList);
        this.ruleForm['photographs'] = fileList;
        this.hasSelectedPhotos = fileList.length;
    }

    public handleRemove(file, fileList) {
        console.log(file, fileList);
        this.hasSelectedPhotos = fileList.length;
    }

    public handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    }

    public checkPhotograph (rule:any, value:string, callback:Function) {
        if (this.hasSelectedPhotos < 4) {
            callback(new Error("请至少选择四张照片"));
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
     * 点击添加订单数
     */
    public addOrder() {
        // this.orderNum = orderNum++;
    }

    /**
     * 点击切换陪玩游戏
     */
    public changeHostGame(index: number) {
        this.hostGameIndex = index;
    }

    /**
     * 切换最新和热门评论
     */
    public changeComment(index: number) {
        this.commentIndex = index;
    }

    get surplusPhotoNumber() {
        return 6 - this.hasSelectedPhotos;
    }
}

new PlayApplication().$mount('#app')