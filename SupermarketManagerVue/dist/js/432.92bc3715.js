"use strict";(self["webpackChunksupermarket_manager"]=self["webpackChunksupermarket_manager"]||[]).push([[432],{5432:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[e._v("首页")]),t("el-breadcrumb-item",[e._v("商品管理")]),t("el-breadcrumb-item",[e._v("商品库存")])],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left","padding-right":"10px"},attrs:{span:8}},[t("el-input",{attrs:{placeholder:"商品名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1)],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left","padding-right":"10px"},attrs:{span:24}},[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.submitSearchForm}},[t("i",{staticClass:"iconfont icon-r-find",staticStyle:{"font-size":"18px"}}),e._v(" 搜索")])],1)],1),t("br"),t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"medium"}},[t("el-table-column",{attrs:{width:"200",prop:"id",label:"编号"}}),t("el-table-column",{attrs:{prop:"coverUrl",label:"封面"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("img",{attrs:{height:"60px",src:e.BaseApi+r.row.coverUrl}})]}}])}),t("el-table-column",{attrs:{prop:"name",label:"商品名"}}),t("el-table-column",{attrs:{prop:"inventory",label:"基本库存量"}}),t("el-table-column",{attrs:{prop:"shelves",label:"货架基本数量"}}),t("el-table-column",{attrs:{label:"操作",width:"200",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"},on:{click:function(t){return e.editBtn(r.row.id)}}},[t("i",{staticClass:"iconfont icon-r-edit",staticStyle:{"font-size":"18px"}}),e._v(" 修改库存量")])]}}])})],1),t("div",{staticStyle:{margin:"10px 0 15px 0"}},[t("el-pagination",{attrs:{"current-page":e.searchForm.currentPage,"page-sizes":[5,10,20,50],"page-size":e.searchForm.pageSize,layout:"total,sizes, prev, pager, next,jumper",total:e.searchForm.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.searchForm,"currentPage",t)},"update:current-page":function(t){return e.$set(e.searchForm,"currentPage",t)}}})],1)],1),t("el-dialog",{attrs:{title:"修改商品库存量",visible:e.editVisible,width:"60%"},on:{"update:visible":function(t){e.editVisible=t}}},[t("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rules,"label-width":"150px"}},[t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"商品名："}},[t("el-input",{attrs:{disabled:"",placeholder:"如：农夫山泉"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"基本库存量：",prop:"inventory"}},[t("el-input",{attrs:{type:"number",placeholder:"如：10"},on:{change:()=>{e.editForm.inventory<=0&&(e.editForm.inventory=1)}},model:{value:e.editForm.inventory,callback:function(t){e.$set(e.editForm,"inventory",t)},expression:"editForm.inventory"}})],1),t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"货架基本数量：",prop:"shelves"}},[t("el-input",{attrs:{type:"number",placeholder:"如：10"},on:{change:()=>{e.editForm.shelves<=0&&(e.editForm.shelves=1)}},model:{value:e.editForm.shelves,callback:function(t){e.$set(e.editForm,"shelves",t)},expression:"editForm.shelves"}})],1),t("el-form-item",{staticStyle:{width:"60%"}},[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:function(t){return e.submitEditForm("editForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 提交")]),t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){return e.closeEdit("editForm")}}},[e._v("关闭")])],1)],1)],1)],1)},o=[],i=r(8151),a=r(3965),s={data(){return{BaseApi:this.$store.state.BaseApi,editVisible:!1,tableData:[],editForm:{},searchForm:{total:0,currentPage:1,pageSize:5,state:"0"},rules:{inventory:[{required:!0,message:"库存量不能为空",trigger:"blur"}],shelves:[{required:!0,message:"货架数量不能为空",trigger:"blur"}]}}},methods:{init(){(0,a.mJ)(this.searchForm).then((e=>{e=e.data,200==e.code?(console.log(e.data),this.tableData=e.data.records,this.searchForm.total=e.data.total,this.searchForm.pageSize=e.data.size,this.searchForm.currentPage=e.data.current):(0,i.gk)(e.msg,"error")}))},handleSizeChange(e){this.searchForm.pageSize=e,this.init(),console.log(`每页 ${e} 条`)},handleCurrentChange(e){this.searchForm.currentPage=e,this.init(),console.log(`当前页: ${e}`)},submitSearchForm(){this.init()},editBtn(e){(0,a.nI)({id:e}).then((e=>{e=e.data,200==e.code?(this.editForm={...e.data},this.editVisible=!0):(0,i.gk)(e.msg,"error")}))},submitEditForm(e){this.$refs[e].validate((e=>{e&&(0,a.e9)(this.editForm).then((e=>{e=e.data,200==e.code?((0,i.gk)("更新成功"),this.editForm={},this.editVisible=!1,this.init()):(0,i.gk)(e.msg,"error")}))}))},closeEdit(e){this.$refs[e].resetFields(),this.editForm={},this.editVisible=!1}},mounted(){this.init()}},l=s,c=r(3736),u=(0,c.Z)(l,n,o,!1,null,null,null),d=u.exports},3965:function(e,t,r){r.d(t,{e9:function(){return s},mJ:function(){return i},nI:function(){return a}});var n=r(8151);const o="/goods_management/goods_store";function i(e){return(0,n.tB)(o+"/queryPageByQo",e)}function a(e){return(0,n.Ck)(o+"/queryGoodsStoreById",e)}function s(e){return(0,n.tB)(o+"/updateInventory",e)}},9253:function(e,t,r){r.d(t,{LP:function(){return i},Nx:function(){return s},_5:function(){return l},gy:function(){return a}});var n=r(4858);const o="token";function i(){return n.Z.get(o)}function a(){return n.Z.remove(o)}function s(){let e=n.Z.get("employee");return JSON.parse(e)}function l(e){n.Z.remove(e)}},8151:function(e,t,r){r.d(t,{Ck:function(){return p},gk:function(){return h},ml:function(){return m},tB:function(){return d}});var n=r(9253),o=r(6154),i=r(4720),a=r(4858),s=r(129),l=r.n(s);const c="http://59.110.94.218:9291";function u(){var e=(0,n.LP)();return e&&(0,o.Z)({url:c+"/checkedToken",method:"GET",params:{token:e}}).then((e=>{e=e.data,200==e.code&&(a.Z.set("token",e.data.token,{expires:1/48}),a.Z.set("employee",JSON.stringify(e.data.employee),{expires:1/48}))})).catch((e=>{console.log(e)})),e}function d(e,t){return(0,o.Z)({url:c+e,method:"POST",headers:{token:u()},data:l().stringify(t)}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?h(e,"error"):h(e.response.data,"error")}))}function m(e,t){return(0,o.Z)({url:c+e,method:"POST",headers:{"Content-Type":"application/json",token:u()},data:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?h(e,"error"):h(e.response.data,"error")}))}function p(e,t){return(0,o.Z)({url:c+e,method:"GET",headers:{token:u()},params:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?h(e,"error"):h(e.response.data,"error")}))}function h(e,t){switch(t){case"warning":i.Message.warning(e);break;case"error":i.Message.error({message:e,duration:5e3,showClose:!0});break;case"info":i.Message.info(e);break;default:i.Message.success(e)}}},4858:function(e,t){
/*! js-cookie v3.0.1 | MIT */
function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var n={read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function o(e,t){function n(n,o,i){if("undefined"!==typeof document){i=r({},t,i),"number"===typeof i.expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var s in i)i[s]&&(a+="; "+s,!0!==i[s]&&(a+="="+i[s].split(";")[0]));return document.cookie=n+"="+e.write(o,n)+a}}function i(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var i=r[o].split("="),a=i.slice(1).join("=");try{var s=decodeURIComponent(i[0]);if(n[s]=e.read(a,s),t===s)break}catch(l){}}return t?n[t]:n}}return Object.create({set:n,get:i,remove:function(e,t){n(e,"",r({},t,{expires:-1}))},withAttributes:function(e){return o(this.converter,r({},this.attributes,e))},withConverter:function(e){return o(r({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var i=o(n,{path:"/"});t["Z"]=i}}]);
//# sourceMappingURL=432.92bc3715.js.map