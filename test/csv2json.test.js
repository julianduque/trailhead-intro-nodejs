const tap = require('tap')
const csv2json = require('../index.js')
const parsed = require('./fixtures/Contact_Data.json')
const path = require('path')

tap.test('it should parse', async (t) => {
  const result = await csv2json(path.join('./data', 'Contact_Data.csv'))
  t.same(parsed, result)
})
