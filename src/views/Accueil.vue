<template>
    <MenuHaut titre="SecureSentinel" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut-bas z-index-10" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >
        <div class="container pt-5">

            <h2 class="w-100 fw-900 text-center">Caméra de Surveillance</h2>
            <div class="mx-auto d-flex flex-wrap justify-content-center">
                <div class="element" :class="{ 'bg-clair': !isModeSombre, 'element-bg-sombre': isModeSombre }">
                    <p class="text-16 my-2 ps-3">Maison - Cotonou</p>
                    <div class="position-relative">
                        <img src="../assets/Image14.png" alt="" class="w-100">
                        <img src="../assets/svg/carbon_play-outline.svg" alt="" class="position-absolute element-play">
                    </div>
                    <p class="ps-3 mt-1 mb-0 text-20 fw-500">Camera 01 - Salon</p>
                    <p class="ps-3 my-0 text-12 fw-400">Vendredi 10 Mai 2024 10h00min00</p>
                </div>
                <div class="element"  :class="{ 'bg-clair': !isModeSombre, 'element-bg-sombre': isModeSombre }">
                    <p class="text-16 my-2 ps-3">Maison - Calavi</p>
                    <div class="position-relative">
                        <img src="../assets/Image15.png" alt="" class="w-100">
                        <img src="../assets/svg/carbon_play-outline.svg" alt="" class="position-absolute element-play">
                    </div>
                    <p class="ps-3 mt-1 mb-0 text-20 fw-500">Camera 03 - Cuisine</p>
                    <p class="ps-3 my-0 text-12 fw-400">Samedi 11 Mai 2024 09h30min24</p>
                </div>
            </div>
            
        </div>
    </div>
    <MenuBas fenetre="Accueil" />
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuBas from '@/components/MenuBas.vue';
import MenuHaut from '@/components/MenuHaut.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'PageAccueil',
    components: {
        MenuHaut,
        MenuBas,
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
    border-radius: 27px;
    box-shadow: -3px 1px 9px 0px #00000044;
    margin: 25px;
}
.element-bg-sombre {
    background-color: #2D2C2C;
}
.element-play {
    left: 104px;
    top: 23px;
}
</style>