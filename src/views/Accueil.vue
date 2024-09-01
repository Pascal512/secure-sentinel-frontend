<template>
    <MenuHaut titre="SecureSentinel" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut z-index-10" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >
        <div class="container pt-5">

            <h2 class="w-100 fw-900 text-center">Caméra de Surveillance</h2>
            <div class="mx-auto d-flex flex-wrap justify-content-center">
                <div class="element">
                    <p class="text-16 my-2 ps-3">Maison - Cotonou</p>
                    <div class="position-relative">
                        <img src="../assets/Image14.png" alt="" class="w-100">
                        <img src="../assets/svg/carbon_play-outline.svg" alt="" class="position-absolute element-play">
                    </div>
                    <p class="ps-3 mt-1 mb-0 text-20 fw-500">Camera 01 - Salon</p>
                    <p class="ps-3 my-0 text-12 fw-400">Vendredi 10 Mai 2024 10h00min00</p>
                </div>
                <div class="element">
                    <p class="text-16 my-2 ps-3">Maison - Calavi</p>
                    <div class="position-relative">
                        <img src="../assets/Image15.png" alt="" class="w-100">
                        <img src="../assets/svg/carbon_play-outline.svg" alt="" class="position-absolute element-play">
                    </div>
                    <p class="ps-3 mt-1 mb-0 text-20 fw-500">Camera 03 - Cuisine</p>
                    <p class="ps-3 my-0 text-12 fw-400">Samedi 11 Mai 2024 09h30min24</p>
                </div>
            </div>
            <p class="text-center w-80 fw-400 text-19 mx-auto my-5">Veuillez saisir le code à 4 chiffres envoyé sur *********@gmail</p>
            <form action="" class="mx-auto col-11 col-md-5">
                <div class="text-14 mx-auto text-center my-4 couleurs-herite cursor-pointer" @click="renvoyerCode" >Renvoyer code</div>
                <router-link to="/NouveauMotDePasse" class="form-bouton" :class="{ 'bouton-sombre': !isModeSombre, 'bouton-clair': isModeSombre }">Vérifier</router-link>
            </form> 
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>....</p>
            
        </div>
    </div>
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuHaut from '@/components/MenuHaut.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'PageAccueil',
    components: {
        MenuHaut,
        DarkModeSwitch
    },
    computed: {
        ...mapGetters(['isModeSombre'])
    },
    methods: {
        ...mapActions(['toggleModeSombre'])
    }
}

</script>

<style scoped>
.element {
    min-width: 335px;
    max-width: 335px;
    height: 279px;
    background-color: #2D2C2C;
    border-radius: 27px;
    box-shadow: -3px 1px 9px 0px #00000044;
    margin: 25px;
}
.element-play {
    left: 104px;
    top: 23px;
}
</style>