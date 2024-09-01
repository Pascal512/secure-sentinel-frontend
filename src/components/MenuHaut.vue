<template>
    <div class="py-2 px-3 position-fixed z-index-10 top-0 start-0 w-100 d-flex justify-content-between h-min-70px"
        :class="{ 'bg-clair bordure-bas-sombre': !isModeSombre, 'bg-sombre bordure-bas-clair': isModeSombre }"
    >
        <router-link to="/PageAccueil" class="d-inline-block align-self-center">
            <img src="../assets/svg/photo_profile.svg" alt="" class="btn-img">
        </router-link>
        <div class="text-center inline-bloc fw-600 text-26 w-fit-content align-self-center">
            {{ titre }}
        </div>
        <router-link to="/PageAccueil" class="d-inline-block align-self-center">
            <img src="../assets/svg/icon_search.svg" alt="" class="btn-img">
        </router-link>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MenuHaut',
    props: {
        titre: String
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
.bordure-bas-clair {
    border-bottom: 2px solid white;
}
.bordure-bas-sombre {
    border-bottom: 2px solid #343434;
}
.bg-sombre-menu-haut {
    background-color: #2D2C2C;
}
.btn-img {
    width: 30px;
    height: 30px;
}
</style>