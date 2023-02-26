<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getRoomList } from '@/api';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import Content from '../Content/index.vue';

export default defineComponent({
  setup() {
    const { t } = useI18n()
    // let res = getRoomList();
    // console.log(res);
    const router = useRouter();
    return {
      t
    }
  },
  asyncData() {

  },
  components: {
    Content
  }
})
</script>

<template>
  <el-container>

    <el-main>
      <Content></Content>
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">

</style>
