<script setup lang="ts">
import ListGenerator from "./ListGenerator.ts";
import Lazy from "./Lazy.vue";
import Square from "./Square.vue";

const list = new ListGenerator().generateList()

</script>

<template>
  <div class="list">
    <div
        v-for="(row, index) in list"
        :key="`${index}-${row.length}`"
        class="list__row"
    >
      <Lazy
          class="list__item"
          v-for="(_, index) in row"
          :key="index"
      >
        <Square :data="_"></Square>
      </Lazy>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;

  &__row {
    display: flex;
    grid-gap: 15px;
    overflow-x: scroll;
  }

  &__item {
    cursor: pointer;
    min-width: 80px;
    height: 40px;
    border: 1px solid black;
    transition: .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 10%;

    &:hover {
      transform: scale(0.8);
    }
  }
}
</style>
