<template>
  <h-form :model="model" labelSize="sm" labelAlign="center">
    <h-form-item label="用户名">
      <input style="border: 1px solid #000" type="text">
    </h-form-item>
  </h-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const model = ref({
  user: '张三'
})
</script>

<style scoped lang="scss">

</style>
