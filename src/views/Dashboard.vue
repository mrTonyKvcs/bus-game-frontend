<template>
    <div class="page">
        <div class="sidebar">
            <div class="h-64 mb-48 flex justify-center items-center ">
                <img src="~@/assets/images/logo.png" alt="">
            </div>
            <ul class="ml-20 flex flex-col">
                <a class="h-8 mb-24 flex items-center text-xl font-bold text-white" href="">
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
                    <h1>Áttekintés</h1>
                    <p class="text-xl font-semibold leading-9">Indíts játékot, kezeld ismerőseid, csatlakozz másokhoz! </p>
                </div>
                <div class="w-1/5 flex items-center ">
                    <a href=""><img class="avatar avatar--sm" :src="profilePicture" alt=""></a>
                    <a class="h-20 ml-4 pr-8 flex items-center text-sm font-bold border-r border-solid border-white" href=""><h2>{{ username }}</h2></a>
                    <a class="icons--nav" href=""><img class="" src="~@/assets/images/bell.svg" alt=""></a>
                    <a class="icons--nav" href="/login"><img class="" src="~@/assets/images/logout.svg" alt=""></a>
                </div>
            </div>
            <div class="card__bg">
                <div class="card__welcome">
                    <div class="w-1/2">
                        <img class="rounded-l-max" src="~@/assets/images/index-card.jpg" alt="">
                    </div>
                    <div class="w-1/2 ml-20 flex flex-col justify-center ">
                        <h1 class="mb-10 text-4xl font-semibold">Hello {{ firstName }}!</h1>
                        <p class="mb-16 text-xl font-medium">Üdvözlünk a Buszos ivós játékban. Mielőtt elkezdenél játszani, keress és jelöld be barátaidat, hogy tudj kivel játékot kezdeményezni. Amennyiben már rendelkezel barátokkal, indíts új játékot!</p>
                        <div>
                            <button class="btn mr-10">Játék indítása</button>
                            <button class="btn btn--white">Barátok</button>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-3/4"> 
                        <div class="">
                            <h1 class="title">Játék</h1>
                            <h2 class="description pb-6">Utolsó játékaid statisztikái</h2>
                            <div class="flex">
                                <div class="card mr-10 py-8 px-10 flex flex-col justify-between text-white text-xs font-semibold">
                                    <div class="flex justify-between">
                                        <p>2020.02.21 // 20:34 - 22:54</p>
                                        <img class="avatar avatar--xs" src="~@/assets/images/profil.jpg" alt="">
                                    </div>
                                    <h1 class="text-lg">Játék neve ide kerül </h1>
                                    <div class="flex justify-between">
                                        <div>
                                            <p>Buszra szállásaid</p>
                                            <p>3x</p>
                                        </div>
                                        <div>
                                            <p>Megivott kortyaid</p>
                                            <p>21</p>
                                        </div>
                                        <div>
                                            <p>Nyertes</p>
                                            <p>Polyák Mátyás</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mr-10 py-8 px-10 flex flex-col justify-between text-white text-xs font-semibold">
                                    <div class="flex justify-between">
                                        <p>2020.02.21 // 20:34 - 22:54</p>
                                        <img class="avatar avatar--xs" src="~@/assets/images/profil.jpg" alt="">
                                    </div>
                                    <h1 class="text-lg">Játék neve ide kerül </h1>
                                    <div class="flex justify-between">
                                        <div>
                                            <p>Buszra szállásaid</p>
                                            <p>3x</p>
                                        </div>
                                        <div>
                                            <p>Megivott kortyaid</p>
                                            <p>21</p>
                                        </div>
                                        <div>
                                            <p>Nyertes</p>
                                            <p>Polyák Mátyás</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-24">
                            <h1 class="title">Barátok</h1>
                            <h2 class="description">Akikkel utoljára játszottál és azok statisztikái</h2>
                            <div class="flex flex-col items-center w-56 mt-6">
                                <img class="avatar avatar--xl" src="~@/assets/images/profil.jpg" alt="">
                                <img class="icons--status" src="~@/assets/images/status.svg" alt="">
                                <h1 class="mt-6 mb-2 text-sm font-bold">Kovács Attila</h1>
                                <p class="text-sm font-medium">Buszra szállás: 6</p>
                                <p class="text-sm font-medium">Játék: 12</p>
                            </div>
                        </div>
                        <div class="mt-24">
                            <h1 class="title">Meghívó küldése</h1>
                            <h2 class="description">Küldj meghívót barátaidnak e-mailben és játszatok együtt a játékot! </h2>
                            
                        </div>
                    </div>
                    <div class="card__chat">
                        <h1 class="text-2xl font-extrabold">Üzenőfal</h1>
                        <div class="flex mt-8">
                            <img class="avatar avatar--md" src="~@/assets/images/profil.jpg" alt="">
                            <div class="w-full ml-6 px-6 flex items-center justify-between rounded-max border-2 border-solid border-vlightgray">
                                <input class="w-full outline-none text-sm rounded-max" type="text" placeholder="Mi jár a fejedben?">
                                <a href=""><img class="icons--send" src="~@/assets/images/send.svg" alt=""></a>
                            </div>
                        </div>
                        <div class="mt-12 flex">
                            <img class="avatar avatar--md mr-6" src="~@/assets/images/profil.jpg" alt="">
                            <div>
                                <h2 class="text-tiny .font-medium">Savannah Miles</h2>
                                <h3 class="text-sm text-lightgray">2020.04.11 - 22:45</h3>
                                <p class="text-xl text-vdgray ">Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.</p>
                            </div>
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