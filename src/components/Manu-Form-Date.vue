<template>
    <div class="flex flex-row justify-center gap-2 items-center">
        <icon
            icon="calendar"
            :class="{ 'text-red-500 animate-pulse': !isValid }" />
        <div class="flex flex-row gap-1 items-end">
            <input
                v-model="i_day"
                :placeholder="lang.day"
                class="select-all border-2 px-2 py-1 rounded bg-gray-700 border-gray-600 outline-none w-20 text-center" />
            <h1>.</h1>
            <input
                v-model="i_month"
                :placeholder="lang.month"
                class="select-all border-2 px-2 py-1 rounded bg-gray-700 border-gray-600 outline-none w-20 text-center" />
            <h1>.</h1>
            <input
                v-model="i_year"
                :placeholder="lang.year"
                class="select-all border-2 px-2 py-1 rounded bg-gray-700 border-gray-600 outline-none w-20 text-center" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        inputObj: { required: true, type: Object as PropType<IFormInput> },
        lang: { required: true, type: Object as PropType<ILanguage> },
    },
    data() {
        return {
            i_day: undefined as string | undefined,
            i_month: undefined as string | undefined,
            i_year: undefined as string | undefined,
            isValid: false
        }
    },
    methods: {
        check() {
            const isInt = (val: string) =>  /^\d+$/.test(val)

            if (!this.i_day
                || !this.i_month
                || !this.i_year
                || !isInt(this.i_day)
                || !isInt(this.i_month)
                || !isInt(this.i_year)) {
                this.isValid = false
                return
            }

            const day = parseInt(this.i_day)
            const month = parseInt(this.i_month)
            const year = parseInt(this.i_year)

            if (day < 1
                || day > 31
                || month < 1
                || month > 12) {
                this.isValid = false
                return
            }

            this.isValid = true
            this.inputObj._val = `${day}.${month}.${year}`
        }
    },
    watch: {
        i_day() { this.check() },
        i_month() { this.check() },
        i_year() { this.check() }
    }
})
</script>