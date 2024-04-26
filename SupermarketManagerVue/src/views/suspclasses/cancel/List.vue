<template>
    <div id="employee_index">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>会员管理</el-breadcrumb-item>
            <el-breadcrumb-item>会员消课管理</el-breadcrumb-item> </el-breadcrumb
        ><br />

        <el-row>
            <el-col :span="8" style="text-align: left; padding-right: 10px">
                <el-input placeholder="会员卡号" v-model="searchForm.cardnumber" />
            </el-col>
            <el-col :span="8" style="text-align: left; padding-right: 10px">
                <el-input placeholder="手机号码" v-model="searchForm.phone" />
            </el-col>
            <el-col :span="8" style="text-align: left; padding-right: 10px">
                 <el-select v-model="searchForm.type" filterable  clearable   placeholder="请选择需要查询的课程选择" >
                        <el-option
                        v-for="item in optionsk"
                        :key="item.name"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
            </el-col>
        </el-row>
        <br />
        <el-row>
            <el-col :span="24" style="text-align: left">
                <el-button
                    type="primary"
                    @click="submitSearchForm"
                    style="font-size: 18px"
                >
                    <i class="iconfont icon-r-find" style="font-size: 18px">
                    </i>
                    搜索会员信息</el-button
                >
                <el-button
                    type="primary"
                    @click="submitCancelForm"
                    style="font-size: 18px"
                >
                    <i class="iconfont icon-r-find" style="font-size: 18px">
                    </i>
                    搜索课程信息</el-button
                >
            </el-col>
        </el-row>
        <br />
        <!--表格数据-->
        <div class="table">
            <el-table :data="tableData" style="width: 100%" size="medium">
                <el-table-column prop="name" label="姓名"> </el-table-column>
                <el-table-column prop="phone" label="手机号"> </el-table-column>
                <el-table-column prop="cardnumber" label="会员卡号"> </el-table-column>
                <el-table-column prop="type" label="会员卡类型"> </el-table-column>
                <el-table-column prop="state" label="状态">
                    <template v-slot="scope">
                        <el-tag v-if="scope.row.state == '0'" type="success"
                            >正常</el-tag
                        >
                        <el-tag v-else type="danger">删除</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="info"
                    :show-overflow-tooltip="true"
                    label="备注"
                >
                </el-table-column>
            </el-table>
            <div style="margin: 10px 0 15px 0">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="searchForm.currentPage"
                    :page-sizes="[5, 10, 20, 50]"
                    :page-size="searchForm.pageSize"
                    layout="total,sizes, prev, pager, next,jumper"
                    :total="searchForm.total"
                >
                </el-pagination>
            </div>
            </div>
            </br>
        </br>
    </br>
        <br />

        <div class="table">
            <el-table :data="tableClassData" style="width: 100%" size="medium">
                
                <el-table-column prop="membername" label="会员姓名"> </el-table-column>
                <el-table-column prop="cardnumber" label="会员卡号"> </el-table-column>
                <el-table-column prop="classname" label="课程名称"> </el-table-column>
                <el-table-column prop="allcancee" label="课程总课时"> </el-table-column>
                <el-table-column prop="suspend" label="课程状态">
                    <template v-slot="scope">
                        <el-tag
                            size="mini"
                            type="success"
                            v-if="scope.row.suspend == '0'"
                            >开课</el-tag
                        >
                        <el-tag size="mini" type="danger" v-else>截课</el-tag>
                    </template>    
                </el-table-column>
                <el-table-column prop="surpluscancee" label="课程剩余课时"> </el-table-column>
                <el-table-column prop="cancetime" label="上次消课时间"> </el-table-column>
                <el-table-column prop="canceemname" label="上次消课教练"> </el-table-column>
                <el-table-column label="操作" width="420" fixed="right">
                    <template v-slot="scope">
                        <el-button
                            type="success"
                            @click="editBtn(scope.row.cardnumber,scope.row.classid,scope.row.canCancelClass)"
                            style="font-size: 18px"
                        >
                            <i
                                class="iconfont icon-r-edit"
                                style="font-size: 18px"
                            ></i>
                            消课</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--修改-->
        <el-dialog
            title="消课记录"
            :visible.sync="editVisable"
            size="mini"
            label-width="200"
            width="50%"
        >
            <el-form
                :model="editForm"
                :rules="rules"
                ref="editForm"
                label-width="100px"
                class="demo-ruleForm"
            >
            <el-form-item label="姓名：" >
                    <el-input   readonly   v-model="editForm.membername"  ></el-input>
                    <el-input   hidden   v-model="editForm.classid"  ></el-input>
                </el-form-item>
                <el-form-item label="会员卡号">
                    <el-input
                    readonly
                        v-model="editForm.cardnumber"
                    ></el-input>
                </el-form-item>
                
                <el-form-item label="课程名称">
                    <el-input
                    readonly
                        v-model="editForm.classname"
                    ></el-input>
                </el-form-item>
                
                <el-form-item label="课时数" prop = "cancelnum">
                    <el-input
                        v-model.number="editForm.cancelnum"
                    ></el-input>
                </el-form-item>
                <el-form-item label="消课教练：">
                    <el-select v-model="editForm.canceemid" filterable clearable   placeholder="请选择"   prop="canceemid">
                        <el-option
                        v-for="item in instructorList"
                        :key="item.nickName"
                        :label="item.nickName"
                        :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button
                        type="primary"
                        @click="submitEditForm('editForm')"
                        style="font-size: 18px"
                    >
                        <i
                            class="iconfont icon-r-yes"
                            style="font-size: 18px"
                        ></i>
                        提交</el-button
                    >
                    <el-button
                        type="info"
                        @click="resetEditForm('editForm')"
                        style="font-size: 18px"
                    >
                        关闭</el-button
                    >
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { popup } from "@/assets/js/common";
import {
    delMember,
    save,
    getGoodsList,
    instructorsList,
    queryClassPageByQo,
    queryClassPageByCo,
    queryClassById,
    inertcancelclass,
} from "@/api/member_management/member/memberApi";
import {
    queryPointProductByGoodsId,
  } from "@/api/sale_management/exchange_point_products/exchangePointProductsApi";
