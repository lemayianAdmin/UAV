<template>
    <div class="flex">
        <video :src="src" controls @click="dialog = true" class="w-full h-full rounded-sm"></video>

        <v-dialog v-model="dialog">
            <template v-slot:default="{ isActive }">
                <div class="flex flex-col justify-center items-center w-[100%] lg:w-[50%] mx-auto">
                    <div class="flex jus w-full pb-2">
                        <button  @click="isActive.value = false" class="flex justify-center items-center h-8 w-8 bg-black ring-1 ring-white rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor" class="h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>

                    <video class="rounded-sm" :src="src" controls></video>
                </div>
            </template>
        </v-dialog>

    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },

    },
    data() {
        return {
            dialog: false
        };
    }
};
</script>