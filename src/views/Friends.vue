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
                    <h1>Barátok</h1>
                    <p class="text-xl font-semibold leading-9">Keress új barátokat és hívd be Őket játszani!</p>
                </div>
                <div class="w-1/5 flex items-center ">
                    <a href=""><img class="avatar avatar--sm" v-bind:src="profilePicture" alt=""></a>
                    <a class="h-20 ml-4 pr-8 flex items-center text-sm font-bold border-r border-solid border-white" href=""><h2>{{ username }}</h2></a>
                    <a class="icons--nav" href=""><img class="" src="~@/assets/images/bell.svg" alt=""></a>
                    <a class="icons--nav" href="/login"><img class="" src="~@/assets/images/logout.svg" alt=""></a>
                </div>
            </div>
            <div class="card__bg">
                <div class="">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="title">Közeli barátok</h1>
                            <p class="description">Akikkel a legtöbbet játszol nap mint nap.</p>
                        </div>
                        <div class="relative h-16 w-1/5 flex justify-end">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <img class="h-6 w-auto fill-current pl-10 pr-6" src="~@/assets/images/searchrv.svg" alt="">
                            </div>
                            <input class=" w-full py-4 pl-20 pr-6 text-xs bg-white placeholder-pink-800 border border-solid border-darkmagenta rounded-max outline-none" type="text" placeholder="search">
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="relative w-1/4 mt-32 pt-8 px-10 pb-10 bg-white rounded-mid">
                        <img class="absolute avatar avatar--xl avatar--absolute" src="~@/assets/images/profil.jpg" alt="">
                        <div class="mb-24 pr-6 flex justify-end">
                            <img class="h-8 w-5" src="~@/assets/images/bin.svg" alt="">
                        </div>
                        <div class="flex justify-between items-end mb-12">
                            <div>
                                <h1 class="text-lg font-extrabold">Kovács Emese</h1>
                                <div class="flex items-center">
                                    <img class="h-auto w-4" src="~@/assets/images/status.svg" alt="">
                                    <p class="ml-3 text-xs text-gray font-semibold">Online</p>
                                </div>
                            </div>
                            <div>
                                <img class="h-20 w-16 mr-16" src="~@/assets/images/bar-chart.svg" alt="">
                            </div>
                        </div>
                        <div class="bg-vlightgray p-6 rounded-mid flex">
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div>
                            <div class="flex flex-col items-start justify-center pr-6 mr-8 border-r-2 border-solid border-lightgray">
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p>
                            </div>
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div> 
                            <div>
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p> 
                            </div>
                        </div>
                        <div class="flex justify-center mt-10 mb">
                            <button class="btn text-tiny py-4 px-12">Játékra felkérés</button>
                        </div>
                    </div>
                    <div class="relative w-1/4 mt-32 pt-8 px-10 pb-10 bg-white rounded-mid">
                        <img class="absolute avatar avatar--xl avatar--absolute" src="~@/assets/images/profil.jpg" alt="">
                        <div class="mb-24 pr-6 flex justify-end">
                            <img class="h-8 w-5" src="~@/assets/images/bin.svg" alt="">
                        </div>
                        <div class="flex justify-between items-end mb-12">
                            <div>
                                <h1 class="text-lg font-extrabold">Kovács Emese</h1>
                                <div class="flex items-center">
                                    <img class="h-auto w-4" src="~@/assets/images/status.svg" alt="">
                                    <p class="ml-3 text-xs text-gray font-semibold">Online</p>
                                </div>
                            </div>
                            <div>
                                <img class="h-20 w-16 mr-16" src="~@/assets/images/bar-chart.svg" alt="">
                            </div>
                        </div>
                        <div class="bg-vlightgray p-6 rounded-mid flex">
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div>
                            <div class="flex flex-col items-start justify-center pr-6 mr-8 border-r-2 border-solid border-lightgray">
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p>
                            </div>
                            <div class="bg-white rounded-full p-5 mr-4">
                                <img class="h-10 w-10" src="~@/assets/images/gamer.svg" alt="">
                            </div> 
                            <div>
                                <h1 class="text-lg font-bold">13</h1>
                                <p class="text-xs text-gray">Közös játék</p> 
                            </div>
                        </div>
                        <div class="flex justify-center mt-10 mb">
                            <button class="btn text-tiny py-4 px-12">Játékra felkérés</button>
                        </div>
                    </div>
                </div>
                <div class="mt-20 flex">
                    <div class="w-1/2">
                        <h1 class="title">Kit ismerhetek?</h1>
                        <div>
                            <div class="flex flex-col items-center w-56 mt-6">
                                <div>
                                    <img class="avatar avatar--xl" src="~@/assets/images/profil.jpg" alt="">
                                </div>
                                <div class="mt-6 mb-2 flex items-center">
                                    <h1 class="text-tiny font-bold">Kovács Attila</h1>
                                </div>
                                <p class="text-sm font-medium">Buszra szállás: 6</p>
                                <p class="pb-6 text-sm font-medium">Játék: 12</p>
                                <button class="py-2 px-8 bg-blue text-white text-tiny font-semibold rounded-full">Jelölés</button>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <h1 class="title">Meghívó küldése</h1>
                        <div class="bg-white w-full py-8 pl-8 rounded-mid">
                            <div class="relative h-16 w-2/5 flex justify-end">
                                <input class=" w-full pl-6 pr-6 text-xs bg-white border border-solid border-lightgray rounded-max outline-none" type="text" placeholder="E-mail cím">
                                <div class="pr-6 absolute inset-y-0 flex items-center">
                                    <img class="h-6 w-10 fill-current " src="~@/assets/images/email.svg" alt="">
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>