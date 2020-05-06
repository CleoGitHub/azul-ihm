<template>
    <div id="menu" class="col-7 m-0 p-0">
        <div v-if="!this.$store.state.enCours" class="">
            <button class="btn btn-primary" @click="startGame">start game</button>
        </div>
        <div class="row m-0 p-0">
            <PlateauJoueur v-for="(player, index) in players" :key="index" class="col-6" :plateauJoueur="player"></PlateauJoueur>
        </div>
    </div>
</template>

<script>
    import PlateauJoueur from '@/components/PlateauJoueur';
    import Axios from "axios";
    export default {
        name: "Menu",
        data() {
            return {

            }
        },
        components : {
            PlateauJoueur
        },
        methods: {
            startGame () {
                let json = {
                    nPlayers: 4,
                    AI:[
                        false,
                        false,
                        false,
                        false
                    ]
                }
                Axios.post('http://localhost:8000/startGame', json)
                .then(function(response){
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })
            }
        },
        props: {
            players: {}
        },
        computed: {
        }
    }
</script>

<style scoped>
    #menu {
    }
</style>