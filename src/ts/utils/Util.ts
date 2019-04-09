import LocalStorageUtil from './LocalStorageUtil';

/**
 * 工具类
 */
export default class Util {

    /**
     * 注：新增一种语言，需要同时修改
     * i18n.config.json和language.config.json
     */
    public static ZH_CN = 'zh_CN';
    public static EN = 'en';
    public static CN = 'cn'; //地址栏用的

    /**
     * 倒计时
     * @param num
     * @param interval 间隔，单位:秒
     * @param backFun
     */
    public static countDown(num: number, interval: number, backFun: any) {
        let updateInvoiceTimer = setInterval(function () {
            num--;
            if (num <= 0) num = 0;
            backFun(num);
            if (num == 0) {
                clearInterval(updateInvoiceTimer);
            }
        }, interval * 1000);
    }

    /**
     * 读取地址栏参数
     * @param name
     */
    public static getUrlParam(name: string): string {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);

        return '';
    }

    /**
     * 根据当前语言获取第三方登录需传递的语言参数
     */
    public static getLanguageType(ln: string) {
        switch (ln) {
            case Util.ZH_CN:
                return Util.CN;
            case Util.EN:
                return Util.EN;
            default:
                break;
        }
    }

    /**
     * 获取浏览器的语言
     */
    public static getExplorerbLang() {
        var lang = navigator.language;
        if (lang == null) return null;
        lang = lang.substr(0, 2);
        if (lang == 'zh') {
            return Util.ZH_CN;
        } else {
            return Util.EN;
        }
    }

    /**
     * 时间戳转换
     * @param inputTime
     */
    public static formatDateTime(inputTime: number) {
        let date = new Date(inputTime);
        let y: any = date.getFullYear();
        let m: any = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d: any = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h: any = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let minute: any = date.getMinutes();
        let second: any = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }

    /**
     * 转换格式
     * @param y
     * @param m
     * @param d
     */
    public static formatDataTime2(y: string, m: string, d: string): string {
        return y + '-' + m + '-' + d;
    }


    /**
     * 获取滚动的高度和宽度
     * 用法 scroll().top  获取滚动高度
     * 用法 scroll().left  获取滚动宽度
     */
    public static scroll() {
        if (window.pageYOffset !== null) {
            return {
                top: pageYOffset,
                left: pageXOffset
            }
        } else if (document.compatMode === "CSS1Compat") {//符合W3C标准
            return {
                top: document.documentElement.scrollTop,
                left: document.documentElement.scrollLeft
            }
        } else {
            return {
                top: document.body.scrollTop,
                left: document.body.scrollLeft
            }
        }
    }

    /**
     * 返回当前元素距离文档顶部的距离
     * @param node
     */
    public static offset(node: any) {
        var offest = {
            top: 0,
            left: 0
        };
        // 当前为IE11以下, 直接返回{top: 0, left: 0}
        if (!node.getClientRects().length) {
            return offest;
        }
        // 当前DOM节点的 display === 'node' 时, 直接返回{top: 0, left: 0}
        if (window.getComputedStyle(node)['display'] === 'none') {
            return offest;
        }
        // Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
        // 返回值包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
        // 返回如{top: 8, right: 1432, bottom: 548, left: 8, width: 1424…}
        offest = node.getBoundingClientRect();
        var docElement = node.ownerDocument.documentElement;
        return {
            top: offest.top + window.pageYOffset - docElement.clientTop,
            left: offest.left + window.pageXOffset - docElement.clientLeft
        };
    }

    /**
     * 获取dommain，格式示例：.bohe.com
     */
    public static getDomain() {
        const hostname = window.location.hostname;
        const hostList = hostname.split('.');
        let domain = '';
        for (let i = 1; i < hostList.length; i++) {
            domain = domain + '.' + hostList[i];
        }
        return domain;
    }

    /**
     * 复制到剪切板
     * @param text
     */
    public static copyToClipboard(text: string) {
        // if(text.indexOf('-') !== -1) {
        //     let arr = text.split('-');
        //     text = arr[0] + '-' + arr[1];
        // }
        var textArea = document.createElement("textarea");
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? true : false;
        } catch (err) {
        }
        document.body.removeChild(textArea);

        return msg;
    }

    /**
     * 添加谷歌统计代码
     * @param text
     */
    public static googleSatics(region_code: number) {
        if (region_code == 0) {
            // Google Tag Manager
            let oHead = document.getElementsByTagName('HEAD').item(0);
            let oScript = document.createElement("script");
            oScript.type = "text/javascript";
            let scriptStr = ` (
                function (w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start': new Date().getTime(), event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0];
                    var j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-WT2CCTQ');`
            try {
                //IE浏览器认为script是特殊元素,不能再访问子节点;报错;
                oScript.appendChild(document.createTextNode(scriptStr));
                oHead.appendChild(oScript);
            }
            catch (ex) {
                oScript.text = scriptStr;
            }
        }
    }
}