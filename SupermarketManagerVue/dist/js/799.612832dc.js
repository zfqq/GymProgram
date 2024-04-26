"use strict";(self["webpackChunksupermarket_manager"]=self["webpackChunksupermarket_manager"]||[]).push([[799],{799:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[e._v("首页")]),t("el-breadcrumb-item",[e._v("商品管理")]),t("el-breadcrumb-item",[e._v("分类管理")])],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left","padding-right":"10px"},attrs:{span:8}},[t("el-input",{attrs:{placeholder:"分类名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("el-col",{attrs:{span:8}},[t("el-select",{attrs:{placeholder:"状态",clearable:""},model:{value:e.searchForm.state,callback:function(t){e.$set(e.searchForm,"state",t)},expression:"searchForm.state"}},[t("el-option",{attrs:{label:"正常",value:"0"}}),t("el-option",{attrs:{label:"停用",value:"-1"}})],1)],1)],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left"},attrs:{span:24}},[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.submitSearchForm}},[t("i",{staticClass:"iconfont icon-r-find",staticStyle:{"font-size":"18px"}}),e._v(" 搜索")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"},on:{click:function(t){e.newVisable=!0}}},[t("i",{staticClass:"iconfont icon-r-add",staticStyle:{"font-size":"18px"}}),e._v(" 创建分类 ")])],1)],1),t("br"),t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"medium"}},[t("el-table-column",{attrs:{type:"index","label-width":"100px",label:"序号"}}),t("el-table-column",{attrs:{prop:"name","label-width":"100px",label:"名称"}}),t("el-table-column",{attrs:{prop:"info","label-width":"100px","show-overflow-tooltip":!0,label:"描述"}}),t("el-table-column",{attrs:{prop:"state","label-width":"100px",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(r){return["0"==r.row.state?t("el-tag",{attrs:{type:"success"}},[e._v("正常")]):t("el-tag",{attrs:{type:"danger"}},[e._v("停用")])]}}])}),t("el-table-column",{attrs:{label:"操作",width:"240",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"},on:{click:function(t){return e.editbtn(r.row)}}},[t("i",{staticClass:"iconfont icon-r-edit",staticStyle:{"font-size":"18px"}}),e._v(" 修改")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"danger"},on:{click:function(t){return e.forbidden(r.row.id)}}},[t("i",{staticClass:"iconfont icon-r-no",staticStyle:{"font-size":"18px"}}),e._v(" 停用")])]}}])})],1),t("div",{staticStyle:{margin:"10px 0 15px 0"}},[t("el-pagination",{attrs:{"current-page":e.searchForm.currentPage,"page-sizes":[5,10,20,50],"page-size":e.searchForm.pageSize,layout:"total,sizes, prev, pager, next,jumper",total:e.searchForm.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.searchForm,"currentPage",t)},"update:current-page":function(t){return e.$set(e.searchForm,"currentPage",t)}}})],1)],1),t("el-dialog",{attrs:{title:"创建商品分类",visible:e.newVisable,width:"50%"},on:{"update:visible":function(t){e.newVisable=t}}},[t("el-form",{ref:"newForm",staticClass:"demo-ruleForm",attrs:{model:e.newForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"名称：",prop:"name"}},[t("el-input",{model:{value:e.newForm.name,callback:function(t){e.$set(e.newForm,"name",t)},expression:"newForm.name"}})],1),t("el-form-item",{attrs:{label:"描述："}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.newForm.info,callback:function(t){e.$set(e.newForm,"info",t)},expression:"newForm.info"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:function(t){return e.submitNewForm("newForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 提交")]),t("el-button",{staticStyle:{"font-size":"18px"},on:{click:e.saveCancel}},[e._v("取消")])],1)],1)],1),t("el-dialog",{attrs:{title:"分类信息修改",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"名称：",prop:"name"}},[t("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),t("el-form-item",{attrs:{label:"描述："}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.editForm.info,callback:function(t){e.$set(e.editForm,"info",t)},expression:"editForm.info"}})],1),t("el-form-item",{attrs:{label:"状态：",prop:"state"}},[t("el-select",{attrs:{clearable:"",placeholder:"请选择状态"},on:{change:function(t){return e.$forceUpdate()}},model:{value:e.editForm.state,callback:function(t){e.$set(e.editForm,"state",t)},expression:"editForm.state"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:function(t){return e.submitEditForm("editForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 提交")]),t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){return e.resetEditForm("editForm")}}},[t("i",{staticClass:"iconfont icon-r-refresh",staticStyle:{"font-size":"18px"}}),e._v(" 重置")])],1)],1)],1)],1)},a=[],o=r(8151),i=r(5547),s={data(){return{newVisable:!1,dialogVisible:!1,options:[{label:"正常",value:"0"},{label:"停用",value:"-1"}],tableData:[],searchForm:{total:0,currentPage:1,pageSize:5},editForm:{},newForm:{},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],state:[{required:!0,message:"状态不能为空",trigger:"blur"}]}}},methods:{init(){(0,i.mJ)(this.searchForm).then((e=>{e=e.data,200==e.code?(console.log(e.data),this.tableData=e.data.records,this.searchForm.total=e.data.total,this.searchForm.pageSize=e.data.size,this.searchForm.currentPage=e.data.current):(0,o.gk)(e.msg,"error")}))},submitSearchForm(){this.init()},handleSizeChange(e){this.searchForm.pageSize=e,this.init(),console.log(`每页 ${e} 条`)},handleCurrentChange(e){this.searchForm.currentPage=e,this.init(),console.log(`当前页: ${e}`)},submitNewForm(e){this.$refs[e].validate((e=>{e&&(0,i.a1)(this.newForm).then((e=>{e=e.data,200==e.code?((0,o.gk)("操作成功"),this.newForm={},this.newVisable=!1,this.init()):(0,o.gk)(e.msg,"error")}))}))},saveCancel(){this.newVisable=!1,this.$refs["newForm"].resetFields()},editbtn(e){this.editForm={...e},this.dialogVisible=!0},submitEditForm(e){this.$refs[e].validate((e=>{e&&(0,i.Vx)(this.editForm).then((e=>{e=e.data,200==e.code?((0,o.gk)("操作成功"),this.editForm={},this.dialogVisible=!1,this.init()):(0,o.gk)(e.msg,"error")}))}))},resetEditForm(e){this.$refs[e].resetFields()},forbidden(e){(0,i.jK)(e).then((e=>{e=e.data,200==e.code?((0,o.gk)("操作成功"),this.searchForm.currentPage=1):(0,o.gk)(e.msg,"error"),this.init()}))}},mounted(){this.init()}},l=s,c=r(3736),u=(0,c.Z)(l,n,a,!1,null,null,null),d=u.exports},5547:function(e,t,r){r.d(t,{Vx:function(){return i},a1:function(){return o},jK:function(){return s},mJ:function(){return l},sD:function(){return c}});var n=r(8151);const a="/goods_management/goods_category";function o(e){return(0,n.tB)(a+"/save",e)}function i(e){return(0,n.tB)(a+"/update",e)}function s(e){return(0,n.tB)(a+"/deactivate",{cid:e})}function l(e){return(0,n.tB)(a+"/queryPageByQo",e)}function c(){return(0,n.Ck)(a+"/normalCategoryAll")}},9253:function(e,t,r){r.d(t,{LP:function(){return o},Nx:function(){return s},_5:function(){return l},gy:function(){return i}});var n=r(4858);const a="token";function o(){return n.Z.get(a)}function i(){return n.Z.remove(a)}function s(){let e=n.Z.get("employee");return JSON.parse(e)}function l(e){n.Z.remove(e)}},8151:function(e,t,r){r.d(t,{Ck:function(){return p},gk:function(){return f},ml:function(){return m},tB:function(){return d}});var n=r(9253),a=r(6154),o=r(4720),i=r(4858),s=r(129),l=r.n(s);const c="http://59.110.94.218:9291";function u(){var e=(0,n.LP)();return e&&(0,a.Z)({url:c+"/checkedToken",method:"GET",params:{token:e}}).then((e=>{e=e.data,200==e.code&&(i.Z.set("token",e.data.token,{expires:1/48}),i.Z.set("employee",JSON.stringify(e.data.employee),{expires:1/48}))})).catch((e=>{console.log(e)})),e}function d(e,t){return(0,a.Z)({url:c+e,method:"POST",headers:{token:u()},data:l().stringify(t)}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function m(e,t){return(0,a.Z)({url:c+e,method:"POST",headers:{"Content-Type":"application/json",token:u()},data:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function p(e,t){return(0,a.Z)({url:c+e,method:"GET",headers:{token:u()},params:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function f(e,t){switch(t){case"warning":o.Message.warning(e);break;case"error":o.Message.error({message:e,duration:5e3,showClose:!0});break;case"info":o.Message.info(e);break;default:o.Message.success(e)}}},4858:function(e,t){
/*! js-cookie v3.0.1 | MIT */
function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var n={read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function a(e,t){function n(n,a,o){if("undefined"!==typeof document){o=r({},t,o),"number"===typeof o.expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var s in o)o[s]&&(i+="; "+s,!0!==o[s]&&(i+="="+o[s].split(";")[0]));return document.cookie=n+"="+e.write(a,n)+i}}function o(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],n={},a=0;a<r.length;a++){var o=r[a].split("="),i=o.slice(1).join("=");try{var s=decodeURIComponent(o[0]);if(n[s]=e.read(i,s),t===s)break}catch(l){}}return t?n[t]:n}}return Object.create({set:n,get:o,remove:function(e,t){n(e,"",r({},t,{expires:-1}))},withAttributes:function(e){return a(this.converter,r({},this.attributes,e))},withConverter:function(e){return a(r({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var o=a(n,{path:"/"});t["Z"]=o}}]);
//# sourceMappingURL=799.612832dc.js.map