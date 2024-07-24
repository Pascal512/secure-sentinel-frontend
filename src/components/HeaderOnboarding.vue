<template>
    <div class="w-100 px-5 pt-3 position-absolute top-0 start-0 position-relative z-index-30">
        <div class="col-12 col-md-6 mx-auto">
            <div class="row justify-content-between">
                <div class="col-auto p-0 pt-2 align-items-center">
                    <!-- p class="point" :class="{'point-actif': pointActif=='1'}" ></p -->
                    <router-link to="/Onboarding1">
                        <p class="point" :class="{'point-actif': pointActif=='1'}"></p>
                    </router-link>
                    <router-link to="/Onboarding2">
                        <p class="point" :class="{'point-actif': pointActif=='2'}"></p>
                    </router-link>
                    <router-link to="/Onboarding3">
                        <p class="point" :class="{'point-actif': pointActif=='3'}"></p>
                    </router-link>
                    <router-link to="/Onboarding4">
                        <p class="point" :class="{'point-actif': pointActif=='4'}"></p>
                    </router-link>
                </div>
                <div class="col-auto p-0">
                    <p class="decoration-none fs-6 fw-bold d-inline-block">
                        <router-link to="/OnboardingFin">Passer</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderOnboarding',
    props: {
        pointActif: String
    }
}
</script>

<style scoped>
.point {
    display: inline-block;
    background-color: black;
    width: 5px;
    height: 5px;
    margin-right: 5px;
    border-radius: 3px;
    align-self: center;
}
.point-actif {
    width: 35px;
}
.decoration-none a {
    text-decoration: none !important;
    color: black;
}
.z-index-30 {
    z-index: 30;
}
</style>