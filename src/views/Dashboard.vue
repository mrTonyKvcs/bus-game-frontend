<template>
    <div>
        <div class="dashboard">
            <div class="h-screen flex flex-col items-center justify-center p-10">
                <h1 class="text-4xl text-white">Hello Attila!</h1>
                <p class="text-white text-sm text-center py-10 font-medium break-all">Üdvözlünk a Buszos ivós játékban.<br> Mielőtt elkezdenél játszani, keress és jelöld be barátaidat, hogy tudj kivel játékot kezdeményezni.<br> Amennyiben már rendelkezel barátokkal, indíts új játékot!</p>
                <div class="flex justify-around md:justify-center w-full mt-2">
                    <button class="text-tiny text-white py-6 px-16 bg-redviolet rounded-max md:mr-16 outline-none">Játék indítása</button>
                    <button class="text-tiny text-white py-6 px-16 bg-purple-900 rounded-max outline-none">Barátok</button>
                </div>
            </div>
        </div>
        <div class="py-12 px-8">
            <div class="flex flex-col items-center">
                <h1 class="text-2xl text-black font-extrabold">Játék</h1>
                <p class="text-tiny text-gray-800 font-semibold mb-10">Utolsó játékaid statisztikái</p>
                <CardGameStat></CardGameStat>
            </div>
        </div>
        <div class="py-12 px-8">
            <div class="flex flex-col items-center">
                <h1 class="text-2xl text-black font-extrabold">Barátok</h1>
                <p class="text-tiny text-gray-800 font-semibold mb-10">Akikkel utoljára játszottál és azok statisztikái </p>
                <Friends></Friends>
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