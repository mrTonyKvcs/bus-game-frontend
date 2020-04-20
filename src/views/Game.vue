<template>
    <div class="page">
        <div class="sidebar">
            <div class="h-64 mb-48 flex justify-center items-center ">
                <img src="~@/assets/images/logo.png" alt="">
            </div>
            <ul class="ml-20 flex flex-col">
                <a class="h-8 mb-24 flex items-center text-xl font-bold text-white" href="/Dashboard">
                    <img class="icons--sidebar" src="~@/assets/images/index.svg" alt="">
                    <p>Áttekintés</p>
                </a>
                <a class="h-8 mb-24 flex items-center text-xl font-bold text-white" href="">
                    <img class="icons--sidebar" src="~@/assets/images/game.svg" alt="">
                    <p>Játék</p>
                </a>
                <a class="h-8  mb-24 flex items-center text-xl font-bold text-white " href="">
                    <img class="icons--sidebar" src="~@/assets/images/friend.svg" alt="">
                    <p>Barátok</p>
                </a>
                <a class="h-8 mb-24 flex items-center text-xl font-bold text-white" href="">
                    <img class="icons--sidebar" src="~@/assets/images/user.svg" alt="">
                    <p>Profil</p>
                </a>
            </ul>
        </div>
        <div class="row">
            <div class="mt-24 mr-20 mb-10 ml-16 flex justify-between text-white">
                <div class="text-3xl font-extrabold">
                    <h1>Játék</h1>
                    <p class="text-xl font-semibold leading-9">Hívd be ismerőseid és indíts játékot</p>
                </div>
                <div class="w-1/5 flex items-center ">
                    <a href=""><img class="avatar avatar--sm" v-bind:src="profilePicture" alt=""></a>
                    <a class="h-20 ml-4 pr-8 flex items-center text-sm font-bold border-r border-solid border-white" href=""><h2>{{ username }}</h2></a>
                    <a class="icons--nav" href=""><img class="" src="~@/assets/images/bell.svg" alt=""></a>
                    <a class="icons--nav" href="/login"><img class="" src="~@/assets/images/logout.svg" alt=""></a>
                </div>
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
                                    <input class="game__checkbox" type="checkbox" value="0">
                                </div>
                                <p class="description">Állítsd be milyen gyakran igyon minden játékos egy felest!</p>
                                <div class="pt-10 pb-24 flex justify-between">
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
export default {
    created () {
        console.log(this.firstName)
    },
    computed: {
        username() {
            return this.$store.state.user.user.name
        },
        firstName() {
            let name = this.username.split(" ")
            return name[0]
        },
        profilePicture() {
            const id = this.$store.state.user.user.id 
            return `/images/${id}.jpg`
        }
    }
}
</script>