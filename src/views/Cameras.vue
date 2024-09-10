<template>
    <MenuHaut titre="Caméras" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut-bas z-index-10 d-flex" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >

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
</style>