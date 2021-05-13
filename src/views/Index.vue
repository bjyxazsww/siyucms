<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-row>
          <el-col class="fold" :span="11">
              <div class="shortcut" >
                  <span class="el-icon-present" style="line-height:40px;margin-left:10px;">快捷方式</span>
                  <i class="el-icon-minus" style="line-height:40px;margin-right:10px;" v-if="isShow" @click="fold"></i>
                  <i class="el-icon-plus" style="line-height:40px;margin-right:10px;" v-if="!isShow" @click="fold"></i>
              </div>
              <div class="mg" v-show="isShow">
                  <div>
                      <span class="el-icon-s-tools"></span>
                      <p>系统设置</p> 
                    </div>
                  <div>
                      <span class="el-icon-coin"></span>
                      <p>数据备份</p>
                      </div>
                  <div>
                      <span class="el-icon-menu"></span>
                      <p>模型管理</p> 
                   </div>
                  <div>
                      <span class="el-icon-s-grid"></span>
                      <p>栏目管理</p> 
                      </div>
                  <div>
                      <span class="el-icon-connection"></span>
                      <p>友情链接</p> 
                      </div>
                  <div>
                      <span class="el-icon-chat-dot-square"></span>
                      <p>广告管理</p> 
                      </div>
                  <div>
                      <span class="el-icon-s-ticket"></span>
                      <p>碎片管理</p> 
                      </div>
                  <div>
                      <span class="el-icon-paperclip"></span>
                      <p>模板管理</p> 
                      </div>
              </div>
            </el-col>
          <el-col :span="11" style="margin-left:5px;">
               <div class="shortcut" >
                  <span class="el-icon-s-data" style="line-height:40px;margin-left:10px;">数据统计</span>
                  <i class="el-icon-minus" style="line-height:40px;margin-right:10px;" v-if="isShow" @click="fold"></i>
                  <i class="el-icon-plus" style="line-height:40px;margin-right:10px;" v-if="!isShow" @click="fold"></i>
              </div>
               <div class="sjtj" v-show="isShow">
                   <el-row :gutter="24">
                       <el-col :span="11" style="margin-left:5px;">

                        <div class="inner" style="background:rgb(9, 147, 147)">
                            <h2>20</h2>
                            <p>待处理留言</p>
                        </div>
                        <div class="icon" style="background:rgb(9, 115, 115);">
                            <span>更多信息</span>
                            <span class="el-icon-right"></span>
                        </div>
                       </el-col>

                        <el-col :span="11">
                            <div class="inner">
                                <h2>2</h2>
                                <p>一周用户注册</p>
                            </div>
                            <div class="icon">
                                <span>更多信息</span>
                                <span class="el-icon-right"></span>
                            </div>
                        
                       </el-col>
                   </el-row>
               </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow : true
        }
    },
    methods:{
        fold(){
            this.isShow = !this.isShow
            
        }
    }
};
</script>

<style scoped>
.shortcut{
    color: rgb(9, 147, 147);
    height: 40px;
    line-height: 40px;
    border: 1px solid #999;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: auto 10px;
}
.fold{
transition: all 0.5s;
}
 .inner h2{
     margin:20px 5px;
     font-size:24px;
 }  
.inner p{
    margin:5px 5px 0 5px;
    font-size:16px;
    padding-bottom:30px;
}
.icon span:nth-child(1){
    display: inline-block;
    text-align: center;
}
.mg{
    border: 1px solid #999;
    border-top: 0px;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
transition: all 0.5s;
    flex-wrap: wrap;
}
.mg div{
    width: 90px;
    height: 65px;
    margin: 5px;
    background: #f1f1f1;
    border: 1px solid rgb(115, 114, 114);
}
.mg div span{
    margin:15px 30px;
    margin-bottom: 0;
}
.mg div p{
    margin: 0;
    text-align: center;
}
</style>