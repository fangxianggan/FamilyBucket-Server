webpackJsonp([39],{"4nDv":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o("EIbn"),r={props:{value:{type:Boolean,default:!1},modelForm:{type:Object},appList:{type:Array}},data:function(){return{data:[],show:!1,btnName:"新建",rules:{Name:[{required:!0,message:"请输入项目名称",trigger:"blur"}],AppId:[{required:!0,message:"请选择项目组",trigger:"blur"}]}}},created:function(){this.BLL=new l.a(this),this.value&&(this.show=!0)},computed:{loading:function(){return this.$store.getters.btnLoading.str&&"edit"===this.$store.getters.btnLoading.id}},mounted:function(){},methods:{handleReset:function(){this.$refs.modelForm.resetFields()},handleSubmit:function(e){this.BLL.editSubmit(e)}},watch:{show:function(e){var t=this;this.$emit("input",e),e?this.$nextTick(function(){t.data=[],t.modelForm.Id?t.btnName="编辑":t.btnName="新建"}):this.$refs.modelForm.clearValidate()},value:function(e){this.show=e}}},a={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:e.btnName,visible:e.show,"close-on-click-modal":!1,width:"50%"},on:{"update:visible":function(t){e.show=t}}},[e.modelForm?o("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"modelForm",attrs:{model:e.modelForm,rules:e.rules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"项目名称",prop:"Name"}},[o("el-input",{model:{value:e.modelForm.Name,callback:function(t){e.$set(e.modelForm,"Name",t)},expression:"modelForm.Name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"归属项目组",prop:"AppId"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.modelForm.AppId,callback:function(t){e.$set(e.modelForm,"AppId",t)},expression:"modelForm.AppId"}},e._l(e.appList,function(e){return o("el-option",{key:e.AppId,attrs:{label:e.Name,value:e.AppId}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"是否公有",prop:"IsPublic"}},[o("el-switch",{model:{value:e.modelForm.IsPublic,callback:function(t){e.$set(e.modelForm,"IsPublic",t)},expression:"modelForm.IsPublic"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"备注",prop:"Comment"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.modelForm.Comment,callback:function(t){e.$set(e.modelForm,"Comment",t)},expression:"modelForm.Comment"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"是否删除",prop:"IsDeleted"}},[o("el-switch",{model:{value:e.modelForm.IsDeleted,callback:function(t){e.$set(e.modelForm,"IsDeleted",t)},expression:"modelForm.IsDeleted"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.btnName))]),e._v(" "),o("el-button",{on:{click:e.handleReset}},[e._v("重置")])],1)],1):e._e()],1)},staticRenderFns:[]};var m=o("VU/8")(r,a,!1,function(e){o("VMCm")},null,null);t.default=m.exports},VMCm:function(e,t){}});