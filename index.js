
const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)

async function csv2json (filename) {
  try {
    const file = await readFile(filename, 'utf8')

    const records = []
    const lines = file.split('\n')
    let headers = []
    lines.forEach((line, index) => {
      if (index === 0) {
        headers = line.split(',')
        return
      }

      const record = {}
      const values = line.split(',')
      headers.forEach((header, i) => {
        record[header] = values[i]
      })
      records.push(record)
    })
    return records
  } catch (e) {
    return []
  }
}

module.exports = csv2json
