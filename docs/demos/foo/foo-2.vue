<template>
  <h-foo :msg="msg"></h-foo>123
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello custom component')
</script>