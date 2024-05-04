<script setup lang="ts">
import { IListItem } from "./ListGenerator.js";
import {onMounted} from "vue";
onMounted(() => {
  console.log(props.data)
})
const props = defineProps<{data: IListItem}>()
</script>

<template>
  <div>
    {{ props.data.int() }}
  </div>
</template>