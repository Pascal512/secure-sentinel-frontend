<template>
    <div class="text-center fw-600 text-26 py-2 position-absolute top-0 start-0 w-100"
        :class="{ 'bg-clair bordure-bas-sombre': !isModeSombre, 'bg-sombre bordure-bas-clair': isModeSombre }"
    >
        {{ titre }}
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MenuHautSansBouton',
    props: {
        titre: String
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
.bordure-bas-clair {
    border-bottom: 2px solid white;
}
.bordure-bas-sombre {
    border-bottom: 2px solid #343434;
}
</style>