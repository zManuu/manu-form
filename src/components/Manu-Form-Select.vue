<template>
    <div
        class="flex flex-col gap-2 overflow-y-scroll"
        :class="{ 'noscrollbar': !inputObj.scrollbar }"
        :style="`max-height: ${inputObj.maxHeight || 30}rem;`">
        <h1
            v-for="(selectOption, index) in inputObj.selectOptions"
            :key="index"
            @click="inputObj._val = selectOption"
            class="border-2 rounded text-center transition duration-300"
            :class="inputObj._val == selectOption ? 'bg-blue-500 border-blue-600' : 'bg-gray-700 border-gray-600'">
            {{ selectOption }}
        </h1>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        inputObj: { required: true, type: Object as PropType<IFormInput> }
    }
})
</script>
<style scoped>
.noscrollbar::-webkit-scrollbar {
    display: none;
}
.noscrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>