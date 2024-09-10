<template>
    <MenuHautSansBouton titre="Créer un nouveau mot de passe" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut-bas" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >
        <div class="container pt-5">
            <div class="col-8 col-md-3 mx-auto mb-5">
                <div class="border-radius-50p bg-clair overflow-visible conteneur-image mx-auto">
                    <img src="../assets/Image12.png" alt="" class="d-block image">
                </div>
            </div>
            <p class="text-center w-75 fw-400 text-19 mx-auto mb-4">Veuillez entrer un nouveau mot de passe</p>
            <form action="" class="mx-auto col-11 col-md-5">
                <label for="password" class="label-normal" >Nouveau Mot de passe</label>
                <input type="password" id="password" placeholder="" class="input-clair">
                <label for="passwordConfirm" class="label-normal" >Confirmation</label>
                <input type="password" id="passwordConfirm" placeholder="" class="input-clair">
                <router-link to="/" class="form-bouton mt-5" :class="{ 'bouton-sombre': !isModeSombre, 'bouton-clair': isModeSombre }">Enregistrer</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuHautSansBouton from '@/components/MenuHautSansBouton.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'NouveauMotDePasse',
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

<style scoped>
.conteneur-image {
    width: 200px;
    height: 200px;
    margin-bottom: 70px;
}
.image {
    width: 280px;
    height: 280px;
    margin: 0px 0px 0px -40px;
}
</style>