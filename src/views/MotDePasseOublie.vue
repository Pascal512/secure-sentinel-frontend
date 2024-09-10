<template>
    <MenuHautSansBouton titre="Mot de Passe oublié" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut-bas" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >
        <div class="container pt-5">
            <div class="col-8 col-md-3 mx-auto mb-5">
                <img src="../assets/Image9.png" alt="" class="d-block w-100 border-radius-50p">
            </div>
            <p class="text-center w-75 fw-400 text-19 mx-auto mb-5">Entrez votre email pour recevoir un code de réinitialisation</p>
            <form action="" class="mx-auto col-11 col-md-5">
                <label for="email" class="label-normal" >E-mail</label>
                <input type="email" id="email" placeholder="" :class="{ 'input-sombre': isModeSombre, 'input-clair': !isModeSombre }">
                <router-link to="/VerificationEmail" class="form-bouton mt-5" :class="{ 'bouton-sombre': !isModeSombre, 'bouton-clair': isModeSombre }">Réinitialisation mot de passe</router-link>
                <p class="text-center fw-400 text-14 mt-3 mb-0 pb-5">Vous vous souvenez de votre mot de passe ? <router-link to="/ConnexionPage" class="lien couleurs-herite">Connectez-vous</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuHautSansBouton from '@/components/MenuHautSansBouton.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MotDePasseOublie',
    components: {
        MenuHautSansBouton,
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

<style>

</style>