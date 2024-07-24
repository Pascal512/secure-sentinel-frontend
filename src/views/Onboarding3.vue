<template>
    <div class="h-100 w-100">
        <HeaderOnboarding pointActif="3" />
        <div class="mx-auto col-12 col-md-5 px-5 pt-5 pt-md-3 h-45vh align-items-center">
            <img src="../assets/Image3.png" alt="" class="w-100 mt-5 mt-md-2" >
        </div>

        <div class="col-12 col-md-6 mx-auto bg-sombre px-5 pt-5 conteneur-sombre text-center h-55vh">
            <h2 class="w-75 mx-auto fw-900 pt-md-5">Gestion des Intrus</h2>
            <p class="pt-3">Téléchargez les photos des membres de votre famille pour éviter les fausses alertes et recevez des notifications instantanées en cas d'intrusion.</p>
            <router-link to="/Onboarding4">
                <div class="bouton bouton-clair d-inline-block mt-3">Continuer</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import HeaderOnboarding from '@/components/HeaderOnboarding.vue';

export default {
    name: 'OnboardingThird',
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