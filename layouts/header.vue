<script>
export default {
    setup() {
        const noteStore = useNotesStore();

        const { getTitle: title } = storeToRefs(noteStore);
        const { getContent: content } = storeToRefs(noteStore);

        return { noteStore, title, content }
    },
    data() {
        return {
            notes: 0,
            showSortModal: false,
            date: new Date().toLocaleString('en-EN', { timeZone: 'UTC' })
        }
    },
    mounted() {
        this.notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')).length : 0;
    },
    updated() {
        this.notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')).length : 0;
    },
    methods: {
        handleSortModal(show) {
            this.showSortModal = show;
        },
        saveNote() {
            const localNotes = JSON.parse(localStorage.getItem('notes'));
            let newNote = {
                title: this.title,
                content: this.content,
                date: this.date
            }

            if(this.$route.name === 'add-note') {
                if(!localNotes) {
                    localStorage.setItem('notes', JSON.stringify([newNote]));
                } else {
                    localNotes.push(newNote);
                    localStorage.setItem('notes', JSON.stringify(localNotes));
                }
    
                return this.$router.push({ path: '/' });
            } else if(this.$route.name === 'update-note') {
                localNotes[this.$route.query['idx']] = newNote;
                localStorage.setItem('notes', JSON.stringify(localNotes));
                
                return this.$router.push({ path: '/' });
            }
        }
    }
}
</script>

<template>
    <div class="header p-5 flex gap-5 justify-between w-full lato">
        <div class="title">
            <h1 class="montserrat font-bold text-white text-3xl">MyNotes</h1>
            <span v-if="$route.name !== 'add-note' && $route.name !== 'update-note'" id="notes" class="text-[#CCC]">{{ notes }} {{ notes > 1 ? 'notes' : 'note' }}</span>
        </div>
        <div v-if="$route.name !== 'add-note' && $route.name !== 'update-note'" class="utils flex flex-col items-end gap-2">
            <form id="search-bar" class="flex relative">
                <input type="search" class="bg-[transparent] border-2 border-solid border-white rounded p-2 text-white w-full lato" id="search" name="search" placeholder="Search..." />
                <button class="submit absolute right-0 top-0 h-[43px] w-[43px] bg-[#FFF] rounded">
                    <font-awesome-icon icon="magnifying-glass" />
                </button>
            </form>
            <button class="sort text-[#CCC] lato" @click="() => showSortModal ? handleSortModal(false) : handleSortModal(true)">
                Sort by
                <font-awesome-icon :icon="['fas', 'arrow-up-wide-short']" />
            </button>
        </div>
        <NuxtLink v-else-if="content.length === 0" to="/" class="text-[#1E90FF] text-xl">Go back</NuxtLink>
        <NuxtLink v-else to="#" class="text-[#1E90FF] text-xl" @click="saveNote">Save</NuxtLink>
        
    </div>
    <div v-if="$route.name === 'add-note' || $route.name === 'update-note'" class="info-bar lato text-[#CCCCCC] w-full px-5 pb-2 text-lg flex items-center justify-between relative border-b-2 border-solid border-[#CCC]">
        <span>{{ content.length > 0 ? content.split(" ").length : 0 }} {{ content.length > 1 ? "words" : "word" }}</span>
        <span class="absolute left-[50%] translate-x-[-50%]">{{ date }}</span>
    </div>
    <SortModal v-if="showSortModal" @handleSortModal="handleSortModal" />
    <slot />
</template>