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
                class="select-all border-2 px-2 py-1 rounded bg-gray-700 border-gray-600 outline-none" />
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
                v-tooltip="'Zurück'"
                @click="changePage(-1)" />
            <icon
                v-if="page < form.inputs.length - 1"
                class="outline-none"
                icon="arrow-down"
                v-tooltip="'Weiter'"
                @click="changePage(1)" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        form: { required: true, type: Object as PropType<IForm> },
        lang: { required: true, type: Object as PropType<ILanguage> },
    },
    data() {
        return {
            page: 0,
            values: [] as any[],
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
        }
    }
})
</script>