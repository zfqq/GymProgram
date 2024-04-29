<template>
    <div id="employee_index">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>会员管理</el-breadcrumb-item>
            <el-breadcrumb-item>会员信息</el-breadcrumb-item> </el-breadcrumb><br />

        <el-row>
            <el-col :span="8" style="text-align: left; padding-right: 10px">
                <el-input placeholder="姓名" v-model="searchForm.name" />
            </el-col>
            <el-col :span="8" style="text-align: left; padding-right: 10px">
                <el-input placeholder="手机号码" v-model="searchForm.phone" />
            </el-col>
            <el-col :span="8">
                <el-select v-model="searchForm.state" @change="$forceUpdate()" placeholder="状态" clearable>
                    <el-option label="正常" value="0"></el-option>
                    <el-option label="删除" value="1"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <br />
        <el-row>
            <el-col :span="24" style="text-align: left">
                <el-button type="primary" @click="submitSearchForm" style="font-size: 18px">
                    <i class="iconfont icon-r-find" style="font-size: 18px">
                    </i>
                    搜索</el-button>
                <el-button type="success" @click="newVisable = true" style="font-size: 18px">
                    <i class="iconfont icon-r-add" style="font-size: 18px"> </i>
                    录入会员
                </el-button>
            </el-col>
        </el-row>
        <br />
        <!--表格数据-->
        <div class="table">
            <el-table :data="tableData" style="width: 100%" size="medium">
                <el-table-column prop="name" label="姓名"> </el-table-column>
                <el-table-column prop="phone" label="手机号"> </el-table-column>
                <el-table-column prop="cardnumber" label="会员卡号"> </el-table-column>
                <el-table-column prop="state" label="状态">
                    <template v-slot="scope">
                        <el-tag v-if="scope.row.state == '0'" type="success">正常</el-tag>
                        <el-tag v-else type="danger">删除</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="info" :show-overflow-tooltip="true" label="备注">
                </el-table-column>
                <el-table-column label="操作" width="420" fixed="right">
                    <template v-slot="scope">
                        <el-button type="success" @click="editBtn(scope.row.id)" style="font-size: 18px">
                            <i class="iconfont icon-r-edit" style="font-size: 18px"></i>
                            修改</el-button>
                        <el-button type="danger" @click="delBtn(scope.row.id)" style="font-size: 18px">
                            <i class="iconfont icon-r-delete" style="font-size: 18px"></i>
                            删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin: 10px 0 15px 0">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page.sync="searchForm.currentPage" :page-sizes="[5, 10, 20, 50]"
                    :page-size="searchForm.pageSize" layout="total,sizes, prev, pager, next,jumper"
                    :total="searchForm.total">
                </el-pagination>
            </div>
        </div>

        <!--录入-->
        <el-dialog title="录入会员" :visible.sync="newVisable" label-width="200" width="50%">
            <el-form :model="newForm" :rules="rules" ref="newForm" label-width="100px" class="demo-ruleForm">

                <el-row v-if="showRow" width="20%">
                    <el-col :span="12" width="20%">
                        <p class="title"> </p>
                        <video id="videoCamera" class="video-box"></video>
                    </el-col>
                    <el-col :span="12" width="20%">
                        <el-img v-show="form.faceBytes" :src="form.faceBytes" class="img-box imgnum" />
                        <br>
                        <canvas id="canvasCamera" class="canvas" :width='videoWidth' :height='videoHeight'
                            style="display: none;"></canvas>
                    </el-col>
                </el-row>
                <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-studentForm">

                    <el-form-item width="40%" prop="faceBytes">
                        <el-image :src="form.faceBytes" class="img-box mini-img">
                            <div slot="error" class="image-slot" style="text-align: center;font-size: 20px;">
                            </div>
                        </el-image>
                        <br>
                        <el-button type="primary" @click="handleOpen" icon="el-icon-plus" size="small">点击拍照'</el-button>
                        <el-button type="primary" icon="el-icon-camera" @click="drawImage">拍照</el-button>
                        <el-button type="primary" @click="clearForm" icon="el-icon-delete-solid" size="small"> 清
                            空</el-button>
                        <el-button type="primary" @click="clearForm1" icon="el-icon-delete-solid" size="small">
                            清空1</el-button>

                    </el-form-item>
                </el-form>
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="newForm.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="会员年龄：" prop="age">
                    <el-input v-model="newForm.age" placeholder="请输入会员卡号"></el-input>
                </el-form-item>
                <el-form-item label="会员性别：" prop="sex">
                    <el-select v-model="newForm.sex" placeholder="请选择" filterable clearable>
                        <el-option v-for="item in options_sex" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系方式：" prop="phone">
                    <el-input max="11" placeholder="请输入手机号" v-model="newForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="会员卡号：" prop="cardnumber">
                    <el-input v-model="newForm.cardnumber" placeholder="请输入会员卡号"></el-input>
                </el-form-item>

                <el-form-item label="会员会费：" prop="amount">
                    <el-input v-model.number="newForm.amount" placeholder="请输入会员登记金额"></el-input>
                </el-form-item>

                <el-form-item label="会员卡类型：">
                    <el-select v-model="newForm.type" placeholder="请选择" filterable clearable>
                        <el-option v-for="item in options_type" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="会员教练：">
                    <el-select v-model="newForm.instructor" filterable placeholder="请选择">
                        <el-option v-for="item in instructorList" :key="item.nickName" :label="item.nickName"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="课程选择：">
                    <el-select v-model="newForm.course" multiple placeholder="请选择">
                        <el-option v-for="item in optionsk" :key="item.name" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="备注：">
                    <el-input type="textarea" v-model="newForm.info" placeholder="如：新会员"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitNewForm('newForm')" style="font-size: 18px">
                        <i class="iconfont icon-r-yes" style="font-size: 18px"></i>
                        提交</el-button>
                    <el-button @click="saveCancel('newForm')" style="font-size: 18px">
                        取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!--修改-->
        <el-dialog title="修改会员" :visible.sync="editVisable" size="mini" label-width="200" width="50%">
            <el-form :model="editForm" :rules="rules" ref="editForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="editForm.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="会员年龄：" prop="age">
                    <el-input v-model.number="editForm.age" placeholder="请输入会员卡号"></el-input>
                </el-form-item>

                <el-form-item label="会员性别：" prop="sex">
                    <el-select v-model="editForm.sex" placeholder="请选择" filterable clearable>
                        <el-option v-for="item in options_sex" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="号码：" prop="phone">
                    <el-input max="11" placeholder="请输入手机号" v-model="editForm.phone"></el-input>
                </el-form-item>

                <el-form-item label="会员卡号：" prop="cardnumber">
                    <el-input v-model="editForm.cardnumber" placeholder="请输入会员卡号"></el-input>
                </el-form-item>

                <el-form-item label="会员会费：" prop="amount">
                    <el-input v-model.number="editForm.amount" placeholder="请输入会员登记金额"></el-input>
                </el-form-item>
                <el-form-item label="会与卡类型:" prop="type">
                    <el-select v-model="editForm.type" placeholder="请选择" filterable clearable>
                        <el-option v-for="item in options_type" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>



                <el-form-item label="会员教练：">
                    <el-select v-model="editForm.instructor" filterable placeholder="请选择" prop="instructor">
                        <el-option v-for="item in instructorList" :key="item.nickName" :label="item.nickName"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>


                <el-form-item label="课程选择：">
                    <el-select size="small" name="roleIds" v-model="editForm.course" :multiple="true"
                        @change="$forceUpdate()" filterable placeholder="请选择课程">
                        <el-option v-for="item in optionsk" :key="item.name" :label="item.name" :value="item.id">

                        </el-option>
                    </el-select>
                    <!-- <el-select v-model="editForm.course" multiple placeholder="请选择" prop="course">
                        <el-option
                        v-for="item in optionsk"
                        :key="item.name"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select> -->
                </el-form-item>






                <el-form-item label="备注：">
                    <el-input type="textarea" v-model="editForm.info" placeholder="如：新会员"></el-input>
                </el-form-item>
                <el-form-item label="状态：" prop="state">
                    <el-select v-model="editForm.state" placeholder="请选择状态" filterable @change="$forceUpdate()"
                        clearable>
                        <el-option label="正常" value="0"></el-option>
                        <el-option label="删除" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitEditForm('editForm')" style="font-size: 18px">
                        <i class="iconfont icon-r-yes" style="font-size: 18px"></i>
                        提交</el-button>
                    <el-button type="info" @click="resetEditForm('editForm')" style="font-size: 18px">
                        关闭</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { popup } from "@/assets/js/common";
