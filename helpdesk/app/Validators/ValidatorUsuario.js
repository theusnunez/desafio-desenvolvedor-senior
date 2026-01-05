'use strict'

class ValidatorUsuario {
  get rules () {
    return {
      nome: 'required|string|min:3',
      login: 'required|alpha_numeric|unique:usuarios,login',
      email: 'required|email',
      funcao: 'required|in:A,O,M'
    }
  }

  get messages () {
    return {
      'nome.required': 'The name field is required',
      'nome.min': 'The name must have at least 3 characters',
      'login.required': 'The login field is required and should follow name.surname',
      'login.alpha_numeric': 'The login may contain only letters and numbers',
      'login.unique': 'This login is already in use',
      'email.required': 'The email field is required',
      'email.email': 'The email field must be a valid email address',
      'funcao.required': 'The role field is required',
      'funcao.in': 'Invalid role'
    }
  }

  async fails (errorMessages) {
    this.ctx.session.withErrors(errorMessages).flashAll()
    return this.ctx.response.redirect('back')
  }
}

module.exports = ValidatorUsuario
