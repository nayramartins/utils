interface LoginFormInputErrors {
  patternMismatch: string
  valueMissing: string
  default: string
  tooShort: string
}

export const EMAIL_REGEX_PATTERN =
  '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'

export const INPUT_ERRORS: LoginFormInputErrors = {
  patternMismatch: 'Digite um endereço de e-mail válido.',
  valueMissing: 'Este é um campo obrigatório',
  tooShort:
    'O valor inserido não possui a quantidade mínima de caracteres necessários',
  default: 'O valor inserido não é válido',
}

export const LOGIN_FORM_INPUT_ERRORS = {
  email: {
    message: '',
    inputId: '',
  },
}

export interface InputErrorItem {
  message: string
  inputId: string
}
export interface InputError {
  email: InputErrorItem
}

export const inputErrorMessage = (event: any): string => {
  const {
    validity: { patternMismatch, valueMissing, valid, tooShort },
  } = event.target
  let message = ''

  if (patternMismatch) {
    message = INPUT_ERRORS.patternMismatch
  } else if (valueMissing) {
    message = INPUT_ERRORS.valueMissing
  } else if (tooShort) {
    message = INPUT_ERRORS.tooShort
  } else if (!valid) {
    message = INPUT_ERRORS.default
  }

  return message
}

// TODO: receive default object as param
export const validate = (
  e: any,
  inputError: InputError,
  setInputError: any
): void => {
  if (inputErrorMessage(e)) {
    setInputError({
      ...inputError,
      [e.target.id]: { message: inputErrorMessage(e), inputId: e.target.id },
    })
  } else {
    setInputError({
      ...inputError,
      [e.target.id]: { message: '', inputId: '' },
    })
  }
}

export const togglePasswordVisibility = (element: string): void => {
  const passwordInput = document.getElementById(element) as HTMLInputElement
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
}
