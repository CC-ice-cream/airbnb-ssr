<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter();
const route = useRoute();
let querys = reactive({});
querys = route.query;
console.log(route.query)
const goBack = function () {
  router.back()
}
</script>

<template>
  <div>
    {{t('message.home')}}
    {{ querys }}
    <el-button @click="goBack" type="primary">go back</el-button>
  </div>
</template>

<style scoped>

</style>
