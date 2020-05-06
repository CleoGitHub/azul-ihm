<template>
    <div id="board" class="col-5 m-0 p-0 row d-flex flex-wrap">
        <Fabrique v-for="(fabrique,index) in fabriques" :mozaiques="fabrique" :key="index"></Fabrique>
    </div>
</template>

<script>
    import Fabrique from "./Fabrique";
    export default {
        name: "Board",
        components: {
            Fabrique
        },
        data() {
            return {
            }
        },
        props: {
            fabriques:{}
        }
    }
</script>

<style scoped>
    #board {
        background: center no-repeat url("/img/fond.png"), radial-gradient(white,#5ac5d4);
        max-height: 100vh;
    }
</style>