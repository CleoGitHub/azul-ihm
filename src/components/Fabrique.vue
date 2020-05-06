<template>
    <div class="col-3 m-0 p-0">
        <div class="embed-responsive embed-responsive-1by1">
            <div class="container-fabrique-mozaiques fabrique embed-responsive-item d-flex">
                <div class="row m-auto p-0 col-8">
                    <div class="col-6 m-0 p-0 p-md-1" v-for="(mozaique, index) in mozaiques" :key="index">
                        <Mozaique  :scale="1" :couleur="mozaique" @mouseOverMozaique="mouseOver(mozaique.couleur)"></Mozaique>
                    </div>
                </div>
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
            mozaiques: {}
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
    }

    .container-fabrique-mozaiques {
        border: 3px solid green !important;
    }
</style>