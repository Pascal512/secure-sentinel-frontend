<template>
    <div class="h-100 w-100">
        <HeaderOnboarding pointActif="4" />
        <div class="mx-auto col-10 col-md-5 px-5 pt-5 pt-md-0 h-45vh align-items-center">
            <img src="../assets/Image4.png" alt="" class="w-100 mt-5" >
        </div>

        <div class="col-12 col-md-6 mx-auto bg-sombre px-5 pt-5 conteneur-sombre text-center h-55vh">
            <h2 class="w-75 mx-auto fw-900 pt-md-5">Surveillez en Temps Réel</h2>
            <p class="pt-3">Visualisez les flux vidéo de vos caméras de surveillance en direct et gardez un œil sur votre maison où que vous soyez.</p>
            <router-link to="/OnboardingFin">
                <div class="bouton bouton-clair d-inline-block mt-3">Commencer</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import HeaderOnboarding from '@/components/HeaderOnboarding.vue';

export default {
    name: 'OnboardingFourth',
    components: {
        HeaderOnboarding
    }
}
</script>

<style scoped>
.conteneur-sombre {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}
.h-45vh {
    height: 45vh !important;
}
.h-55vh {
    height: 55vh !important;
}
</style>