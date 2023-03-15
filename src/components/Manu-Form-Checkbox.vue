<template>
    <div
        @click="toggle"
        class="w-8 h-8 rounded border-2 flex justify-center items-center transition duration-300 cursor-pointer"
        :class="state ? 'bg-blue-500 border-blue-600' : 'bg-gray-700 border-gray-600'">
        <icon
            v-if="state"
            class="animate-pulse"
            icon="check" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        state: { required: true, type: Boolean }
    },
    methods: {
        toggle() {
            this.$emit('toggle')
        }
    }
})
</script>