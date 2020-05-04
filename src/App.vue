<template>
  <div id="app" class="row m-0 p-0 d-flex">
    <Menu></Menu>
    <Board></Board>
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'
import Board from '@/components/Board.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Board
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
