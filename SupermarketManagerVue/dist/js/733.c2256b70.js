"use strict";(self["webpackChunksupermarket_manager"]=self["webpackChunksupermarket_manager"]||[]).push([[733],{7733:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var o=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[e._v("首页")]),t("el-breadcrumb-item",[e._v("商品管理 ")]),t("el-breadcrumb-item",[e._v("销量统计")])],1),t("br"),t("el-row",[t("el-col",{attrs:{span:8}},[t("el-input",{attrs:{placeholder:"商品名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("el-col",{attrs:{span:16}},[t("i",{staticClass:"iconfont icon-r-add",staticStyle:{"font-size":"28px"}},[t("b",[e._v(" 总销量："),t("span",{staticStyle:{color:"#fc4316"}},[e._v(e._s(e.totalSalesVolume?e.totalSalesVolume:0)+"件")])])])])],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left"},attrs:{span:24}},[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.submitSearchForm}},[t("i",{staticClass:"iconfont icon-r-find",staticStyle:{"font-size":"18px"}}),e._v(" 搜索")])],1)],1),t("br"),t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"medium"}},[t("el-table-column",{attrs:{type:"index",width:"200",label:"序号"}}),t("el-table-column",{attrs:{prop:"coverUrl","show-overflow-tooltip":!0,label:"封面"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("img",{attrs:{width:"60px",src:e.BaseApi+r.row.coverUrl}})]}}])}),t("el-table-column",{attrs:{prop:"goodsName","show-overflow-tooltip":!0,label:"商品名"}}),t("el-table-column",{attrs:{prop:"salesVolume","show-overflow-tooltip":!0,label:"销量"}}),t("el-table-column",{attrs:{prop:"percentage","show-overflow-tooltip":!0,label:"销售量占比"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-progress",{attrs:{width:"50",type:"dashboard",percentage:r.row.percentage,color:e.customColorMethod}})]}}])})],1),t("div",{staticStyle:{margin:"10px 0 15px 0"}},[t("el-pagination",{attrs:{"current-page":e.searchForm.currentPage,"page-sizes":[5,10,20,50],"page-size":e.searchForm.pageSize,layout:"total,sizes, prev, pager, next,jumper",total:e.searchForm.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.searchForm,"currentPage",t)},"update:current-page":function(t){return e.$set(e.searchForm,"currentPage",t)}}})],1)],1)],1)},n=[],a=r(8151);const s="/goods_management/statistic_sale";function i(e){return(0,a.tB)(s+"/queryPageByQo",e)}var c={data(){return{BaseApi:this.$store.state.BaseApi,tableData:[],totalSalesVolume:"",searchForm:{pageSize:5},options_goods:[]}},methods:{init(){i(this.searchForm).then((e=>{e=e.data,200==e.code?(this.totalSalesVolume=e.data.total,this.tableData=e.data.vos.records,this.searchForm.total=e.data.vos.total,this.searchForm.pageSize=e.data.vos.size,this.searchForm.currentPage=e.data.vos.current):(0,a.gk)(e.msg,"error")}))},handleSizeChange(e){this.searchForm.pageSize=e,this.init(),console.log(`每页 ${e} 条`)},handleCurrentChange(e){this.searchForm.currentPage=e,this.init(),console.log(`当前页: ${e}`)},submitSearchForm(){this.init()},customColorMethod(e){return e<30?"#f56c6c":e<70?"#e6a23c":"#67c23a"}},mounted(){this.init()}},l=c,u=r(3736),p=(0,u.Z)(l,o,n,!1,null,null,null),d=p.exports},9253:function(e,t,r){r.d(t,{LP:function(){return a},Nx:function(){return i},_5:function(){return c},gy:function(){return s}});var o=r(4858);const n="token";function a(){return o.Z.get(n)}function s(){return o.Z.remove(n)}function i(){let e=o.Z.get("employee");return JSON.parse(e)}function c(e){o.Z.remove(e)}},8151:function(e,t,r){r.d(t,{Ck:function(){return h},gk:function(){return m},ml:function(){return d},tB:function(){return p}});var o=r(9253),n=r(6154),a=r(4720),s=r(4858),i=r(129),c=r.n(i);const l="http://59.110.94.218:9291";function u(){var e=(0,o.LP)();return e&&(0,n.Z)({url:l+"/checkedToken",method:"GET",params:{token:e}}).then((e=>{e=e.data,200==e.code&&(s.Z.set("token",e.data.token,{expires:1/48}),s.Z.set("employee",JSON.stringify(e.data.employee),{expires:1/48}))})).catch((e=>{console.log(e)})),e}function p(e,t){return(0,n.Z)({url:l+e,method:"POST",headers:{token:u()},data:c().stringify(t)}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?m(e,"error"):m(e.response.data,"error")}))}function d(e,t){return(0,n.Z)({url:l+e,method:"POST",headers:{"Content-Type":"application/json",token:u()},data:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?m(e,"error"):m(e.response.data,"error")}))}function h(e,t){return(0,n.Z)({url:l+e,method:"GET",headers:{token:u()},params:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?m(e,"error"):m(e.response.data,"error")}))}function m(e,t){switch(t){case"warning":a.Message.warning(e);break;case"error":a.Message.error({message:e,duration:5e3,showClose:!0});break;case"info":a.Message.info(e);break;default:a.Message.success(e)}}},4858:function(e,t){
/*! js-cookie v3.0.1 | MIT */
function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)e[o]=r[o]}return e}var o={read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function n(e,t){function o(o,n,a){if("undefined"!==typeof document){a=r({},t,a),"number"===typeof a.expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var i in a)a[i]&&(s+="; "+i,!0!==a[i]&&(s+="="+a[i].split(";")[0]));return document.cookie=o+"="+e.write(n,o)+s}}function a(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],o={},n=0;n<r.length;n++){var a=r[n].split("="),s=a.slice(1).join("=");try{var i=decodeURIComponent(a[0]);if(o[i]=e.read(s,i),t===i)break}catch(c){}}return t?o[t]:o}}return Object.create({set:o,get:a,remove:function(e,t){o(e,"",r({},t,{expires:-1}))},withAttributes:function(e){return n(this.converter,r({},this.attributes,e))},withConverter:function(e){return n(r({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var a=n(o,{path:"/"});t["Z"]=a}}]);
//# sourceMappingURL=733.c2256b70.js.map