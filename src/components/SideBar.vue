<template>
    <div class="sidebar">
        <div class="h-64 mb-48 flex justify-center items-center ">
            <img src="~@/assets/images/logo.png" alt="">
        </div>
        <ul class="ml-20 flex flex-col">
            <a class="h-8 mb-24 flex items-center text-xl font-bold text-white " href="/Dashboard">
                <img class="icons--sidebar" src="~@/assets/images/dashboard.svg" alt="">
                <p>Áttekintés</p>
            </a>
            <a class="h-8 mb-24 flex items-center text-xl font-bold text-white" href="/Game">
                <img class="icons--sidebar" src="~@/assets/images/game.svg" alt="">
                <p>Játék</p>
            </a>
            <a class="h-8  mb-24 flex items-center text-xl font-bold text-white " href="/Friends">
                <img class="icons--sidebar" src="~@/assets/images/friend.svg" alt="">
                <p>Barátok</p>
            </a>
            <a class="h-8 mb-24 flex items-center text-xl font-bold text-white" href="">
                <img class="icons--sidebar" src="~@/assets/images/user.svg" alt="">
                <p>Profil</p>
            </a>
        </ul>
    </div>
</template>