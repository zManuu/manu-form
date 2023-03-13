<template>
  <ManuForm
    :lang="lang"
    :form="form" />
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import ManuForm from './Manu-Form.vue'

const Lang: ILanguage = {
  backTooltip: 'Zurück (Strg + Pfeil hoch)',
  forwardTooltip: 'Weiter (Strg + Pfeil runter)'
}

const Form: IForm = {
  name: 'Test-Form',
  inputs: [
    {
      inputType: 'text',
      title: 'Vorname',
      placeholder: true,
      maxChars: 10,
      isSubtitleItalic: true,
      subtitle: '5-20 Zeichen, A-Z'
    },
    {
      inputType: 'text',
      placeholder: true,
      isSubtitleItalic: true,
      title: 'Nachname',
      subtitle: '5-20 Zeichen, A-Z'
    },
    {
      inputType: 'date',
      title: 'Geburtstag'
    }
  ]
}

export default defineComponent({
  components: { ManuForm },
  data() {
    return {
      lang: Lang,
      form: Form
    }
  }
})
</script>