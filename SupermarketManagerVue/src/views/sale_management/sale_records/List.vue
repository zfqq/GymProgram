<template>
    <div id="sale_records">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item
                >会员管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>消课记录</el-breadcrumb-item>
        </el-breadcrumb>
        <br />
        <el-row>
            <el-col :span="4">
                <span>会员卡号：</span>
                <el-input
                    style="height: 21px; width: 130px"
                    placeholder="会员卡号："
                    v-model="searchForm.cn"
                />
            </el-col>
            <el-col :span="10">
                <span>消课时间：</span>
                <el-date-picker
                    style="width: 140px"
                    v-model="searchForm.startSellTime"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder="起始时间"
                >
                </el-date-picker>
                -
                <el-date-picker
                    v-model="searchForm.endSellTime"
                    style="width: 140px"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="结束时间"
                >
                </el-date-picker>
            </el-col>
            <!-- <el-col :span="4">
                <el-select
                    style="width: 120px"
                    v-model="searchForm.type"
                    @change="$forceUpdate()"
                    placeholder="顾客类型"
                    clearable
                >
                    <el-option label="非会员顾客" value="0"></el-option>
                    <el-option label="会员" value="1"></el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select
                    style="width: 120px"
                    v-model="searchForm.sellway"
                    @change="$forceUpdate()"
                    placeholder="支付方式"
                    clearable
                >
                    <el-option label="支付宝" value="0"></el-option>
                    <el-option label="微信" value="1"></el-option>
                    <el-option label="现金" value="2"></el-option>
                    <el-option label="银行卡" value="3"></el-option>
                </el-select>
            </el-col> -->
        </el-row>
        <br>
        <el-row>
            <el-col :span="24" style="text-align: left;">
                
                <el-button type="success" @click="submitSearchForm" style="font-size: 18px;"
                    >
                    <i class="iconfont icon-r-find" style="font-size: 18px;"> </i>
                    搜索</el-button
                >
            </el-col>
        </el-row>
        <br />
        <div class="table">
            <el-table :data="tableData" style="width: 100%" size="medium">
                <el-table-column prop="cardnumber" width="200" label="会员卡号">
                </el-table-column>
                <el-table-column prop="membername" label="会员姓名"></el-table-column>
                <el-table-column prop="classname" label="消课课程"></el-table-column>
                <el-table-column
                    prop="cancetime"
                    :show-overflow-tooltip="true"
                    label="消课时间"
                >
                </el-table-column>
                 <el-table-column prop="canceemname" label="消课教练">
                </el-table-column>
                <el-table-column width="240" label="操作" fixed="right">
                    <template v-slot="scope">
                        <el-button
                            type="success"
                            style="font-size: 18px;"
                            @click="detailBtn(scope.row,scope.row.classid)"
                            >
                            <i class="iconfont icon-r-find" style="font-size: 18px;"> </i>
                            明细
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin: 10px 0 15px 0;">
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
        <el-dialog
            title="消课明细"
            :visible.sync="detailSaleRecordsVisable"
            width="80%"
        >
            <el-form
                :model="saleRecordForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-row>
                    <el-col :span="12">
                        <el-form-item style="width: 60%" label="会员卡号：">
                            <el-input
                                 readonly
                                v-model="saleRecordForm.cardnumber"
                            ></el-input>
                        </el-form-item>
                        <el-form-item style="width: 60%" label="会员姓名：">
                            <el-input
                                 readonly
                                v-model="saleRecordForm.membername"
                            ></el-input>
                        </el-form-item>
                        <el-form-item style="width: 60%" label="消课名称：">
                            <el-input
                                 readonly
                                v-model="saleRecordForm.classname"
                            ></el-input>
                        </el-form-item>
                        <el-form-item style="width: 60%" label="消课教练：">
                            <el-input
                                 readonly
                                v-model="saleRecordForm.canceemname"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item>
                            <el-button
                                type="info"
                                @click="detailSaleRecordsVisable = false"
                                >关闭</el-button
                            >
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { popup } from "@/assets/js/common";
import {
    delSaleRecords,
    queryCourseCancellation,
} from "@/api/sale_management/saleRecordsApi";

export default {
    data() {
        return {
            detailSaleRecordsVisable: false,
            searchForm: {
                pageSize: 5
            },
            tableData: [],
            saleRecordForm: {
                cn: "",
                sellway: "",
                info: "",
                sellTotal: "",
                sellTotalmoney: "",
                type: "0",
                detailSaleRecords: [],
            },
        };
    },
    methods: {
        init() {
            if (this.searchForm.startSellTime > this.searchForm.endSellTime) {
                popup("结束时间不能小于开始时间", "warning");
                return;
            }
            queryCourseCancellation(this.searchForm).then((res) => {
                res = res.data;
                if (res.code == 200) {
                    this.tableData = res.data.records;
                    this.searchForm.total = res.data.total;
                    this.searchForm.pageSize = res.data.size;
                    this.searchForm.currentPage = res.data.current;
                } else {
                    popup(res.msg, "error");
                }
            });
        },
        del(cn) {
            this.$confirm("确定删除这条记录？", "警示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    delSaleRecords({ cn: cn }).then((res) => {
                        res = res.data;
                        if (res.code == 200) {
                            popup("操作成功");
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
        detailBtn(row) {
            this.saleRecordForm = {
                cn: "",
                sellway: "",
                info: "",
                sellTotal: "",
                sellTotalmoney: "",
                type: "0",
                detailSaleRecords: [],
            };
            this.saleRecordForm = { ...row };
            this.detailSaleRecordsVisable = true;
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
            this.init();
        },
    },
    mounted() {
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
</style>