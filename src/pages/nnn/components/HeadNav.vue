<template>
    <div class="nav-wrap">
        <div class="headnav clear_fix">
            <!--logo-->
            <div class="h-nav_logo f_left">
                <a><img class="img_filter" src="../images/index/main-logo.png" alt="3N陪玩商城"></a>
            </div>
            <!--链接列表-->
            <div class="f_left">
                <ul class="clear_fix mar_t5">
                    <li class="f_left h-nav_link">
                        <a class="h-nav_normal h-nav_active" href="#"><i class="iconfont iconshouye"></i>首页</a>
                    </li>
                    <li class="f_left h-nav_link">
                        <a class="h-nav_normal" href="#"><i class="iconfont iconpeiwan"></i>陪玩</a>
                    </li>
                    <li class="f_left h-nav_link">
                        <a class="h-nav_normal" href="#"><i class="iconfont iconzuhao"></i>租号</a>
                    </li>
                    <li class="f_left h-nav_link">
                        <a class="h-nav_normal" href="#"><i class="iconfont iconyouxi"></i>游戏</a>
                    </li>
                </ul>
            </div>
            <!--搜索框-->
            <div class="f_left h-nav_search">
                <el-row class="demo-autocomplete">
                    <el-col :span="24">
                        <el-autocomplete
                            class="inline-input"
                            v-model="searchItem"
                            :fetch-suggestions="querySearch"
                            placeholder="陪玩昵称/陪玩ID/商品昵称/商品ID"
                            @select="handleSelect">
                        </el-autocomplete>
                    </el-col>
                </el-row>
                <!-- <input class="ipt" v-model="searchItem" @input="sortSearchList()" @focus="showSearchList()" @blur="hideSearchList()" type="search" placeholder="陪玩昵称/陪玩ID/商品昵称/商品ID"> -->
                <!-- <el-input v-model="searchItem" @input="sortSearchList()" @focus="showSearchList()" @blur="hideSearchList()" type="search" placeholder="陪玩昵称/陪玩ID/商品昵称/商品ID"></el-input> -->
                <i class="iconfont iconsousuo" @click="search()"></i>
                <!-- <div class="h-search_select">
                    <ul class="search-select_content" v-show="searchList.length">
                        <li class="search-select_item" v-for="item in searchList" :key="item">{{item}}<span class="" @click="deleteSearchItem(item)">删除</span></li>
                    </ul>
                    <span v-show="!searchList.length">暂无数据</span>
                    <div class="search-footer">
                       <span>全部删除</span>
                    </div>
                </div> -->
            </div>
            <!--申请入驻，用户头像-->
            <div class="f_right h-nav_enter">
                <div class="f_left btn-settled">申请入驻</div>
                <!--已登录-->
                <!--<div class="user-avatar"><img src="../images/index/user_avatar.png" alt=""></div>-->
                <!--未登录-->
                <div @click="showEnterSite()" class="login-site">
                    <i class="iconfont icondengluzhuce"></i>
                    <span><a>登录</a>&nbsp;|&nbsp;<a>注册</a></span>
                </div>
            </div>

            <!--登录注册弹出框-->
            <el-dialog :visible.sync="loginDialogVisible" width="750px" center>
                <enter-site></enter-site>
            </el-dialog>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {Dialog, Input, Row, Col, Autocomplete} from 'element-ui';
    import EnterSite from './EnterSite.vue';
    @Component({
        components: {
        'enter-site': EnterSite,
        'el-dialog': Dialog,
        'el-input': Input,
        'el-row': Row,
        'el-col': Col,
        'el-autocomplete': Autocomplete
        }
    })
    export default class HeadNav extends Vue {
        public searchItem: string = "";
        public loginDialogVisible:boolean = false;//   默认隐藏登录注册弹框
        public searchList: object[] = [];//  搜索框下拉历史记录
        public isShowList: boolean = false;//  搜索框下拉控制,默认隐藏

        /**
         * 点击出现是否弹框
         */
        public showEnterSite() {
            this.loginDialogVisible = true;
        }
        public search() {
            if (!this.searchItem) {
                return false;
            }
            if (localStorage["searchList"]) {
                this.searchList = JSON.parse(localStorage["searchList"]);
            }
            interface Obj {
                value: string
            }
            var obj:Obj = {value: this.searchItem};
            this.searchList.unshift(obj);
            this.searchList = Array.from(new Set(this.searchList));
            this.searchList = this.searchList.splice(0, 10);
            localStorage["searchList"] = JSON.stringify(this.searchList);
        }
        public showSearchList() {
            this.isShowList = true;
            if (localStorage["searchList"]) {
                this.searchList = JSON.parse(localStorage["searchList"]);
            }
        }
        public hideSearchList() {
            this.isShowList = false;
        }
        public sortSearchList() {
            console.log("1111")
        }
        public deleteSearchItem(item:string) {
            console.log(item);
        }
        public handleSelect(item:string) {
            console.log(item);
        }
        public querySearch(queryString, cb){
            console.log("1111")
            if (localStorage["searchList"]) {
                this.searchList = JSON.parse(localStorage["searchList"]);
            }
            var searchList = this.searchList;
            var results = queryString ? searchList.filter(this.createFilter(queryString)) : searchList;
            cb(results);
        }
        public createFilter (queryString:string){
            return (item) => {
                return (item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        }
    }
</script>

<style scoped>

</style>