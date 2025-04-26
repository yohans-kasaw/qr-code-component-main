<template>
    <div
        class="d-flex justify-center align-center bg-slate300"
        style="height: 100vh; width: 100vw"
    >
        <v-card
            max-width="375"
            class="d-flex flex-column ga-6 pa-4 bottom-shadow"
            style="border-radius: 20px"
        >
            <v-img :src="qrCode" cover
                style="border-radius: 12px"
            ></v-img>

            <div class="mb-7">
                <div
                    class="text-center font-weight-bold font-outfit mx-6 mb-6"
                    style="font-size: 24px; line-height: 30px"
                >
                    Improve your front-end skills by building projects
                </div>

                <div
                    class="text-center text-medium-emphasis font-outfit mx-6"
                    style="font-size: 18px"
                >
                    Scan the QR code to visit Frontend Mentor and take your
                    coding skills to the next level
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
// import from an image
import qrCode from './assets/image-qr-code.png'

export default {
    name: 'App',
    data() {
        return {
            qrCode
        }
    }
}
</script>

<style scoped>
.attribution {
    font-size: 11px;
    text-align: center;
}
.attribution a {
    color: hsl(228, 45%, 44%);
}
.bg-slate300 {
    background-color: hsl(212, 45%, 89%);
}

.font-outfit {
    font-family: 'Outfit', sans-serif;
    font-optical-sizing: auto;
}

.bottom-shadow {
    box-shadow: 
        0 0 0 2px white,
        0.2em 0.3em 3em rgb(100 0 0 / 10%);

}
</style>
