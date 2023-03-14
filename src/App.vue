<template>
  <ManuForm
    :lang="lang"
    :form="form" />
  {{ form }}
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import ManuForm from './components/Manu-Form.vue'

const Lang: ILanguage = {
  backTooltip: 'Zurück (Strg + Pfeil links)',
  forwardTooltip: 'Weiter (Strg + Pfeil rechts)',
  day: 'Tag',
  month: 'Monat',
  year: 'Jahr'
}

const Form: IForm = {
  name: 'Test-Form',
  inputs: [
    {
      title: 'Vorname',
      inputType: 'text',
      placeholder: true,
      maxChars: 10,
      isSubtitleItalic: true,
      subtitle: '5-20 Zeichen, A-Z'
    },
    {
      title: 'Nachname',
      inputType: 'text',
      placeholder: true,
      isSubtitleItalic: true,
      subtitle: '5-20 Zeichen, A-Z'
    },
    {
      title: 'Geburtstag',
      inputType: 'date'
    },
    {
      title: 'Mischung Vater / Mutter',
      inputType: 'number',
      step: 0.05,
      min: 0,
      max: 1,
      subtitle: '0: Vater, 1: Mutter',
      isSubtitleItalic: true
    },
    {
      title: 'Zufälliges Aussehen',
      inputType: 'bool',
    },
    {
      title: 'Geschlecht',
      inputType: 'select',
      selectOptions: ['Männlich', 'Weiblich']
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