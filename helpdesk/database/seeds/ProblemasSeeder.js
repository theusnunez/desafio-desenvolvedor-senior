'use strict'

/*
|--------------------------------------------------------------------------
| ProblemasSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class ProblemasSeeder {
  async run () {
    await Database
      .table('problemas')
      .insert({
        id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        nome: 'Network - Cable',
        area_id: '1',
        sla: '1',
        prioridade: '1'
      })

    await Database
      .table('problemas')
      .insert({
        id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        nome: 'Sistemas Lentidao',
        area_id: '2',
        sla: '1',
        prioridade: '1'
      })
  }
}

module.exports = ProblemasSeeder
