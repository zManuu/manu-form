interface IFormInput {
    title: string
    inputType: 'text' | 'number' | 'date' | 'bool' | 'select'
    validate?: (value: string) => [true | string] // custom validation (look at the example)
    
    // subtitle options
    subtitle?: string
    isSubtitleItalic?: boolean
    subtitleSize?: 'xs' | 'sm' | 'base' | 'xl'

    // select options
    selectOptions?: string[]

    // text options
    maxChars?: number
    placeholder?: string | true // true => use title as placeholder

    // number options
    min?: number
    max?: number
}

interface IForm {
    name: string
    inputs: IFormInput[]
}

interface ILanguage {
    backTooltip: string
    forwardTooltip: string
}