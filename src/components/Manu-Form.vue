<template>
    <div class="bg-gray-800 border-gray-700 border-2 rounded p-3 text-white select-none flex gap-3 w-fit">
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
                v-model="c()._val"
                v-tooltip="c()._val" />
            <ManuFormCheckbox
                v-if="c().inputType == 'bool'"
                :state="c()._val"
                @toggle="c()._val = !c()._val" />
            <h1
                v-if="c().subtitle"
                :class="`${c().isSubtitleItalic ? 'italic' : 'not-italic'} text-${c().subtitleSize || 'base'}`">
                {{ c().subtitle }}
            </h1>
        </div>
        <div class="flex flex-col justify-center gap-2">
            <icon
                v-if="page > 0"
                class="outline-none"
                icon="arrow-up"
                v-tooltip="lang.backTooltip"
                @click="changePage(-1)" />
            <icon
                v-if="page < form.inputs.length - 1"
                class="outline-none"
                icon="arrow-down"
                v-tooltip="lang.forwardTooltip"
                @click="changePage(1)" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ManuFormCheckbox from './Manu-Form-Checkbox.vue'

export default defineComponent({
    components: { ManuFormCheckbox },
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
            console.log(ev)
            if (ev.key === 'ArrowUp')
                this.changePage(-1)
            else if (ev.key === 'ArrowDown')
                this.changePage(1)
        }
    },
    mounted() {
        window.addEventListener('keyup', this.handleKeyUp)
    }
})
</script>