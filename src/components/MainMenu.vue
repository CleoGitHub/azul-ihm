<template>
        <button class="btn btn-primary" @click="startGame">start game</button>
</template>
<script>
    import axios from "axios";
    export default {

        name: "MainMenu",
        data(){
            return {}
        },
        methods:{
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
                axios.post('http://localhost:8000/startGame', json)
                .then(() => {
                    this.$emit("gameStarted");
                })
                .catch(function (error) {
                    console.log(error)
                })
            }
        }
    }
</script>
       
