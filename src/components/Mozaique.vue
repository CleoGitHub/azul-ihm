<template>
    <div class="mozaique embed-responsive embed-responsive-1by1" v-bind:style="styleObject" @mouseover="mouseOver()">
    </div>
</template>

<script>
    export default {
        name: "Mozaique",
        data() {
            return {
                libre : false

            }
        },
        props: {
            couleur : {
                type : Number,
                default : 0
            },
            scale : {
                type : Number,
                default : 1
            }
        },
        computed: {
            styleObject() {
                let couleur;
                switch (this.couleur) {
                    case 0:
                        couleur = "none"
                        break;
                    case 1:
                        couleur = "rouge"
                        break;
                    case 2:
                        couleur = "rouge"
                        break;
                    case 3:
                        couleur = "rouge"
                        break;
                    case 4:
                        couleur = "rouge"
                        break;
                    case 5:
                        couleur = "rouge"
                        break;
                }
                let back = this.libre ? "none" : 'center / contain no-repeat url(img/mozaique-' + couleur + '.png)'
                return {
                    background : back,
                    transform : 'scale(' + this.scale + ')'
                }
            }
        },
        methods: {
            mouseOver () {
                this.$emit('mouseOverMozaique');
            }
        }
    }
</script>

<style scoped>
    .mozaique {
        border: 3px blue solid;
    }

    .ligne > .mozaique {
        width: 20%;
    }
    .plancher > .mozaique {
        width: 13%;
        margin:0.7%;
    }
</style>