<script setup lang="ts">
</script>
<template>
  <div id="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
  </div>
</template>
<style scoped lang="scss">
#container {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 100px 1fr minmax(100px, 2fr);
  grid-template-rows: repeat(3, 200px);
  // row-gap: 20px;
  // column-gap: 20px;
  gap: 20px 20px;
  grid-template-areas:'a b c'
                      'd e f'
                      'g h i';
}

.item {
  font-size: 4em;
  text-align: center;
  border: 1px solid #e5e4e9;
  
}

.item-1 {
  background-color: #ef342a;
  // grid-column-end: span 2;
  // grid-row-start: span 2;
  // grid-row: 1 / 3;
  // grid-column: 1 / 3;
  grid-area: 1 / 1 / 3 / 3;
}

.item-2 {
  background-color: #f68f26;
}

.item-3 {
  background-color: #4ba946;
}

.item-4 {
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}

.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
}

.item-9 {
  background-color: #4dc7ec;
}
</style>