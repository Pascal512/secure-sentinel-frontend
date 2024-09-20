<template>
    <MenuHaut titre="Notifications" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut-bas z-index-10" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >
        <div class="my-4 mx-auto px-4 d-flex bg-light text-dark filtre justify-content-between ombre-simple">
            <img src="../assets/svg/filter.svg" alt="">
            <span>Filtrer par camera ou position</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
        </div>

        <div class="">
            <div class="d-flex flex-wrap w-auto mx-auto text-center mt-4 justify-content-center">

                <div class="d-flex m-2 p-0 w-350px h-100px bg-clair border-radius-11px justify-content-between align-items-center ombre-simple">
                    <img src="../assets/Image19.png" alt="" class="photo-intrus" >
                    <div class="text-intrus my-auto">
                        <p class="text-15 fw-700 text-rouge m-0">Alerte intrusion</p>
                        <p class="text-13 m-0">ENTRÉE PRINCIPALE</p>
                        <p class="text-16 m-0">Camera 010102</p>
                        <p class="text-rouge text-11 m-0">10h42min02sec</p>
                    </div>
                    <img src="../assets/visage intrus.png" class="me-3" alt="">
                </div>
                
                <div class="d-flex m-2 p-0 w-350px h-100px bg-clair border-radius-11px justify-content-between align-items-center ombre-simple">
                    <img src="../assets/Image17.png" alt="" class="photo-intrus" >
                    <div class="text-intrus my-auto">
                        <p class="text-15 fw-700 text-rouge m-0">Alerte intrusion</p>
                        <p class="text-16 m-0">Camera 010102</p>
                        <p class="text-rouge text-11 m-0">10h41min52sec</p>
                    </div>
                    <img src="../assets/visage intrus.png" class="me-3" alt="">
                </div>
                
                <div class="d-flex m-2 p-0 w-350px h-100px bg-clair border-radius-11px justify-content-between align-items-center ombre-simple">
                    <img src="../assets/Image19.png" alt="" class="photo-intrus" >
                    <div class="text-intrus my-auto">
                        <p class="text-15 fw-700 text-rouge m-0">Alerte intrusion</p>
                        <p class="text-16 m-0">Camera 010102</p>
                        <p class="text-rouge text-11 m-0">10h40min24sec</p>
                    </div>
                    <img src="../assets/visage intrus.png" class="me-3" alt="">
                </div>
                
                <div class="d-flex m-2 p-0 w-350px h-100px bg-clair border-radius-11px justify-content-between align-items-center ombre-simple">
                    <img src="../assets/Image20.png" alt="" class="photo-intrus" >
                    <div class="text-intrus my-auto">
                        <p class="text-15 fw-700 text-rouge m-0">Alerte intrusion</p>
                        <p class="text-16 m-0">Camera 010102</p>
                        <p class="text-rouge text-11 m-0">10h30min00sec</p>
                    </div>
                    <img src="../assets/visage intrus.png" class="me-3" alt="">
                </div>
                
                <div class="d-flex m-2 p-0 w-350px h-100px bg-clair border-radius-11px justify-content-between align-items-center ombre-simple">
                    <img src="../assets/Image18.png" alt="" class="photo-intrus" >
                    <div class="text-intrus my-auto">
                        <p class="text-15 fw-700 text-rouge m-0">Alerte intrusion</p>
                        <p class="text-16 m-0">Camera 010102</p>
                        <p class="text-rouge text-11 m-0">10h25min02sec</p>
                    </div>
                    <img src="../assets/visage intrus.png" class="me-3" alt="">
                </div>
                
            </div>
        </div>
    </div>

    <MenuBas fenetre="Alarmes" />
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuBas from '@/components/MenuBas.vue';
import MenuHaut from '@/components/MenuHaut.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'PageAlarmes',
    components: {
        MenuHaut,
        MenuBas,
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
.element {
    min-width: 335px;
    max-width: 335px;
    height: 279px;
    border-radius: 27px;
    box-shadow: -3px 1px 9px 0px #00000044;
    margin: 25px;
}
.element-bg-sombre {
    background-color: #2D2C2C;
}
.element-play {
    left: 104px;
    top: 23px;
}
.filtre {
    width: 350px;
    height: 40px;
    align-items: center;
    border-radius: 9px;
}
.filtre span {
    color: #2D2C2C66;
}
.photo-intrus {
    height: 100%;
    border-radius: 11px 0px 0px 11px;
}
.text-intrus {
    width: 120px;
    text-align: justify;
}
.text-intrus p {
    text-align: justify;
}
.text-rouge {
    color: #EA4335;
}
</style>