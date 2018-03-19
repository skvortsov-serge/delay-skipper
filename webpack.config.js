var config = {
   entry: ['./index.js', './styles/app.scss'],
   output: {
      path:'/',
      filename: 'bundle.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
       query: {
         presets: ['es2015', 'react'],
         "plugins": ["transform-decorators-legacy", "transform-class-properties", "syntax-dynamic-import", "transform-es2015-destructuring", "transform-object-rest-spread", "transform-react-jsx"],
            }
         }, {
          test: /\.(less|scss)$/,
          loaders: ["style-loader", "css-loader", "less-loader"]
         }
      ]
   }
}
module.exports = config;
