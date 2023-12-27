import { defineStore } from "pinia";

export const useNotesStore = defineStore('notes', {
    state: () => {
        return {
            title: '',
            content: ''
        }
    },
    actions: {
        setNote(note) {
            this.title = note.title;
            this.content = note.content;
        }
    },
    getters: {
        getContent: (state) => {
            return state.content;
        },
        getTitle: (state) => {
            return state.title;
        }
    }
});