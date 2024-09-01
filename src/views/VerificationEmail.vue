<template>
    <MenuHautSansBouton titre="Vérification mail" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut z-index-10" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >
        <div class="container pt-5">
            <div class="col-8 col-md-3 mx-auto mb-5">
                <img src="../assets/Image11.png" alt="" class="d-block w-100 border-radius-50p bg-clair p-2 overflow-visible">
            </div>
            <p class="text-center w-80 fw-400 text-19 mx-auto mb-5">Veuillez saisir le code à 4 chiffres envoyé sur *********@gmail.com</p>
            <form action="" class="mx-auto col-11 col-md-5">
                <input type="number" name="code" id="code-0" class="cacher mx-auto d-block" @input="editer" autofocus >
                <div class="conteneur-code mx-auto">
                    <input type="number" maxlength="1" name="code-1" id="code-1" class="input-code" placeholder="_" @click="editer" readonly>
                    <input type="number" maxlength="1" name="code-2" id="code-2" class="input-code" placeholder="_" @click="editer" readonly>
                    <input type="number" maxlength="1" name="code-3" id="code-3" class="input-code" placeholder="_" @click="editer" readonly>
                    <input type="number" maxlength="1" name="code-4" id="code-4" class="input-code" placeholder="_" @click="editer" readonly>
                </div>
                <div class="text-14 mx-auto text-center my-4 couleurs-herite cursor-pointer" @click="renvoyerCode" >Renvoyer code</div>
                <router-link to="/NouveauMotDePasse" class="form-bouton" :class="{ 'bouton-sombre': !isModeSombre, 'bouton-clair': isModeSombre }">Vérifier</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuHautSansBouton from '@/components/MenuHautSansBouton.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'VerificationEmail',
    components: {
        MenuHautSansBouton,
        DarkModeSwitch
    },
    computed: {
        ...mapGetters(['isModeSombre'])
    },
    methods: {
        ...mapActions(['toggleModeSombre']),
        renvoyerCode() {
            alert('Le code a été renvoyé.');
        },
        editer() {
            let code0 = document.getElementById('code-0');
            let code1 = document.getElementById('code-1');
            let code2 = document.getElementById('code-2');
            let code3 = document.getElementById('code-3');
            let code4 = document.getElementById('code-4');
            code0.focus();
            if (code0.value.length > 4) {
                code0.value = code0.value.slice(0, 4);
            }
            let [char1, char2, char3, char4] = code0.value;
            code1.value = char1 ? char1 : '';
            code2.value = char2 ? char2 : '';
            code3.value = char3 ? char3 : '';
            code4.value = char4 ? char4 : '';
            console.log('###___édition enclenchée !');
        }
    }
}
let varInterval = setInterval( function () {
    let codeInput = document.getElementById('code-0');
    if (codeInput) {
        codeInput.focus();
        clearInterval(varInterval);
    }
}, 100);

// document.addEventListener('DOMContentLoaded', function() {
//     let code0 = document.getElementById('code-0');
//     let code1 = document.getElementById('code-1');
//     let code2 = document.getElementById('code-2');
//     let code3 = document.getElementById('code-3');
//     let code4 = document.getElementById('code-4');

//     function editer() {
//         code0.focus();
//         validateLength();
//         console.log('###___édition enclenchée !');
//     }

//     function validateLength() {
//         if (code0.value.length > 4) {
//             code0.value = code0.value.slice(0, 4);
//         }
//         let [char1, char2, char3, char4] = code0.value;
//         code1.value = char1 ? char1 : '';
//         code2.value = char2 ? char2 : '';
//         code3.value = char3 ? char3 : '';
//         code4.value = char4 ? char4 : '';
//     }

//     code0.addEventListener('input', validateLength);
//     code1.addEventListener('click', editer);
//     code2.addEventListener('click', editer);
//     code3.addEventListener('click', editer);
//     code4.addEventListener('click', editer);

//     let code = code1.value + code2.value + code3.value + code4.value;
//     console.log(code);
//     code0.focus();
// });
</script>

<style scoped>
.conteneur-code {
    width: 210px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between !important;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.cacher {
    position: absolute;
    z-index: -1;
}
</style>