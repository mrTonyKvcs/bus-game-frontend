<template>
    <div class="flex justify-between p-8 bg-purple-900 relative">
        <div class="sidebar__title">
            <a>Bus <span class="text-redviolet">Game</span></a>
        </div>
        <MobileSidebar></MobileSidebar>
    </div>
</template>

<script>
import MobileSidebar from '@/components/MobileSidebar'

export default {
    components: {
        MobileSidebar
    },
}
</script>