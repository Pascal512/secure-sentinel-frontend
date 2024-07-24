<template>
    <div class="h-100 w-100 overflow-y-hidden bg-sombre">
        <div class="mx-auto col-12 col-md-6 h-50vh align-items-center position-relative z-index-10">
            <img src="../assets/Image6.png" alt="" class="w-100" >
        </div>

        <div class="col-12 col-md-6 mx-auto px-3 pt-5 rounded-5 conteneur-clair marge-negative-conteneur min-h-50vh bg-clair position-relative z-index-20">
            <h2 class="w-100 fw-900">Connectez-vous à SecureSentinel</h2>
            <form action="" class="mt-3">
                <label for="email" class="label-normal" >E-mail</label>
                <input type="email" class="input-clair" id="email" placeholder="" >
                
                <label for="password" class="label-normal pt-3" >Mot de Passe</label>
                <input type="password" class="input-clair padding-droit" id="password" placeholder="" >
                <div class="position-relative">
                    <router-link to="/" class="position-absolute end-0 lien-oublie" >
                        <div class="lien text-black d-inline-block mt-3 me-5">Oublié ?</div>
                    </router-link>
                </div>
                <router-link to="/" class="form-bouton bouton-sombre mt-5" >Se connecter</router-link>
                <p class="text-center fw-400 fs-14 my-3">Ou</p>
                <div class="text-center">
                    <img src="../assets/Image7.svg" class="me-3" alt="">
                    <img src="../assets/Image8.svg" alt="">
                </div>
                <p class="text-center fw-400 fs-14 my-3 pb-5">Vous n'avez pas de compte ? <router-link to="/" class="lien text-black">Inscrivez-vous</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConnexionPage',
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
.fw-400 {
    font-weight: 400;
}
.fs-14 {
    font-size: 14px;
}
.form-bouton {
    display: inline-flex !important;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 52px;
    text-decoration: none;
    border-radius: 10px;
    font-size: 19px;
    font-weight: 700;
}
.bouton-sombre {
    color: white;
    background-color: #343434;
}
.conteneur-clair {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    z-index: 100;
}
.h-50vh {
    height: 50vh !important;
}
.min-h-50vh {
    min-height: 50vh !important;
}
.z-index-10 {
    z-index: 10;
}
.z-index-20 {
    z-index: 20;
}
.input-clair {
    display: block;
    width: 100%;
    height: 48px;
    padding: 0px 15px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
}
.label-normal {
    font-weight: 400px;
    font-size: 14px;
    margin-bottom: 5px;
}
.lien {
    font-weight: 600;
    font-size: 14px;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
}
</style>