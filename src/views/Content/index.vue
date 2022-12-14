<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import loopimg from '@/assets/img/21975b8694ef2bae4f2e5d6dca3448ca7fae3346.png@976w_550h_1c_!web-home-carousel-cover.avif'
const currentDate = ref(new Date())
const currentTitle = ref('路人超能100 III(灵能百分百 第三季)')
const route = useRouter();
const navToC = () => {
  route.push({
    path: '/login'
  })
}
</script>

<template>
  <div class="recommended-container">
    <div class="container">
      <el-carousel trigger="click" height="310px" class="recommended-swipe">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image
            :src="loopimg" fit="cover" class="image"/>
        </el-carousel-item>
        
      </el-carousel>
      <div class="recommended-card" v-for="item in 100" :key="item">
        <el-card :body-style="{ padding: '0px' }" @click="navToC">
            <img src="../../assets/img/6098014b52aeaf8a714c30fb4fc3f4e0b19daa62.png@672w_378h_1c_!web-home-common-cover.avif"
            fit="cover"
              class="image"/>
            <div style="padding: 10px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentTitle }}</time>
                <el-button text class="button">up xxx {{currentDate.getFullYear()}}年</el-button>
              </div>
            </div>
          </el-card>
      </div>
    </div>
  </div>
  <!-- <el-row :gutter="20">

    <el-col :span="12">
      <div class="grid-content ep-bg-purple" />
      <el-carousel trigger="click" height="310px">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image style="width: 500px; height: 300px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />
        </el-carousel-item>
      </el-carousel>
    </el-col>

    <el-col :span="12">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </el-col>
  </el-row> -->
</template>

<style scoped>
.recommended-container {
  position: relative;
  width: 1180px;
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  width: 100%;
}

.recommended-swipe {
  grid-column: span 2;
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  
}
.recommended-card{
  
}
.image{
  width:100%;
  height:100%;
}
</style>