import axios from "axios";
import { Empty } from "element-ui";

export default {
    data() {
        return {
            BaseApi: this.$store.state.BaseApi,
            canCanceLClass:true,
            newVisable: false,
            editVisable: false,
            searchForm: {
                pageSize: 5,
            },
            optionsk: [],
            tableData: [],
            tableClassData:[],
            instructorList:[],
            newForm: {},
            editForm: {},
            options_type: [
                { label: "个人卡", value: "0" },
                { label: "亲子卡", value: "1" },
            ],
            options_sex: [
                { label: "男", value: "0" },
                { label: "女", value: "1" },
            ],
            rules: {
                instructor: [
                    {
                        required: true,
                        message: "消课教练不能为空",
                        trigger: "blur",
                    },
                ],
                cancelnum:[{
                        required: true,
                        message:"消课数不能为空",
                        trigger: "blur",
                },
                
                    { 
                    type: 'number', 
                    message: '消课数必须为数字值',
                    trigger: "blur"
    }
            ]
            },
            options_pointProducts: [],
            pointProductsForm: {
                goodsId: "",
                coverUrl: "",
                integral: "",
            },
            pointProductsVisable: false,
        };
    },
    methods: {
        init() {
            queryClassPageByQo(this.searchForm).then((res) => {
                res = res.data;
                if (res.code == 200) {
                    console.log(res.data);
                    this.tableData = res.data.records;
                    this.searchForm.total = res.data.total;
                    this.searchForm.pageSize = res.data.size;
                    this.searchForm.currentPage = res.data.current;
                } else {
                    popup(res.msg, "error");
                }
            });
            getGoodsList().then((res) => {
                res = res.data;
                if (res.code == 200) {
                    console.log(res.data);
                this.optionsk = res.data;
                }
                    });
            instructorsList().then((res) => {
                res = res.data;
                if (res.code == 200) {
                    console.log(res.data);
                this.instructorList = res.data;
                }
                    });
        },
        /*分页*/
        handleSizeChange(val) {
            this.searchForm.pageSize = val;
            this.init();
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.searchForm.currentPage = val;
            this.init();
            console.log(`当前页: ${val}`);
        },
        submitSearchForm() {
            if((this.searchForm.cardnumber  ==  ''  || this.searchForm.cardnumber == null) && (  this.searchForm.phone  ==  ''  || this.searchForm.phone == null) ){
                alert('请输入手机号或者会员卡号')
                return;
            } 
         
            this.init();
        },
        
        submitCancelForm() {
            if((this.searchForm.cardnumber  ==  ''  || this.searchForm.cardnumber == null)){
                alert('请输入会员卡号')
                return;
            } 
            // this.searchForm.type = this.searchForm.type.join(',');
            queryClassPageByCo(this.searchForm).then((res) => {
                res = res.data;
                if (res.code == 200) {
                    console.log(res.data);
                    this.tableClassData = res.data.records;
            
                } else {
                    popup(res.msg, "error");
                }
            });
        },
        saveCancel(formName) {
            this.newForm = {};
            this.$refs[formName].resetFields();
            this.newVisable = false;
        },
        submitNewForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.newForm.course=   this.newForm.course.join(',');
                    save(this.newForm).then((res) => {
                        res = res.data;
                        if (res.code == 200) {
                            popup("操作成功");
                            this.newForm = {};
                            this.newVisable = false;
                            this.init();
                        } else {
                            popup(res.msg, "error");
                        }
                    });
                }
            });
        },
        editBtn(id,classid,canCancelClass) {
            if(canCancelClass == 1){
                alert('课程已结束 , 无法进行消课.');
                return;
            }
            queryClassById({ memberid: id,classid: classid}).then((res) => {
                res = res.data;
                if (res.code == 200) {
                    this.editForm = { ...res.data };
                    this.editVisable = true;
                } else {
                    popup(res.msg, "error");
                }
            });
        },
        submitEditForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    inertcancelclass(this.editForm).then((res) => {
                        res = res.data;
                        if (res.code == 200) {
                            popup("操作成功");
                            this.editForm = {};
                            this.editVisable = false;
                        } else {
                            popup(res.msg, "error");
                        }
                    });
                }
            });
        },
        resetEditForm(formName) {
            this.editForm = {};
            this.$refs[formName].resetFields();
            this.editVisable = false;
        },
        delBtn(id) {
            this.$confirm("确定删除该会员？", "警示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    delMember({ id: id }).then((res) => {
                        res = res.data;
                        if (res.code == 200) {
                            popup("操作成功");
                            this.searchForm.state = "0";
                            this.init();
                        } else {
                            popup(res.msg, "error");
                        }
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消操作",
                    });
                });
        },
        closePointProductsForm() {
            this.options_pointProducts = [];
            this.pointProductsForm = {};
            this.pointProductsVisable = false;
        },
        queryPointProductByGoodsId(goodsId) {
            queryPointProductByGoodsId({ goodsId: goodsId }).then((res) => {
                res = res.data;
                if (res.code == 200) {
                    if (!res.data) {
                        this.pointProductsForm = {
                            memberId: this.pointProductsForm.memberId,
                            goodsId: "",
                            coverUrl: "",
                            integral: "",
                        };
                        return;
                    }
                    this.pointProductsForm.integral = res.data.integral;
                    this.pointProductsForm.coverUrl = res.data.coverUrl;
                } else {
                    popup(res.msg, "error");
                    this.pointProductsForm.goodsId = "";
                }
            });
        },
    },
    mounted() {
        /*初始化表格数据*/
        this.searchForm.state = "0";
         this.init();
    },
};
</script>
<style>
.searchForm {
    height: 134px;
}

.table {
    height: 320px;
}

.pageUtils {
    position: absolute;
    width: 84%;
    margin: 2px auto;
    height: 43px;
}

.searchForm {
    display: inline-block;
    margin: 0 auto;
    height: 51px;
    line-height: 51px;
}

.searchForm .column {
    display: inline-block;
    margin: 0 auto;
    margin-right: 2px;
    line-height: 48px;
    height: 51px;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>