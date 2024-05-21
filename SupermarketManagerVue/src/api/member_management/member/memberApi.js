import {ajaxGet, ajaxPost,ajaxExportPost} from "@/assets/js/common";

const apiPrefix = '/member_management/member'
const apiPrefix1 = '/personnel_management/employee'
const apiPrefix2 = '/suspclasses/cancel'
const apiPrefix3 = '/suspclasses/handover'


/*列表显示*/
export function queryPageByQo(data) {
    return ajaxPost(apiPrefix + "/queryPageByQo", data)
}
/*删除操作*/
export function delMember(data) {
    return ajaxPost(apiPrefix + "/delMember", data)
}
/*保存*/
export function save(data) {
    return ajaxPost(apiPrefix + "/save", data)
}

//修改
export function update(data) {
    return ajaxPost(apiPrefix + "/update", data)
}
/*查询会员信息*/
export function queryMemberById(data) {
    return ajaxGet(apiPrefix + "/queryMemberById", data)
}
export function queryMemberByPhone(data) {
    return ajaxGet(apiPrefix + "/queryMemberByPhone", data)
}
/*查询课程信息*/
export function getGoodsList() {
    return ajaxGet(apiPrefix + "/selected_goodsAll", {})
}

/*查询会员信息*/
export function instructorsList() {
    return ajaxGet(apiPrefix1 + "/selectAll", {})
}
/*列表显示*/
export function queryClassPageByQo(data) {
    return ajaxPost(apiPrefix2 + "/queryPageByQo", data)
}
/*查课程显示*/
export function queryClassPageByCo(data) {
    return ajaxPost(apiPrefix2 + "/queryClassPageByCo", data)
}
/*消课详情查询*/
export function queryClassById(data) {
    return ajaxPost(apiPrefix2 + "/queryClassById", data)
}
/*消课记录保存*/
export function inertcancelclass(data) {
    return ajaxPost(apiPrefix2 + "/inertcancelclass", data)
}

/*导出Exccle方法*/
export function examinedReportExportExcel(data) {
    return ajaxExportPost(apiPrefix + "/reportExportExcel", data)
}
/*搜索滨水城会员信息*/
export function queryConnectPageCo(data) {
    return ajaxPost(apiPrefix3 + "/getConnectList", data)
}
/*搜索皇室会籍信息*/
export function queryConnectMembersPageCo(data) {
    return ajaxPost(apiPrefix3 + "/queryConnectMembersList", data)
}
/*搜索交接课程信息信息*/
export function handoveCourse(data) {
    return ajaxPost(apiPrefix3 + "/getConnectList", data)
}
/*搜索交接课程消课信息信息*/
export function queryClassByIdByHandover(data) {
    return ajaxPost(apiPrefix3 + "/inertcancelclass", data)
}
