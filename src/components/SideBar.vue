<template>
    <div class="sidebar">
        <div class="h-64 mb-48 flex justify-center items-center ">
            <img src="~@/assets/images/logo.png" alt="">
        </div>
        <ul class="ml-20 flex flex-col">
            <router-link to="/dashboard"><a class="h-8 mb-24 flex items-center text-xl font-bold text-white ">
                <img class="icons--sidebar" src="~@/assets/images/dashboard.svg" alt="">
                <p>Áttekintés</p>
            </a></router-link>
            <router-link to="/game"><a class="h-8 mb-24 flex items-center text-xl font-bold text-white">
                <img class="icons--sidebar" src="~@/assets/images/game.svg" alt="">
                <p>Játék</p>
            </a></router-link>
            <router-link to="/friends"><a class="h-8  mb-24 flex items-center text-xl font-bold text-white">
                <img class="icons--sidebar" src="~@/assets/images/friend.svg" alt="">
                <p>Barátok</p>
            </a></router-link>
            <router-link to="/profile"><a class="h-8 mb-24 flex items-center text-xl font-bold text-white" href="">
                <img class="icons--sidebar" src="~@/assets/images/user.svg" alt="">
                <p>Profil</p>
            </a></router-link>
        </ul>
    </div>
</template>