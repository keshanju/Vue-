<template>
<div>
  <head-nav></head-nav>
  <div class="user-content_wrap">
    <div class="user-content">
      <div class="pad_v15">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>陪玩</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="clear_fix">
        <personal-center></personal-center>
        <div class="component-box">
          <router-view />
        </div>
      </div>
    </div>
    <foot-nav></foot-nav>
  </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Breadcrumb, BreadcrumbItem} from 'element-ui'
import FootNav from "@/pages/nnn/components/FootNav.vue"
import HeadNav from "@/pages/nnn/components/HeadNav.vue"
import PersonalCenter from "@/pages/nnn/components/PersonalCenter.vue"

@Component({
    components: {
      "foot-nav": FootNav,
      "head-nav": HeadNav,
      "personal-center": PersonalCenter,
      "el-breadcrumb": Breadcrumb,
      "el-breadcrumb-item": BreadcrumbItem
    }
})
export default class Layout extends Vue {
    
}
</script>