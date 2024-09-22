<template>
    <MenuHaut titre="Paramètres" />
    <DarkModeSwitch />
    <div class="min-h-100vh w-100 padding-haut-bas z-index-10 justify-content-center" :class="{ 'bg-clair': !isModeSombre, 'bg-sombre': isModeSombre }" >

        <div class="col-12 col-md-6 conteneur my-3 mx-auto">

            <div class="settings w-100">

                <div class="single-setting p-4 cursor-pointer">
                    <svg width="37" height="37" viewBox="0 0 37 37" class="me-2" fill="none" :stroke="{ 'white': isModeSombre, '#343434': !isModeSombre }" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4167 10.7916H3.08337M12.3334 18.5H3.08337M15.4167 26.2083H3.08337" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M26.2083 26.2083C30.4655 26.2083 33.9167 22.7572 33.9167 18.5C33.9167 14.2428 30.4655 10.7916 26.2083 10.7916C21.9511 10.7916 18.5 14.2428 18.5 18.5C18.5 22.7572 21.9511 26.2083 26.2083 26.2083Z" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M26.2084 15.4166V18.2625L27.75 20.0416" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Heures de Surveillance
                </div>
                <hr class="my-0">

                <div class="single-setting p-4">
                    <svg width="34" height="34" viewBox="0 0 34 34" class="me-2" fill="none" :stroke="{ 'white': isModeSombre, '#343434': !isModeSombre }" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_22_500)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08338 12.75C7.08338 10.12 8.12817 7.59763 9.9879 5.7379C11.8476 3.87816 14.37 2.83337 17 2.83337C19.6301 2.83337 22.1524 3.87816 24.0122 5.7379C25.8719 7.59763 26.9167 10.12 26.9167 12.75V18.0824L29.4979 23.2447C29.6167 23.4823 29.6728 23.7463 29.6609 24.0117C29.6489 24.2771 29.5693 24.535 29.4297 24.761C29.29 24.987 29.0949 25.1735 28.8628 25.3029C28.6308 25.4322 28.3695 25.5001 28.1039 25.5H22.4882C22.1731 26.7159 21.4632 27.7927 20.4698 28.5614C19.4765 29.33 18.2561 29.7471 17 29.7471C15.744 29.7471 14.5236 29.33 13.5303 28.5614C12.5369 27.7927 11.827 26.7159 11.5119 25.5H5.89621C5.63055 25.5001 5.3693 25.4322 5.13726 25.3029C4.90521 25.1735 4.71009 24.987 4.57042 24.761C4.43074 24.535 4.35116 24.2771 4.33922 24.0117C4.32728 23.7463 4.38339 23.4823 4.50221 23.2447L7.08338 18.0824V12.75ZM14.5464 25.5C14.7951 25.9307 15.1527 26.2884 15.5834 26.537C16.0141 26.7857 16.5027 26.9166 17 26.9166C17.4974 26.9166 17.9859 26.7857 18.4166 26.537C18.8474 26.2884 19.205 25.9307 19.4537 25.5H14.5464ZM17 5.66671C15.1214 5.66671 13.3198 6.41298 11.9914 7.74137C10.663 9.06975 9.91671 10.8714 9.91671 12.75V18.0824C9.91668 18.522 9.81434 18.9556 9.61779 19.3489L7.96029 22.6667H26.0412L24.3837 19.3489C24.1867 18.9557 24.0838 18.5221 24.0834 18.0824V12.75C24.0834 10.8714 23.3371 9.06975 22.0087 7.74137C20.6803 6.41298 18.8787 5.66671 17 5.66671Z" fill="currentColor"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_22_500">
                        <rect width="34" height="34" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    Préférences de Notifications
                </div>
                <hr class="my-0">

                <div class="m-0 p-4">
                    <p class="text-18 fw-300">Sélectionnez comment vous souhaitez recevoir les notifications</p>

                    <div class="d-flex align-items-center py-2">
                        <input type="checkbox" class="checkbox-setting me-3" name="notifSMS" id="notifSMS">
                        <label for="notifSMS" class="text-14 fw-300" >Recevoir les notifications par SMS</label>
                    </div>

                    <div class="d-flex align-items-center py-2">
                        <input type="checkbox" class="checkbox-setting me-3" name="notifMail" id="notifMail">
                        <label for="notifMail" class="text-14 fw-300" >Recevoir les notifications par email</label>
                    </div>

                    <div class="d-flex align-items-center py-2">
                        <input type="checkbox" class="checkbox-setting me-3" name="notifAppel" id="notifAppel">
                        <label for="notifAppel" class="text-14 fw-300" >Recevoir les notifications par appel téléphonique</label>
                    </div>

                </div>

            </div>

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
.single-setting {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
}
.checkbox-setting {
    width: 29px;
    height: 29px;
    color: #343434;
    background-color: #ffffff00;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>