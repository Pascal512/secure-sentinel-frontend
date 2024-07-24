<template>
    <div class="h-100 w-100 overflow-y-hidden">
        <HeaderOnboarding pointActif="2" />
        <div class="mx-auto col-12 col-md-6 h-50vh align-items-center position-relative z-index-10">
            <img src="../assets/Image2.png" alt="" class="w-100" >
        </div>

        <div class="col-12 col-md-6 mx-auto bg-sombre px-5 pt-5 conteneur-sombre text-center h-50vh position-relative z-index-20">
            <h2 class="w-75 mx-auto fw-900 pt-md-5">Paramétrez les Heures de Surveillance</h2>
            <p class="pt-3">Définissez des plages horaires pour activer la surveillance et être notifié en cas d'intrusion pendant ces périodes.</p>
            <router-link to="/Onboarding3">
                <div class="bouton bouton-clair d-inline-block mt-3">Continuer</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import HeaderOnboarding from '@/components/HeaderOnboarding.vue';

export default {
    name: 'OnboardingSecond',
    components: {
        HeaderOnboarding
    }
}
</script>

<style scoped>
.conteneur-sombre {
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    z-index: 100;
}
.h-50vh {
    height: 50vh !important;
}
.z-index-10 {
    z-index: 10;
}
.z-index-20 {
    z-index: 20;
}
</style>