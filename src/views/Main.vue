<template>
  <el-container>
    <el-aside :width="`${width}px`" >
      

      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        background-color="#30363b"
         text-color="#c2c7d0"
         style="border:0;"
        :collapse="collapse"
        router
      >
      <!-- logo -->
        <div class="logo">
            <img src="../../public/logo.png" alt="" />
            <span>SIYUCMS</span>
        </div>
        <el-divider></el-divider>
        <!-- 头像 -->
        <div class="tx">
            <img src="../../public/tx.jpg" alt="" />
            <span>text</span>
        </div>
        <el-divider></el-divider>

        <el-submenu index="/admin">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">系统管理</span>
          </template>
            <el-menu-item index="/admin/system">系统设置</el-menu-item>
            <el-menu-item index="/admin/dictionaryType">字典类型</el-menu-item>
            <el-menu-item index="/admin/dictionary">字典数据</el-menu-item>
            <el-menu-item index="/admin/emali">邮件配置</el-menu-item>
            <el-menu-item index="/admin/sms">短信配置</el-menu-item>
            <el-menu-item index="/admin/template">模板管理</el-menu-item>
            <el-menu-item index="/admin/plugin">插件管理</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-guide"></i>
            <span slot="title">权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">管理员管理</el-menu-item>
            <el-menu-item index="2-2">角色组管理</el-menu-item>
            <el-menu-item index="2-3">菜单规则</el-menu-item>
            <el-menu-item index="2-4">管理员日志</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-coin"></i>
            <span slot="title">数据库管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">数据库备份</el-menu-item>
            <el-menu-item index="3-2">数据库还原</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-lightning"></i>
            <span slot="title">模块管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">模块管理</el-menu-item>
            <el-menu-item index="4-2">字段管理</el-menu-item>
            <el-menu-item index="4-3">字段分组</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-grid"></i>
            <span slot="title">栏目管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">栏目管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">网站功能</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">友情链接</el-menu-item>
            <el-menu-item index="6-2">广告管理</el-menu-item>
            <el-menu-item index="6-3">广告分组</el-menu-item>
            <el-menu-item index="6-4">碎片管理</el-menu-item>1
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span slot="title">会员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">会员管理</el-menu-item>
            <el-menu-item index="7-2">会员分组</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-first-aid-kit"></i>
            <span slot="title">内容管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="8-1">单页模块</el-menu-item>
            <el-menu-item index="8-2">文章模块</el-menu-item>
            <el-menu-item index="8-3">图片模块</el-menu-item>
            <el-menu-item index="8-4">产品模块</el-menu-item>
            <el-menu-item index="8-5">下载模块</el-menu-item>
            <el-menu-item index="8-6">团队模块</el-menu-item>
            <el-menu-item index="8-7">留言模块</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-monitor"></i>
            <span slot="title">实际演示</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="9-1">按钮</el-menu-item>
            <el-menu-item index="9-2">图标</el-menu-item>
            <el-menu-item index="9-3">常规</el-menu-item>
            <el-menu-item index="9-4">模态框</el-menu-item>
            <el-menu-item index="9-5">时间轴</el-menu-item>
            <el-menu-item index="9-6">弹层</el-menu-item>
            <el-menu-item index="9-7">layer表单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="40px">
          <div class="left">
              <span class="el-icon-s-fold" @click="onCollapse"></span>
              <span class="el-icon-s-tools">主导航</span>
              <span class="el-icon-menu">内容管理器</span>
          </div>
          <div class="right">
              <span>
                  <img src="../../public/tx.jpg" alt="" />
              </span>
              
               <span>text</span>
              <span class="el-icon-rank"></span>
              <span class="el-icon-refresh"></span>
              <span class="el-icon-s-home"></span>
          </div>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
       <el-footer height="40px">
           <div class="footer-left">
               <strong>Copyright © 2019-2021 </strong>
               <a href="">siyucms.com</a>
               <font>All rights reserved.</font> 
           </div>
           <div class="footer-right">
               <b>Version</b>
               <font>6.1.6</font>
           </div>
       </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
        collapse:false,
        isShow: false,
        width : 200
    };
  },
  created(){
  },
  methods:{
      onCollapse(){
          this.collapse = !this.collapse
          this.width = this.collapse ? 72 : 200
      }
  }
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-aside {
  background: #30363b;
  color: #c2c7d0;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.5s;
}
.el-aside::-webkit-scrollbar {
	width: 5px;
}
.el-aside::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 5px rgb(105, 104, 103);
	background: rgb(105, 104, 103);
}
.el-aside::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 5px #30363b;
	border-radius: 0;
	background: #30363b;
}
.logo {
  margin: 10px;
}
.logo img {
  width: 29px;
  height: 29px;
}
.logo span {
  font-size: 18px;
  margin: 0 5px;
}
.tx {
  margin: 10px;
}
.tx img {
  width: 29px;
  height: 29px;
  border-radius: 50%;
}
.tx span {
  font-size: 14px;
  margin: 0 5px;
}
.input-with-select {
  background: black;
}
.el-main{
    overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.5s;
}
.el-main::-webkit-scrollbar {
	width: 5px;
}
.el-main::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 5px rgb(105, 104, 103);
	background: rgb(105, 104, 103);
}

.left{
    float: left;
}
.left span{
    margin: 10px;
}
.right{
    float: right;
}
.right span{
    margin: 10px;
}
.right span img {
  width: 29px;
  height: 29px;
  border-radius: 50%;
}
.el-main{
    background: #f1f1f1;
}
.footer-left{
    float: left;
    color: #869099;
    line-height: 40px;
}
.footer-left a{
    text-decoration: none;
    color: #869099;
}
.footer-right{
    line-height: 40px;
    color: #869099;
    float: right;
}
</style>