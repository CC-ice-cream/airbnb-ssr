<script setup lang="ts">
import { onMounted, ref } from 'vue';
import srcLogo from '@/assets/img/space.bilibili.com_112802009.png'
import { useRouter } from 'vue-router';

const route = useRouter();
const activeIndex = ref('/')
const handleSelect = (key: string, keyPath: string[]) => {
  route.push({
    path: `${key}`
  })
}
</script>
<template>
  <el-header>
      <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0">
          <el-image :src="srcLogo" fit="cover" class="el-image-fitsss">
          </el-image>
        </el-menu-item>
        <el-menu-item index="/">首页</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="mine">个人中心</el-menu-item>
        <el-sub-menu index="3">
          <template #title>历史</template>
          <el-menu-item index="3-1">item one</el-menu-item>
          <el-menu-item index="3-2">item two</el-menu-item>
          <el-menu-item index="3-3">item three</el-menu-item>
          <el-sub-menu index="3-4">
            <template #title>item four</template>
            <el-menu-item index="3-4-1">item one</el-menu-item>
            <el-menu-item index="3-4-2">item two</el-menu-item>
            <el-menu-item index="3-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-header>
</template>
<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}

:deep .el-image__inner{
  vertical-align: middle !important;
}
</style>