<template>
    <div class="bg-gray-800 border-gray-700 border-2 rounded p-3 text-white select-none flex flex-col gap-3 w-fit">
        <div class="flex justify-between items-center text-gray-400 text-sm">
            <div class="flex justify-center gap-2">
                <icon
                    v-if="page > 0"
                    class="outline-none hover:text-gray-100 transition duration-300 cursor-pointer hover:animate-pulse"
                    icon="arrow-left"
                    v-tooltip="lang.backTooltip"
                    @click="changePage(-1)" />
                <icon
                    v-if="page < form.inputs.length - 1"
                    class="outline-none hover:text-gray-100 transition duration-300 cursor-pointer hover:animate-pulse"
                    icon="arrow-right"
                    v-tooltip="lang.forwardTooltip"
                    @click="changePage(1)" />
            </div>
            <h1>
                {{ page + 1 }}/{{ form.inputs.length }}
            </h1>
        </div>
        <div class="flex flex-col gap-2 w-fit">
            <h1 class="text-xl font-semibold">
                {{ c().title }}
            </h1>
            <input
                v-if="c().inputType == 'text'"
                :maxlength="c().maxChars"
                :placeholder="getPlaceholder(c())"
                class="select-all border-2 px-2 py-1 rounded bg-gray-700 border-gray-600 outline-none"
                v-model="c()._val" />
            <input
                v-if="c().inputType == 'number'"
                :min="c().min"
                :max="c().max"
                :step="c().step"
                type="range"
                class="hover:animate-pulse cursor-pointer"
                v-model="c()._val"
                v-tooltip="c()._val" />
            <ManuFormCheckbox
                v-if="c().inputType == 'bool'"
                :state="c()._val"
                @toggle="c()._val = !c()._val" />
            <ManuFormSelect
                v-if="c().inputType == 'select'"
                :input-obj="c()" />
            <ManuFormDate
                v-if="c().inputType == 'date'"
                :input-obj="c()"
                :lang="lang" />
            <h1
                v-if="c().subtitle"
                :class="`${c().isSubtitleItalic ? 'italic' : 'not-italic'} text-${c().subtitleSize || 'base'}`">
                {{ c().subtitle }}
            </h1>
            <div
                v-if="page == form.inputs.length - 1"
                class="mt-10 text-center">
                <h1>{{ lang.lastInput }}</h1>
                <div class="flex flex-row gap-1">
                    <button
                        @click="reset"
                        class="bg-red-500 border-red-600 border-2 rounded px-2 py-1 hover:bg-red-600 hover:border-red-500 transition duration-300">
                        <icon icon="rotate-left" />
                        {{ lang.reset }}
                    </button>
                    <button
                        @click="confirm"
                        class="bg-green-500 border-green-600 border-2 rounded px-2 py-1 hover:bg-green-600 hover:border-green-500 transition duration-300">
                        <icon icon="check" />
                        {{ lang.confirm }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent, PropType } from 'vue'
import ManuFormCheckbox from './Manu-Form-Checkbox.vue'
import ManuFormSelect from './Manu-Form-Select.vue'
import ManuFormDate from './Manu-Form-Date.vue'
import { IForm, IFormInput, ILanguage } from '@/types'

export default defineComponent({
    components: { ManuFormCheckbox, ManuFormSelect, ManuFormDate },
    props: {
        form: { required: true, type: Object as PropType<IForm> },
        lang: { required: true, type: Object as PropType<ILanguage> },
    },
    data() {
        return {
            page: 0,
            error: undefined as string | undefined
        }
    },
    methods: {
        c(): IFormInput {
            return this.form.inputs[this.page]
        },
        changePage(val: number) {
            this.page += val
            if (this.page < 0)
                this.page = 0
            if (this.page >= this.form.inputs.length - 1)
                this.page = this.form.inputs.length - 1
        },
        getPlaceholder(input: IFormInput) {
            return typeof input.placeholder == 'undefined'
                ? undefined
                : typeof input.placeholder == 'string'
                    ? input.placeholder
                    : input.title
        },
        handleKeyUp(ev: KeyboardEvent) {
            if (!ev.ctrlKey) return
            if (ev.key === 'ArrowLeft')
                this.changePage(-1)
            else if (ev.key === 'ArrowRight')
                this.changePage(1)
        },
        reset() {
            for (const input of this.form.inputs) {
                delete input._val
            }
            this.page = 0
            this.$emit('reset')
        },
        confirm() {
            this.$emit('confirm')
        }
    },
    mounted() {
        window.addEventListener('keyup', this.handleKeyUp)
    }
})
</script>