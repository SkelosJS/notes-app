<template>
    <div class="sort-modal fixed top-5 right-5 bg-[#191919] w-[50%] rounded-xl text-white z-[1] lato">
        <h2 class="font-semibold text-xl p-3">Sort By</h2>
        <ul class="text-center text-lg font-semibold">
            <li class="p-3 transition-colors hover:bg-[#CCCCCC] hover:text-[#191919]">Recently</li>
            <li class="p-3 transition-colors hover:bg-[#CCCCCC] hover:text-[#191919] rounded-b-xl">Older</li>
        </ul>

        <button class="close-modal absolute top-3 right-3 text-2xl" @click="() => $emit('handleSortModal', false)">
            <font-awesome-icon icon="xmark" />
        </button>
    </div>
</template>

<style scoped>
.sort-modal {
    animation: fadeInModal .3s ease-in-out;
}

@keyframes fadeInModal {
    from {
        top: 0;
        opacity: 0;
    }

    to {
        top: 5;
        opacity: 1;
    }
}
</style>