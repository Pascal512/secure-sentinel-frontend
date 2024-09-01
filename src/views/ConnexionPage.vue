<template>
    <div class="h-100 w-100 overflow-y-hidden bg-sombre">
        <div class="mx-auto col-12 col-md-6 h-50vh align-items-center position-relative z-index-10">
            <img src="../assets/Image6.png" alt="" class="w-100" >
        </div>

        <div class="col-12 col-md-6 mx-auto px-3 pt-5 conteneur-clair marge-negative-conteneur min-h-50vh bg-clair position-relative z-index-20">
            <h2 class="w-100 fw-900">Connectez-vous à SecureSentinel</h2>
            <form action="" class="mt-3">
                <label for="email" class="label-normal" >E-mail</label>
                <input type="email" class="input-clair" id="email" placeholder="" >
                
                <label for="password" class="label-normal pt-3" >Mot de Passe</label>
                <input type="password" class="input-clair padding-droit" id="password" placeholder="" >
                <div class="position-relative">
                    <router-link to="/MotDePasseOublie" class="position-absolute end-0 lien-oublie" >
                        <div class="lien text-black d-inline-block mt-3 me-5">Oublié ?</div>
                    </router-link>
                </div>
                <router-link to="/PageAccueil" class="form-bouton bouton-sombre mt-5" >Se connecter</router-link>
                <p class="text-center fw-400 text-14 my-3">Ou</p>
                <div class="text-center">
                    <img src="../assets/Image7.svg" class="me-3" alt="">
                    <img src="../assets/Image8.svg" alt="">
                </div>
                <p class="text-center fw-400 text-14 mt-3 mb-0 pb-5">Vous n'avez pas de compte ? <router-link to="/InscriptionPage1" class="lien text-black">Inscrivez-vous</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConnexionPage'
}
</script>

<style scoped>
.lien-oublie {
    top: -55px;
}
.padding-droit {
    padding-right: 110px;
}
.marge-negative-conteneur {
    margin-top: -30px;
}
</style>

<style>
.conteneur-clair {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}
.z-index-100 {
    z-index: 100;
}
</style>