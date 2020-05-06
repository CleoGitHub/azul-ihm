<template>
  <div id="app" class="row m-0 p-0">
    <Menu :players="players"></Menu>
    <Board :fabriques="fabriques"></Board>
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'
import Board from '@/components/Board.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
    players() {
      return this.$store.state.board.PB
    },
    fabriques() {
      return this.$store.state.board.factories
    }
  },
  mounted() {
  },
  components: {
    Menu,
    Board
  },
  created() {
    setInterval(() => {
      this.$store.dispatch('getBoard')
    },1000)
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
