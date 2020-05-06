<template>
    <div class="fabrique flex-grow-1">
        <div class="container-fabrique-mozaiques d-flex flex-column justify-content-around">
            <div class="d-flex flex-row justify-content-around fabrique-ligne">
                <Mozaique v-for="(mozaique, index) in mozaiques" :scale="1" :key="index" :couleur="mozaique.couleur" @mouseOverMozaique="mouseOver(mozaique.couleur)" class="col-6"></Mozaique>
            </div>
        </div>
    </div>
</template>

<script>
    import Mozaique from '@/components/Mozaique'
    export default {
        name: "Fabrique",
        components: {
            Mozaique
        },
        data() {
            return {
            }
        },
        props:{
            mozaiques: {

            }
        },
        methods: {
            mouseOver (el) {
                Array.from(this.mozaiques).forEach(element => {
                    if(element.couleur == el) {
                        element.scale = 1.5;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .fabrique {
        background: center / contain no-repeat url("/img/fabrique.png");
        height: auto;
        max-height: 33%;
        width: auto;
        position: relative;
    }

    .container-fabrique-mozaiques {
        border: 3px solid blue;
        position: absolute;
        top: 15%;
        bottom: 15%;
        right: 15%;
        left: 15%;
    }

    .fabrique-ligne {
        height: 40%;
    }
</style>