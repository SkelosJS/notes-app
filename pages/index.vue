<script>
export default {
    data() {
        return {
            notes: [],
            isLoading: true
        }
    },
    mounted() {
        this.notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
        this.isLoading = false;
    },
    methods: {
        goTo(path) {
            return window.location = path;
        }
    }
}
</script>

<template>
    <div class="container-full">
        <div v-if="isLoading" class="loader lato text-white text-center p-3 bg-[#191919] h-[100px] flex justify-center items-center text-xl">
            <span>Loading...</span>
        </div>

        <div v-else-if="notes.length > 0" class="notes flex flex-col items-center gap-5">
            <Note v-for="(note, i) in notes" :note="note" :key="i" @click="$router.push({ path: '/update-note', query: { idx: i }})"/>
        </div>
        <span v-else class="empty lato text-[#CCC]">
            * No notes
        </span>
        
        <button id="add-note" class="text-white lato w-[75px] h-[75px] bg-[#4D9258] rounded-full text-3xl fixed bottom-[10%] right-[5%]" @click="goTo('/add-note')">
            <font-awesome-icon icon="plus" />
        </button>
    </div>
</template>