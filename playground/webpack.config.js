import { resolve } from 'node:path'

/**
 * @returns {import('webpack').Configuration}
 */
export default ()=>{
  return {
    entry:'./index.js',
    module:{
      rules:[
        {
         
        }
      ]
    },
    mode:'development'
  }
}
