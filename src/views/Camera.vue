<template>
    <MenuHaut titre="Caméra" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut z-index-10 d-flex" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >

        <div class="mx-auto pt-5 d-inline-block">
            <div class="my-5 py-4">
                <h2 class="w-100 fw-900 text-center mt-5">Connecter l'appareil</h2>
                <p class="text-center px-5 pt-3 mt-4">Connectez votre caméra, regardez des vidéos et recevez des alertes dans l'application</p>
            </div>
            <div class="d-flex">
                <router-link to="/PageCamera" class="bouton moins-arrondi text-center d-inline-block w-300px mx-auto mt-5 align-self-center" :class="{ 'bouton-clair': isModeSombre, 'bouton-sombre': !isModeSombre }" >Connecter un appareil</router-link>
            </div>
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
    name: 'PageCamerasVides',
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