import {
    delMember,
    queryPageByQo,
    save,
    update,
    queryMemberById,
    getGoodsList,
    instructorsList,
} from "@/api/member_management/member/memberApi";
import {
    queryPointProductByGoodsId,
    queryPointProductBymemberId,
    saveExchangePointProductRecords,
} from "@/api/sale_management/exchange_point_products/exchangePointProductsApi";
import axios from "axios";

export default {
    data() {
        return {

            form: {
                faceBytes: "",
            },
            BaseApi: this.$store.state.BaseApi,
            newVisable: false,
            editVisable: false,
            searchForm: {
                pageSize: 5,
            },
            optionsk: [],
            tableData: [],
            instructorList: [],
            newForm: {},
            editForm: {},
            options_type: [
                { label: "个人卡", value: "个人卡" },
                { label: "亲子卡", value: "亲子卡" },
            ],
            options_sex: [
                { label: "男", value: "0" },
                { label: "女", value: "1" },
            ],
            rules: {
                name: [
                    {
                        required: true,
                        message: "会员姓名不能为空",
                        trigger: "blur",
                    },
                ],
                phone: [
                    {
                        required: true,
                        message: "手机号不能为空",
                        trigger: "blur",
                    },
                ],
                cardnumber: [
                    {
                        required: true,
                        message: "会员卡号不能为空",
                        trigger: "blur",
                    },
                ],
                amount: [
                    {
                        required: true,
                        message: "会员卡金额不能为空",
                        trigger: "blur",
                    },
                    {
                        type: 'number',
                        message: '"会员卡金额必须为数字值',
                        trigger: "blur"
                    },
                ],
            },
            options_pointProducts: [],
            pointProductsForm: {
                goodsId: "",
                coverUrl: "",
                integral: "",
            },
            pointProductsVisable: false,
            /** 照相机弹窗模块-start */
            cameraOpen: false,
            thisVideo: null,
            thisContext: null,
            thisCancas: null,
            videoWidth: 800,
            videoHeight: 600,
            /** 照相机弹窗模块-end */
            showRow: true,
        };
    },
    methods: {
        init() {
            queryPageByQo(this.searchForm).then((res) => {
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
            this.init();
        },
        saveCancel(formName) {
            this.newForm = {};
            this.$refs[formName].resetFields();
            this.newVisable = false;
        },
        submitNewForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.newForm.course = this.newForm.course.join(',');

                    const image = document.querySelector('.el-image__inner');
                    if (image) {
                        const src = image.getAttribute('src');
                        this.newForm.name = src
                    }
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
        editBtn(id) {
            queryMemberById({ id: id }).then((res) => {
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
                    this.editForm.course = this.editForm.course.join(',');
                    update(this.editForm).then((res) => {
                        res = res.data;
                        if (res.code == 200) {
                            popup("操作成功");
                            this.editForm = {};
                            this.editVisable = false;
                            this.init();
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

        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        /** 调用摄像头拍照-start*/
        // 打开照相机弹窗
        handleOpen() {
            this.cameraOpen = true;
            this.getCompetence();
        },
        // 调用摄像头权限
        getCompetence() {
            //必须在model中render后才可获取到dom节点,直接获取无法获取到model中的dom节点
            this.$nextTick(() => {
                const _this = this;
                this.thisCancas = document.getElementById('canvasCamera'); //这里是需要截取的canvas的Id名称
                this.thisContext = this.thisCancas.getContext('2d');
                this.thisVideo = document.getElementById('videoCamera');
                // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
                if (navigator.mediaDevices === undefined) navigator.mediaDevices = {}
                // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
                // 使用getUserMedia，因为它会覆盖现有的属性。
                // 这里，如果缺少getUserMedia属性，就添加它。
                if (navigator.mediaDevices.getUserMedia === undefined) {
                    navigator.mediaDevices.getUserMedia = function (constraints) {
                        // 首先获取现存的getUserMedia(如果存在)
                        let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia;
                        // 有些浏览器不支持，会返回错误信息
                        // 保持接口一致
                        if (!getUserMedia) return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
                        // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
                        return new Promise(function (resolve, reject) {
                            getUserMedia.call(navigator, constraints, resolve, reject)
                        })
                    }
                }
                const constraints = {
                    audio: false,
                    video: { width: _this.videoWidth, height: _this.videoHeight, transform: 'scaleX(-1)' }
                };
                navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                    // 旧的浏览器可能没有srcObject
                    if ('srcObject' in _this.thisVideo) {
                        _this.thisVideo.srcObject = stream
                    } else {
                        // 避免在新的浏览器中使用它，因为它正在被弃用。
                        _this.thisVideo.src = window.URL.createObjectURL(stream)
                    }
                    _this.thisVideo.onloadedmetadata = function (e) {
                        _this.thisVideo.play()
                    }
                }).catch(err => {
                    console.log(err)
                    this.$notify({
                        title: '警告',
                        message: '没有开启摄像头权限或浏览器版本不兼容.',
                        type: 'warning'
                    });
                });
            });
        },
        //绘制图片
        drawImage() {
            // 点击，canvas画图
            this.thisContext.drawImage(this.thisVideo, 0, 0, this.videoWidth, this.videoHeight);
            // 获取图片base64链接，展示到界面中的也是这个url地址
            this.form.faceBytes = this.thisCancas.toDataURL('image/png');
            this.showRow = !this.showRow;
        },
        //重置画布
        resetCanvas() {
            this.form.faceBytes = "";
            this.thisContext.clearRect(0, 0, c.width, c.height);
        },
        // 关闭照相机弹窗
        closeCameraMask() {
            this.cameraOpen = false; // 关闭照相机弹窗
            // 关闭摄像头
            if (this.thisVideo && this.thisVideo !== null) {
                this.thisVideo.srcObject.getTracks()[0].stop();
            }
        },
        //   清空数据
        clearForm(formName) {
            this.$refs.ruleForm.resetFields();
            this.cameraOpen = false;
            this.showRow = !this.showRow;
        },
        clearForm1() {
            const image = document.querySelector('.el-image__inner');
            if (image) {
                const src = image.getAttribute('src');
                console.log(src); // 输出: path/to/image.jpg
            }
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

.img-box {
    /* 通过class来覆盖特定样式 */
    width: 40%;
    height: 40%;
}
</style>