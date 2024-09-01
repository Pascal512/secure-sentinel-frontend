<template>
    <div class="h-100 w-100 overflow-y-hidden bg-sombre">
        <div class="mx-auto col-11 col-md-4 align-items-center position-relative z-index-20">
            <img src="../assets/Image13.png" alt="" class="w-100" >
        </div>

        <div class="col-12 col-md-6 mx-auto px-3 pt-5 conteneur-clair bg-clair position-relative z-index-10 position-top-negative">
            <h2 class="w-100 fw-900 text-center">et de deux</h2>
            <form action="" class="mt-3">
                <label for="email" class="label-normal" >Email</label>
                <input type="email" class="input-clair" id="email" placeholder="" >
                
                <label for="password" class="label-normal pt-3" >Mot de passe</label>
                <input type="password" class="input-clair padding-droit" id="password" placeholder="" >
                
                <label for="passwordConfirm" class="label-normal pt-3" >Confirmation</label>
                <input type="password" class="input-clair padding-droit" id="passwordConfirm" placeholder="" >

                <router-link to="/PageAccueil" class="form-bouton bouton-sombre mt-5" >S'inscrire</router-link>
                <p class="text-center fw-400 fs-14 my-3">Ou</p>
                <div class="text-center">
                    <img src="../assets/Image7.svg" class="me-3" alt="">
                    <img src="../assets/Image8.svg" alt="">
                </div>
                <p class="text-center fw-400 fs-14 mt-3 mb-0 pb-5">Vous avez déjà un compte ? <router-link to="/ConnexionPage" class="lien text-black">Connectez-vous</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InscriptionPage2'
}
</script>

<style scoped>
.position-top-negative {
    margin-top: -20px;
}
</style>