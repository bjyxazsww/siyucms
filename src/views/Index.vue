<template>
  <div>
      <el-row :gutter="24">
          <el-col :span="16">

                <el-row style="display:flex;justify-content:space-between">
                    <el-col class="fold" :span="12">
                        <div class="shortcut" >
                            <span class="el-icon-present" style="line-height:40px;margin-left:10px;">快捷方式</span>
                            <i class="el-icon-minus" style="line-height:40px;margin-right:10px;" v-if="isShow1" @click="fold1"></i>
                            <i class="el-icon-plus" style="line-height:40px;margin-right:10px;" v-if="!isShow1" @click="fold1"></i>
                        </div>
                        <div class="mg" v-show="isShow1">
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
                        <el-col :span="12" style="margin-left:5px;">
                            <div class="shortcut" >
                                <span class="el-icon-s-data" style="line-height:40px;margin-left:10px;">数据统计</span>
                                <i class="el-icon-minus" style="line-height:40px;margin-right:10px;" v-if="isShow2" @click="fold2"></i>
                                <i class="el-icon-plus" style="line-height:40px;margin-right:10px;" v-if="!isShow2" @click="fold2"></i>
                            </div>
                            <div class="sjtj" v-show="isShow2" style="margin-top:-1px">
                                <el-row  style="border:1px solid #999;background:white;display: flex;justify-content: space-around;">
                                    <el-col :span="11">

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
                                            <div class="inner" style="background:rgb(211, 181, 10);">
                                                <h2>2</h2>
                                                <p>一周用户注册</p>
                                            </div>
                                            <div class="icon" style="background:rgb(152, 130, 5);">
                                                <span>更多信息</span>
                                                <span class="el-icon-right"></span>
                                            </div>
                                        
                                    </el-col>
                                </el-row>
                            </div>
                        
                        </el-col>
            
                </el-row>
                <el-row style="margin-top:10px;">
                    <el-col>
                        <div class="shortcut" >
                                <span class="el-icon-price-tag" style="line-height:40px;margin-left:10px;">版本信息</span>
                                <i class="el-icon-minus" style="line-height:40px;margin-right:10px;" v-if="isShow6" @click="fold6"></i>
                                <i class="el-icon-plus" style="line-height:40px;margin-right:10px;" v-if="!isShow6" @click="fold6"></i>
                        </div>
                        <div  v-show="isShow6" class="wz">
                                <table class="version">
                                    <tbody>
                                        <tr>
                                            <td>网站域名</td>
                                            <td>v6.siyucms.com</td>
                                        </tr>
                                        <tr>
                                            <td>网站目录</td>
                                            <td>/www/wwwroot/v6.siyucms.com/public</td>
                                        </tr>
                                        <tr>
                                            <td>服务器操作系统</td>
                                            <td>Linux</td>
                                        </tr>
                                        <tr>
                                            <td>服务器端口</td>
                                            <td>443</td>
                                        </tr>
                                        <tr>
                                            <td>服务器IP</td>
                                            <td>172.26.85.46</td>
                                        </tr>
                                        <tr>
                                            <td>WEB运行环境</td>
                                            <td>nginx/1.18.0</td>
                                        </tr>
                                        <tr>
                                            <td>MySQL数据库版本</td>
                                            <td>5.7.31-log</td>
                                        </tr>
                                        <tr>
                                            <td>运行PHP版本</td>
                                            <td>8.0.3</td>
                                        </tr>
                                        <tr>
                                            <td>最大上传限制</td>
                                            <td>50M</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </el-col>
                </el-row>
          </el-col>
          <el-col :span="8" >

                <el-row>
                    <el-col>
                        <div class="shortcut" >
                                <span class="el-icon-price-tag" style="line-height:40px;margin-left:10px;">版本信息</span>
                                <i class="el-icon-minus" style="line-height:40px;margin-right:10px;" v-if="isShow3" @click="fold3"></i>
                                <i class="el-icon-plus" style="line-height:40px;margin-right:10px;" v-if="!isShow3" @click="fold3"></i>
                        </div>
                        <div  v-show="isShow3" style="border: 1px solid #999;background:white;margin-top:-1px;">
                                <table class="biaoge" style="margin:5px auto;">
                                    <tr>
                                        <td>当前版本</td>
                                        <td>SIYUCMS V6.1.6</td>
                                    </tr>
                                    <tr>
                                        <td>基于框架</td>
                                        <td>ThinkPHP 6.0.8 + AdminLTE</td>
                                    </tr>
                                    <tr>
                                        <td>获取授权</td>
                                        <td class="button">
                                            <div class="background-color: #17a2b8;border-color: #17a2b8;color:#fff;">获取授权</div>
                                            <div>查看跟新</div>
                                        </td>
                                    </tr>
                                </table>
                        </div>
                    </el-col>
                </el-row>
                <el-row style="margin-top:10px">
                    <el-col>
                         <div class="shortcut" >
                                <span class="el-icon-video-camera-solid" style="line-height:40px;margin-left:10px;">推荐</span>
                                <i class="el-icon-minus" style="line-height:40px;margin-right:10px;" v-if="isShow4" @click="fold4"></i>
                                <i class="el-icon-plus" style="line-height:40px;margin-right:10px;" v-if="!isShow4" @click="fold4"></i>
                        </div>
                        <div class="wz" v-show="isShow4">
                            <p style="color:green;padding-top:10px;">[阿里云拼团]1核2G(254/3年)</p>
                            <p>[阿里云双11] <span style="color:rgb(245, 210, 16)">阿里云红包</span> </p>
                            <p style="color:red;padding-bottom:10px;">阿里云主机低至3折 <span style="color:rgb(245, 210, 16)"> [腾讯云双11]2核4G3M(698元/3年) </span> </p>
                        </div>
                    </el-col>
                </el-row>

                <el-row style="margin-top:10px">
                    <el-col>
                         <div class="shortcut" >
                                <span class="el-icon-user" style="line-height:40px;margin-left:10px;">作者</span>
                                <i class="el-icon-minus" style="line-height:40px;margin-right:10px;" v-if="isShow5" @click="fold5"></i>
                                <i class="el-icon-plus" style="line-height:40px;margin-right:10px;" v-if="!isShow5" @click="fold5"></i>
                        </div>
                        <div class="wz" v-show="isShow5" style="margin-top:-2px">
                            <p style="padding-top:10px">SIYUCMS 基于 ThinkPHP 6.0.8 + AdminLTE-3 开发</p>
                            <p>简单 / 易用 / 响应式 / 低门槛 。 </p>
                            <p>请尊重SIYUCMS开发者的劳动成果，未授权前请保留前台 Powered by SIYUCMS ，并不得修改后台版权信息。</p>
                            <p style="color:blue;">如果SIYUCMS有帮到您，就请作者喝杯茶吧!</p>
                            <p style="padding-bottom:10px;"><i>--感谢您的使用！</i></p>
                        </div>
                    </el-col>
                </el-row>
          </el-col>
      </el-row>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[],
            isShow1 : true,
            isShow2 : true,
            isShow3 : true,
            isShow4 : true,
            isShow5 : true,
            isShow6 : true,
        }
    },
    methods:{
        fold1(){
            this.isShow1 = !this.isShow1
            
        },
        fold2(){
            this.isShow2 = !this.isShow2
            
        },
        fold3(){
            this.isShow3 = !this.isShow3
            
        },
        fold4(){
            this.isShow4 = !this.isShow4
            
        },
        fold5(){
            this.isShow5 = !this.isShow5
            
        },
        fold6(){
            this.isShow6 = !this.isShow6
            
        },
    }
};
</script>

<style scoped>
.wz{
    background:white;
    margin-top: -1px;
    border:1px solid #999;
}
.version{
    
    width: 100%;
}
.version tr{
    border-top:1px solid #959696;
    font-size: 12px;
    line-height: 30px;
}
.version tr:nth-child(2n){
    width: 100%;
    background: #f7f7f7;
}
.version tr td{
    padding-left: 10px;
}
.biaoge{
     height: 30px;
    line-height: 30px;
}
.biaoge tr td{
    padding: 0 10px;
    border: 1px solid #dee2e6;
}
.biaoge tr td div{
    width: 80px;
    height: 25px;
}
.button div{
    float:left;
    text-align: center;
    line-height: 20px;
    width: 70px ;
    height: 20px;
    
}
.shortcut{
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
.wz p{
    font-size: 12px;
    margin-left: 5px;
}
 .inner h2{
     padding-top: 20px;
     margin:10px 5px 20px;
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
.icon{
    margin-bottom: 10px;
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