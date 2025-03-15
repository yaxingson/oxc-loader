import { validate } from 'schema-utils'

export default function(source:string) {
  const query = this.query
  const option = this.getOptions()
  const config = {}

  console.log(source)
  console.log(option)
  console.log(query)

  return `export default ${JSON.stringify(config)}`
}
