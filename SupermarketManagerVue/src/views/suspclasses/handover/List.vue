<template>
    <div id="employee_index">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>会员管理</el-breadcrumb-item>
            <el-breadcrumb-item>交接会员管理-消课管理</el-breadcrumb-item> </el-breadcrumb
        ><br />

        <el-row>
            <el-col :span="8" style="text-align: left; padding-right: 10px">
                <el-input placeholder="会员卡号" v-model="searchForm.cardnumber" />
            </el-col>
            <el-col :span="8" style="text-align: left; padding-right: 10px">
                <el-input placeholder="手机号码" v-model="searchForm.phone" />
            </el-col>
            <el-col :span="8" style="text-align: left; padding-right: 10px">
                <el-input placeholder="姓名" v-model="searchForm.name" />
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
                    搜索滨水城会员信息</el-button
                >
            </el-col>
        </el-row>
        <br />
        <!--表格数据-->
        <br />

        <div class="table">
            <el-table :data="tableClassData" style="width: 100%" size="medium">
                
                <el-table-column prop="name" label="会员姓名"> </el-table-column>
                <el-table-column prop="number" label="会员卡号"> </el-table-column>
                <el-table-column prop="phone" label="联系方式"> </el-table-column>
                <el-table-column prop="contractendtime" label="会员到期时间">
                    <template slot-scope="scope">
                        <el-tag
                        :type="scope.row.overduetime == '1' ? 'danger' : 'primary'"
                        disable-transitions>{{scope.row.contractendtime}}</el-tag>
                    </template>    
                </el-table-column>
                <el-table-column prop="coursename" label="会员课程名称"> </el-table-column>
                <el-table-column prop="remainingtime" label="会员剩余课程"> </el-table-column>
                <el-table-column prop="purchasefrequency" label="会员课程总课时"> </el-table-column>
                <el-table-column prop="source" label="会员来源"> </el-table-column>
                <el-table-column label="操作" width="420" fixed="right">
                    <template v-slot="scope">
                        <el-button
                            type="success"
                            v-if="scope.row.remainingtime> 0?true:false" 
                            @click="editBtn(scope.row.id)"
                            style="font-size: 18px"
                        >
                            消课</el-button>
                    </template>
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
    </div>
</template>
<script>
import { popup } from "@/assets/js/common";
import {
    delMember,
    save,
    instructorsList,
    queryConnectPageCo,
    handoveCourse,
    queryClassByIdByHandover,
    inertcancelclass,
} from "@/api/member_management/member/memberApi";
import {
    queryPointProductByGoodsId,
  } from "@/api/sale_management/exchange_point_products/exchangePointProductsApi";

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
            rules: {   },
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
            queryConnectPageCo(this.searchForm).then((res) => {
                res = res.data;
                if (res.code == 200) {
                    this.tableClassData = res.data.records;
                    this.searchForm.total = res.data.total;
                    this.searchForm.pageSize = res.data.size;
                    this.searchForm.currentPage = res.data.current;
                } else {
                    popup(res.msg, "error");
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
            queryConnectPageCo(this.searchForm).then((res) => {
                res = res.data;
                if (res.code == 200) {
                    this.tableClassData = res.data.records;
                    this.searchForm.total = res.data.total;
                    this.searchForm.pageSize = res.data.size;
                    this.searchForm.currentPage = res.data.current;
                } else {
                    popup(res.msg, "error");
                }
            });
        },
        submitConnectForm() {
            // this.searchForm.type = this.searchForm.type.join(',');
            handoveCourse(this.searchForm).then((res) => {
                res = res.data;
                if (res.code == 200) {
                    console.log(res.data);
                    this.tableClassData = res.data.records;
            
                } else {
                    popup(res.msg, "error");
                }
            });
        },
        editBtn(id) {
            queryClassByIdByHandover({ id: id}).then((res) => {
                res = res.data;
                console.log(res);
                if (res.code == 200) { 
                    if(res.data == '1'){
                        popup("消课成功");
                        this. init();
                    }else{
                        popup("消课失败");
                    }
                } else {
                    popup(res.msg, "error");
                }
            });
        }, 
        closePointProductsForm() {
            this.options_pointProducts = [];
            this.pointProductsForm = {};
            this.pointProductsVisable = false;
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