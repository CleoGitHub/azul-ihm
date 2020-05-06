<template>
    <div class="row m-0 p-0">
      <Menu :players="players"></Menu>
      <Board :fabriques="fabriques"></Board>
    </div>
</template>
<script>
    import Menu from '@/components/Menu.vue';
    import Board from '@/components/Board.vue';

    export default {
        name: "Game",

        components:{
            Menu,
            Board
        },

        computed: {
            players() {
            return this.$store.state.board.PB
            },
            fabriques() {
            return this.$store.state.board.factories
            }
        },

        mounted(){
            setInterval(() => {
                this.$store.dispatch('getBoard')
                },1000)
            }
    }
</script>
       
