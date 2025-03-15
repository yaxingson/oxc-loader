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
          test:/\.toml$/,
          use:{
            loader:'../dist/index.js',
            options:{
              removeComment:false,
              typeConvert:true,
              trimSpace:true,

            }
          }
        }
      ]
    },
    mode:'development'
  }
}
