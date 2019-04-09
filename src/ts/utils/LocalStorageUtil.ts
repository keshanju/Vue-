/**
 * localstorage类
 */
import Util from "@/ts/utils/Util";

export default class LocalStorageUtil {
    /**
     * localstorage
     */


    /**
     * cookie
     */
    public static COOKIE_LANGUAGE_TYPE = 'user_lang'; //语言


    /**
     * 保存浏览器参数
     */
    public static saveParam() {
        const toHtml = Util.getUrlParam('to');
        const page = parseInt(Util.getUrlParam('page'));
        const tid = parseInt(Util.getUrlParam('id'));
        if (toHtml != '') localStorage.setItem('param_to', toHtml);
        if (!isNaN(page)) localStorage.setItem('param_page', page + '');
        if (!isNaN(tid)) localStorage.setItem('param_id', tid + '');
    }

    /**
     * 返回保存的参数
     * @param isRemove 是否删除
     * @return [toHtml,page,tid]
     */
    public static getParam(isRemove: boolean = false) {
        let toHtml: string = localStorage.getItem('param_to');
        if (toHtml == null) toHtml = '';
        const page = parseInt(localStorage.getItem('param_page'));
        const tid = parseInt(localStorage.getItem('param_id'));
        if (isRemove) {
            localStorage.removeItem('param_to');
            localStorage.removeItem('param_page');
            localStorage.removeItem('param_id');
        }

        return [toHtml, page, tid];
    }


    /**
     * 设置cookie
     * @param key
     * @param cvalue
     * @param value 单位小时
     * @param isDomain 是否设置domain，解决跨域访问
     */
    public static setCookie(key: string, value: string, exdays = -1, isDomain: boolean = false) {
        let cstr = key + "=" + value;
        // 时间
        if (exdays > 0) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
            const expires = "; expires=" + d.toUTCString();
            cstr = cstr + expires;
        }
        // 域名
        if (isDomain) {
            const domain = Util.getDomain();
            // ProjectConfig.log('cookie设置的域名:' + domain);
            cstr = cstr + '; domain=' + domain;
        }
        //path
        cstr = cstr + '; path=/';
        document.cookie = cstr;
    }

    /**
     * 读取cookie
     * @param key
     * @param isDomain 是否读取跨域cookie
     */
    public static getCookie(key: string, isDomain: boolean = false) {
        var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        }
        return '';
    }

    /**
     * 删除cookie
     * @param name
     */
    public static removeCookie(key: string, isDomain: boolean = false) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = LocalStorageUtil.getCookie(key);
        if (cval != null && cval != '') {
            let cstr = key + "=" + cval + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            // 域名
            if (isDomain) {
                const domain = Util.getDomain();
                cstr = cstr + '; domain=' + domain;
            }
            cstr = cstr + '; path=/';
            document.cookie = cstr;
        }
    }
}
