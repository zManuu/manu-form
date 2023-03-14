interface IFormInput {
    // you must set these values
    title: string
    inputType: 'text' | 'number' | 'date' | 'bool' | 'select'

    // will store the value selected
    _val?: any
    
    // subtitle options
    subtitle?: string
    isSubtitleItalic?: boolean
    subtitleSize?: 'xs' | 'sm' | 'base' | 'xl'
    
    // select options
    selectOptions?: string[]
    maxHeight?: number, // rem, defaults to 30
    scrollbar?: boolean
    
    // text options
    maxChars?: number
    placeholder?: string | true // true => use title as placeholder
    
    // number options
    min?: number
    max?: number
    step?: number
}

interface IForm {
    name: string
    inputs: IFormInput[]
}

interface ILanguage {
    backTooltip: string
    forwardTooltip: string
    day: string,
    month: string,
    year: string,
    reset: string,
    confirm: string,
    lastInput: string
}