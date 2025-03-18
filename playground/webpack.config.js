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
          test:/\.(js|ts)$/,
          use:[
            {
              loader:"@oxc-loader/linter",
              options:{

              }
            }
          ]
        }
      ]
    },
    mode:'development'
  }
}
