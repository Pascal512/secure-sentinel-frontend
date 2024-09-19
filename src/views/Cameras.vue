<template>
    <MenuHaut titre="Caméras" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut-bas z-index-10" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >
        <div class="my-4 mx-auto px-4 d-flex bg-light text-dark filtre justify-content-between">
            <img src="../assets/svg/filter.svg" alt="">
            <span>Filtrer par camera ou position</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
        </div>

        <div class="d-flex">
            <div class="w-auto mx-auto text-center mt-4">
                <p class="d-inline-block text-20 m-2 py-3 w-300px max-h-100px border-green border-radius-20px text-center">
                    Camera 01 - Terrasse <br>
                    6h40 - 03h40
                </p>
                <p class="d-inline-block text-20 m-2 py-3 w-300px max-h-100px border-green border-radius-20px text-center">
                    Camera 02 - Terrasse <br>
                    6h40 - 03h40
                </p>
                <p class="d-inline-block text-20 m-2 py-3 w-300px max-h-100px border-green border-radius-20px text-center">
                    Camera 03 - Terrasse <br>
                    6h40 - 03h40
                </p>
                <p class="d-inline-block text-20 m-2 py-3 w-300px max-h-100px border-green border-radius-20px text-center">
                    Camera 04 - Terrasse <br>
                    6h40 - 03h40
                </p>
                <p class="d-inline-block text-20 m-2 py-3 w-300px max-h-100px border-green border-radius-20px text-center">
                    Camera 05 - Terrasse <br>
                    6h40 - 03h40
                </p>
            </div>
        </div>
    </div>

    <MenuBas fenetre="Camera" />
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuBas from '@/components/MenuBas.vue';
import MenuHaut from '@/components/MenuHaut.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'PageCameras',
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
</style>