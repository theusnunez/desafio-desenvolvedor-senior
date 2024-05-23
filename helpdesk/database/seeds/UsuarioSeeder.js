'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const bcrypt = require('bcryptjs');

class UsuarioSeeder {
  async run () {
    await Database
      .table('usuarios')
      .insert({
        id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        nome: 'Master Administrator',
        login: 'admin',
        senha: bcrypt.hashSync('admin'),
        email: 'administrator@mirana.fake',
        funcao: 'A',
        ramal: '1111',
        receberEmail: true
      })

    await Database
      .table('usuarios')
      .insert({
        id: 2,
        created_at: '2018-05-01 00:00:01',
        updated_at: '2018-05-01 00:00:01',
        nome: 'Efficient Operator',
        login: 'operator',
        senha: bcrypt.hashSync('operator'),
        email: 'operator@mirana.fake',
        funcao: 'O',
        ramal: '2222',
        receberEmail: true
      })

    await Database
      .table('usuarios')
      .insert({
        id: 3,
        created_at: '2018-05-01 00:00:02',
        updated_at: '2018-05-01 00:00:02',
        nome: 'Common User',
        login: 'user',
        senha: bcrypt.hashSync('user'),
        email: 'user@mirana.fake',
        funcao: 'M',
        ramal: '3333',
        receberEmail: true
      })
  }
}

module.exports = UsuarioSeeder
