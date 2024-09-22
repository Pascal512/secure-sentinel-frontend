<template>
    <MenuHaut titre="Paramètres" />
    <DarkModeSwitch />
    <div class="min-h-100vh padding-haut-bas z-index-10 justify-content-center" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >

        <div class="w-auto conteneur my-5 mx-auto">

            //

        </div>

    </div>

    <MenuBas fenetre="Settings" />
</template>

<script>
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MenuBas from '@/components/MenuBas.vue';
import MenuHaut from '@/components/MenuHaut.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'PageSettings',
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
    height: min-content;
    border-radius: 0px 0px 12px 12px;
}
.element img {
    width: 100px;
    height: 90px;
}
.element p {
    color: #1E1E1E;
    background-color: #D9D9D9;
    font-size: 11px;
    text-align: center;
    border-radius: 0px 0px 12px 12px;
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
.conteneur {
    min-height: 300px;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>