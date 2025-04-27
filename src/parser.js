import { cwd } from 'node:process'
import path from 'node:path'
import * as fs from 'node:fs'

export default (filepath) => {
  const resolvedPath = path.resolve(cwd(), filepath)
  const data = fs.readFileSync(resolvedPath)
  const dataFormat = path.extname(filepath).split('.')[1]
  switch (dataFormat) {
    case 'json':
      return JSON.parse(data)
    case 'yml':
      break
    default:
      throw new Error(`Unsupported input format: '${dataFormat}'`)
  }
  return JSON.parse(data)
}
