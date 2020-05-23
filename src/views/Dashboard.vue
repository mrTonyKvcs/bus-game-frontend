<template>
    <div class="pb-8">
        <div class="xl:bg-dwhite xl:p-20 xl:rounded-xl">
            
            <div class="dashboard xl:hidden">
                <div class="flex flex-col h-screen items-center justify-center p-10">
                    <h1 class="text-4xl text-white">Hello Attila!</h1>
                    <p class="break-all font-medium text-center text-sm text-white py-10 ">Üdvözlünk a Buszos ivós játékban.<br> Mielőtt elkezdenél játszani, keress és jelöld be barátaidat, hogy tudj kivel játékot kezdeményezni.<br> Amennyiben már rendelkezel barátokkal, indíts új játékot!</p>
                    <div class="flex justify-around md:justify-center mt-2 w-full ">
                        <button class="bg-redviolet md:mr-16 outline-none text-tiny text-white  px-16 py-6  rounded-max">Játék indítása</button>
                        <button class="bg-purple-900 outline-none text-tiny text-white px-16 py-6 rounded-max">Barátok</button>
                    </div>
                </div>
            </div>

            <div class="sm:hidden md:hidden lg:hidden xl:flex bg-white h-welcomecard rounded-xl flex">
                <div class="w-1/2">
                    <img class="h-welcomecard rounded-l-xl w-full" src="~@/assets/images/13494.jpg" alt="">
                </div>
                <div class="w-1/2 p-6">
                   <h1 class="font-semibold pt-10 text-4xl">Hello Attila!</h1>
                    <p class="leading-10 mt-6 text-xl">Üdvözlünk a Buszos ivós játékban. Mielőtt elkezdenél játszani, keress és jelöld be barátaidat, hogy tudj kivel játékot kezdeményezni. Amennyiben már rendelkezel barátokkal, indíts új játékot!</p>
                    <div class="flex mt-16 mb-20">
                        <button class="bg-redviolet leading-7 md:mr-16 outline-none text-tiny text-white  px-16 py-6  rounded-max">Játék indítása</button>
                        <button class="bg-purple-900 leading-7 outline-none text-tiny text-white px-16 py-6 rounded-max">Barátok</button>
                    </div> 
                </div>
            </div>
            
            <div class="px-8 py-12 xl:mt-28 xl:px-0">
                <div class="flex flex-col items-center xl:items-start">
                    <h1 class="font-extrabold text-2xl text-black">Játék</h1>
                    <p class="font-semibold mb-10 text-tiny text-gray-800">Utolsó játékaid statisztikái</p>
                    <CardGameStat></CardGameStat>
                </div>
            </div>
            <div class="px-8 py-12 xl:mt-24 xl:px-0">
                <div class="flex flex-col items-center xl:items-start">
                    <h1 class="font-extrabold text-2xl text-black">Barátok</h1>
                    <p class="font-semibold mb-10 text-tiny text-gray-800">Akikkel utoljára játszottál és azok statisztikái </p>
                    <Friends></Friends>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardGameStat from '@/components/CardGameStat'
import Friends from '@/components/Friends'

export default {
    components: {
        CardGameStat,
        Friends
    }
}
</script>