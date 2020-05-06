<template>
    <div class="col-7 m-0 p-0">
        <div class="row m-0 p-0">
            <PlateauJoueur v-for="(player, index) in players" :key="index" class="col-6" :plateauJoueur="player"></PlateauJoueur>
        </div>
    </div>
</template>

<script>
    import PlateauJoueur from '@/components/PlateauJoueur'
    export default {
        name: "Menu",
        components : {
            PlateauJoueur
        },
        methods: {
        },
        props: {
            players: {}
        }
    }
</script>

<style scoped>

</style>