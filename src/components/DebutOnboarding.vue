<template>
    <div
        class="d-block h-100 w-100 m-0 pt-5" id="debutOnboarding"
        :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }"
    >
        <div class="container h-100 pt-5">
            <div class="row justify-content-center align-items-center pt-3">
                <div class="col text-center mt-5">
                    <h1 class="fw-900">Bienvenue sur SecureSentinel</h1>
                    <p class="mt-5">Protégez votre famille en toute simplicité avec notre solution de surveillance intelligente.</p>
                    <router-link to="/Onboarding1">
                        <div class="bouton bouton-clair d-inline-block mt-3">Commencer</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'DebutOnboarding',
    computed: {
        ...mapGetters(['isModeSombre'])
    },
    methods: {
        ...mapActions(['toggleModeSombre'])
    }
}
</script>

<style>
#debutOnboarding {
    min-height: 100vh !important;
}
</style>