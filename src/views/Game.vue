<template>
    <div class="page">
        <SideBar></SideBar>
        <div class="row">
            <div class="mt-24 mr-20 mb-10 ml-16 flex justify-between text-white">
                <div class="text-3xl font-extrabold">
                    <h1>Játék</h1>
                    <p class="text-xl font-semibold leading-9">Hívd be ismerőseid és indíts játékot</p>
                </div>
                <NavBar></NavBar>
            </div>
            <div class="card__bg">
                <h1 class="p-2 text-tiny text-gray font-semibold">Új játék létrehozása</h1>
                <div class="pt-16 pr-8 pb-12 pl-20 flex flex-col bg-white rounded-max">
                    <div class="flex">
                        <div class="w-1/2 mr-20">
                            <div class="pb-64">
                                <h1 class="title">Név</h1>
                                <p class="description">Add meg a játék nevét!</p>
                                <input class="w-full pt-20 border-b-2 border-solid border-vlightgray outline-none text-tiny" type="text">
                            </div>
                            <div class="pb-48">
                                <h1 class="title">Körök száma</h1>
                                <p class="description">Egy kör akkor ér véget, ha valaki leszállt a buszról.</p>
                                <input class="slider" type="range">
                            </div>
                            <div>
                                <div class="flex justify-between">
                                    <h1 class="title">Feles kör</h1>
                                    <input @click="switchValue()" class="game__checkbox" type="checkbox" value="0">
                                </div>
                                <p v-if="true" class="description">Állítsd be milyen gyakran igyon minden játékos egy felest!</p>
                                <div v-if="true" class="pt-10 pb-24 flex justify-between">
                                    <button class="btn btn--gray ">Random</button>
                                    <button class="btn btn--gray ">5 perc</button>
                                    <button class="btn btn--gray ">10 perc</button>
                                    <button class="btn btn--gray ">15 perc</button>
                                    <button class="btn btn--gray ">20 perc</button>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <h1 class="title">Játékosok meghívása</h1>
                            <p class="description">Offline barátaidat is meghívhatod a játékba. Ha Ők következnek, az a Te böngésződben jelenik meg.</p>
                            <div class="relative mt-8">
                                <div class="absolute inset-y-0 left-0 flex items-center">
                                    <img class="h-6 w-auto fill-current pl-10 pr-6" src="~@/assets/images/search.svg" alt="">
                                </div>
                                <input class="h-16 w-1/2 pl-20 pr-6 text-xs border border-solid border-vlightgray rounded-max outline-none" type="text" placeholder="search">
                            </div>
                            <p class="mb-6 pt-4 text-xs font-medium text-lightgray ">Vendég játékos hozzáadása</p>
                            <div class="flex flex-col items-center w-56">
                                <img class="avatar avatar--xl" src="~@/assets/images/profil.jpg" alt="">
                                <div class="mt-6 mb-2 flex items-center">
                                    <h1 class="text-tiny font-bold">Kovács Attila</h1>
                                    <img class="icons--status ml-4" src="~@/assets/images/status.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="btn w-1/6 h-16">Játék létrehozása</button>
                    </div>
                </div>
                <h1 class="mt-20 mb-2 text-tiny text-gray font-semibold">Meghívásaid</h1>
                <div class="flex justify-between">
                    <div class="w-1/3 mb-8 p-12 bg-white border border-solid border-white rounded-mid">
                        <p class="text-xs font-semibold text-gray">Házigazda: Polyák Mátyás</p>
                        <h1 class="my-10 text-lg font-bold">Játék neve kerül ide</h1>
                        <p class="mb-5 text-xs font-semibold text-gray">Létrehozva: 2020.03.12 - 20:22</p>
                        <div class="flex items-center justify-between">
                            <img class="avatar avatar--xs" src="~@/assets/images/profil.jpg" alt="">
                            <img class="h-12 w-auto" src="~@/assets/images/next.svg" alt="">
                        </div>
                    </div>
                    <div class="w-1/3 mx-32 mb-8 p-12 bg-white border border-solid border-white rounded-mid">
                        <p class="text-xs font-semibold text-gray">Házigazda: Polyák Mátyás</p>
                        <h1 class="my-10 text-lg font-bold">Játék neve kerül ide</h1>
                        <p class="mb-5 text-xs font-semibold text-gray">Létrehozva: 2020.03.12 - 20:22</p>
                        <div class="flex items-center justify-between">
                            <img class="avatar avatar--xs" src="~@/assets/images/profil.jpg" alt="">
                            <img class="h-12 w-auto" src="~@/assets/images/next.svg" alt="">
                        </div>
                    </div>
                    <div class="w-1/3 mb-8 p-12 bg-white border border-solid border-white rounded-mid">
                        <p class="text-xs font-semibold text-gray">Házigazda: Polyák Mátyás</p>
                        <h1 class="my-10 text-lg font-bold">Játék neve kerül ide</h1>
                        <p class="mb-5 text-xs font-semibold text-gray">Létrehozva: 2020.03.12 - 20:22</p>
                        <div class="flex items-center justify-between">
                            <img class="avatar avatar--xs" src="~@/assets/images/profil.jpg" alt="">
                            <img class="h-12 w-auto" src="~@/assets/images/next.svg" alt="">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'

export default {
    components: {
        SideBar,
        NavBar
    },

    data() {
        return {
            switcher: false
        }
    },

}
</script>