<template>
  <ManuForm
    :lang="lang"
    :form="form"
    @confirm="confirm"
    @reset="reset" />
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import ManuForm from './components/Manu-Form.vue'

const Lang: ILanguage = {
  backTooltip: 'Zurück (Strg + Pfeil links)',
  forwardTooltip: 'Weiter (Strg + Pfeil rechts)',
  day: 'Tag',
  month: 'Monat',
  year: 'Jahr',
  reset: 'Zurücksetzen',
  confirm: 'Bestätigen',
  lastInput: 'Du hast die letzte Frage erreicht.'
}

const Form: IForm = {
  name: 'Test-Form',
  inputs: [
    {
      title: 'Vorname',
      inputType: 'text',
      placeholder: true,
      maxChars: 20,
      isSubtitleItalic: true,
      subtitle: 'bis 20 Zeichen, a-Z'
    },
    {
      title: 'Nachname',
      inputType: 'text',
      placeholder: true,
      maxChars: 20,
      isSubtitleItalic: true,
      subtitle: 'bis 20 Zeichen, a-Z'
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
  },
  methods: {
    confirm() {
      console.log(`The form was confirmed with following values: ${JSON.stringify(this.form)}`)
    },
    reset() {
      console.log('The form was reset.')
    }
  }
})
</script>