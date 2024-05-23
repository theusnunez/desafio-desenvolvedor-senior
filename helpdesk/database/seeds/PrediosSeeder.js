'use strict'

/*
|--------------------------------------------------------------------------
| PrediosSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class PrediosSeeder {
  async run () {
    await Database
      .table('predios')
      .insert({
        id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        nome: 'Predio 1',
        descricao: 'Predio 1'
      })

    await Database
      .table('predios')
      .insert({
        id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        nome: 'Predio 2',
        descricao: 'Predio 2'
      })
  }
}

module.exports = PrediosSeeder
