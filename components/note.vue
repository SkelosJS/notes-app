<script>
export default {
    props: ['note']
}
</script>

<template>
    <div class="note text-white w-[95%] mx-auto">
        <div class="head bg-[#4D9258] w-full text-center py-2 text-xl font-bold montserrat rounded-t-2xl">
            <h2>{{ note.title }}</h2>
        </div>
        <div class="body lato relative border-l-2 border-r-2 border-b-2 border-solid border-white rounded-b-2xl p-3 text-lg">
            <p class="mb-5 break-all">{{ note.content }}</p>
            
            <div class="date lato absolute bottom-3 right-3">
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>