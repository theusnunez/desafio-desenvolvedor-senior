'use strict'

const { test } = use('Test/Suite')('Bcrypt')
const bcrypt = require('bcryptjs')

test('bcrypt can hash and compare password', async ({ assert }) => {
  const plain = 'my-secret'
  const hash = await bcrypt.hash(plain, 10)
  const match = await bcrypt.compare(plain, hash)
  assert.isTrue(match)
})
