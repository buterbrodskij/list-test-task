<script lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import {ref} from "vue";

export default {
  setup() {
    const shouldRender = ref(false);
    const targetEl = ref();

    const { stop } = useIntersectionObserver(
        targetEl,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            shouldRender.value = true;
            stop();
          }
        }, {
          rootMargin: '600px'
        }
    );

    return { targetEl, shouldRender }
  }
}
</script>
<template>
  <div ref="targetEl">
    <slot v-if="shouldRender" />
  </div>
</template>