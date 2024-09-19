<template>
    <MenuHaut titre="Détails Caméra" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut-bas z-index-10 justify-content-center" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >

        <div class="w-auto conteneur my-5">
            <div class="element" :class="{ 'bg-clair': !isModeSombre, 'element-bg-sombre': isModeSombre }">
                <div class="position-relative">
                    <img src="../assets/Image14.png" alt="" class="w-100">
                    <div class="d-flex position-absolute top-0 start-0 mx-auto w-100 h-100 justify-content-center">
                        <img src="../assets/svg/carbon_play-outline.svg" alt="" class="align-self-center" >
                    </div>
                </div>
                <p class="ps-3 mt-1 mb-0 text-20 fw-500">Camera 01 - Salon principal</p>
                <p class="ps-3 my-0 text-12 fw-400"><img src="../assets/Ellipse 8.png" class="mb-1" alt=""> 10h42min02sec <img src="../assets/Polygon 1.png" class="mx-2" alt=""> le 18 juillet 2024</p>
            </div>
        </div>
        <div class="my-5 d-flex w-auto justify-content-center">
            <router-link to="/PageAccueil" class="d-inline-block py-3 mt-5 mx-auto bouton bouton-vert moins-arrondi text-20 fw-700 rounded-3" >Modifier les horraires</router-link>
        </div>

    </div>

    <MenuBas fenetre="Camera" />
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuBas from '@/components/MenuBas.vue';
import MenuHaut from '@/components/MenuHaut.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'CameraDetails',
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
    padding-bottom: 15px;
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
.filtre {
    width: 350px;
    height: 40px;
    align-items: center;
    border-radius: 9px;
}
.filtre span {
    color: #2D2C2C66;
}
.conteneur {
    flex-wrap: wrap;
}
</style>