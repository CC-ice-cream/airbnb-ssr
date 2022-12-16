<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router';

const route = useRouter();
const ruleFormRef = ref<FormInstance>()


const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}
const validateUser = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the user-name'))
  } else {
    callback()
  }
}
const ruleForm = reactive({
  user: '',
  pass: ''
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  user: [{ validator: validateUser, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      route.push({
        path: '/home'
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
throw '报错测试'
</script>
<template>
  <div class="bg">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="user">
      <el-input v-model="ruleForm.user" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
  
</template>
<style scoped lang="scss">
.demo-ruleForm{
  width: 600px;
  margin: 100px auto;
  position: relative;
  z-index: 1;
  font-weight: 700;
}
.bg{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(../../assets/img/BingWallpaper.jpg);
}
</style>