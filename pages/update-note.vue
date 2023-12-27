<script>
export default {
    setup() {
        const noteStore = useNotesStore();
        
        const { getTitle: title } = storeToRefs(noteStore);
        const { getContent: content } = storeToRefs(noteStore);

        return { noteStore, title, content }
    },
    mounted() {
        let note = JSON.parse(localStorage.getItem('notes'))[this.$route.query['idx']];
        this.noteStore.setNote(note);
    }
}
</script>

<template>
    <div class="container-full lato text-white text-center mt-5">
        <form>
            <input type="text" placeholder="Title" class="bg-[transparent] border-b-2 border-solid border-white p-3 text-xl w-[95%]" v-model="noteStore.title" />
            <textarea name="content" placeholder="content" id="content" class="p-3 lato w-[95%] mt-3 bg-[transparent] text-xl resize-y h-screen" v-model="noteStore.content"></textarea>
        </form>
    </div>
</template>