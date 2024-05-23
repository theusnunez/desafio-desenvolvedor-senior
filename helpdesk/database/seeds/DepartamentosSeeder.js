'use strict'

/*
|--------------------------------------------------------------------------
| DepartamentosSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class DepartamentosSeeder {
  async run () {
    await Database
      .table('setors')
      .insert({
        id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        nome: 'setor 1',
        descricao: 'setor 1',
        centro: '1'
      })

    await Database
      .table('setors')
      .insert({
        id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        nome: 'setor 2',
        descricao: 'setor 2',
        centro: '1'
      })
  }
}

module.exports = DepartamentosSeeder
