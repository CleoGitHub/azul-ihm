<template>
    <div class="mozaiques-gauche">
        <div class="ligne flex-row-reverse" @mouseover="mouseOver()" v-for="(ligne, index) in lignes" :key="index">
            <Mozaique v-for="mozaique in ligne" :key="mozaique" :couleur="couleurs[ligne]"></Mozaique>
        </div>
    </div>
</template>

<script>
    import Mozaique from '@/components/Mozaique'
    export default {
        name: "MozaiquesGauche",
        components : {
            Mozaique
        },
        methods: {
            mouseOver () {

            }
        },
        props: {
            couleurs:{},
            lignes: {}
        }
    }
</script>

<style scoped>
    .mozaiques-gauche {
        position: relative;
        border: 3px solid yellow;
        width: 47%;
        left:0;
        height:100%;
    }
</style>