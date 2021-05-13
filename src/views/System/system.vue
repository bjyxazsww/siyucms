<template>
  <div>
      <p style="font-size: 24px;">系统设置 <span style="font-size: 16px;color:#333">修改</span></p>
      <el-tabs type="border-card">
        <el-tab-pane label="基础设置">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="网站名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="网站LOGO">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="备案号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="版权信息">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="网站地址">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="传真号码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱账号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="QQ">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="二维码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="SEO设置">配置管理</el-tab-pane>
        <el-tab-pane label="开关设置">角色管理</el-tab-pane>
        <el-tab-pane label="模板设置">定时任务补偿</el-tab-pane>
        <el-tab-pane label="上传设置">定时任务补偿</el-tab-pane>
        <el-tab-pane label="其他设置">定时任务补偿</el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form:[]
    }
  }
}
</script>

<style scoped>
p{
  
}
</style>