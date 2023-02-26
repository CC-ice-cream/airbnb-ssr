<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { provide, reactive, ref } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ElConfigProvider, ID_INJECTION_KEY } from 'element-plus'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import Header from './components/Header/index.vue';

const router = useRouter();
let isShow = ref(true);
router.beforeEach((to, from, next)=>{
  if(!to.fullPath.indexOf('/login')){
    isShow.value = false;
  }else{
    isShow.value = true;
  }
  next()
})

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})

const { locale:localeLang } = useI18n()
let locale = ref(zhCn)
const btntoogle = function(){
  console.log(locale)
  if(locale.value.name=='zh-cn'){
    locale.value = en,
    localeLang.value = 'en'
  }else{
    locale.value = zhCn,
    localeLang.value = 'zhCn'
  }
  
}
</script>

<template>
  <el-config-provider :locale="locale">
    <Header v-show="isShow" ></Header>
    <!-- <el-button type="primary" @click="btntoogle">切换</el-button>
    <RouterLink to="./home">home</RouterLink>
    <RouterLink to="./mine">mine</RouterLink> -->
    <RouterView></RouterView>
  </el-config-provider>
</template>

<style>
#app{
  width: 100%;
}
</style>
