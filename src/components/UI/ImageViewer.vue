<template>
    <div class="flex">
        <img :src="src" @click="dialog = true" class="w-full h-full" />

        <v-dialog v-model="dialog">
            <template v-slot:default="{ isActive }">
                <div class="flex flex-col justify-center items-center w-[100%] lg:w-[50%] mx-auto">
                    <div class="flex jus w-full pb-2">
                        <button  @click="isActive.value = false" class="group flex justify-center items-center h-8 w-8 bg-black ring-1 ring-white rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor" class="h-4 w-4 group-hover:scale-125 transition-transform duration-200">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>

                    <img loading="lazy" :src="src" class="rounded-sm" />
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

