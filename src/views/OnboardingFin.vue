<template>
    <div
        class="d-block h-100 w-100 m-0 pt-5" id="finOnboarding"
        :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }"
    >
        <div class="container h-100">
            <div class="row justify-content-center align-items-center pt-3">
                <div class="col-auto mx-auto pb-5 bg-sombre px-5 rounded-5">
                    <img src="../assets/Image5.png" class="d-inline-block mx-auto" alt="">
                </div>
                <div class="col-12"></div>
                <div class="col text-center mt-5">
                    <h1 class="fw-900">Vous êtes Prêt !</h1>
                    <p class="mt-3 mb-5 px-4">Vous pouvez maintenant commencer à utiliser SecureSentinel pour protéger votre maison et votre famille.</p>
                    <router-link to="/Connexion">
                        <div class="bouton bouton-clair d-inline-block mt-3">Connexion</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'OnboardingFin',
    computed: {
        ...mapGetters(['isModeSombre'])
    },
    methods: {
        ...mapActions(['toggleModeSombre'])
    }
}
</script>

<style scoped>
#finOnboarding {
    min-height: 100vh !important;
}
img {
    width: 100px;
}
</style>