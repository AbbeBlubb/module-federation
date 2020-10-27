const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// Dependencies to be shared with other applications
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [

    new ModuleFederationPlugin({
      name: "home", // Unique application name
      filename: "", // Remote entry file name, a manifest of exposed modules and shared libraries
      remotes: {
        "nav-consumed": "navigation@http://localhost:3001/remoteEntry.js",
      }, // Remotes this app will consume
      exposes: {}, // Files this application will expose as remotes to other applications
      shared: {}, // Libraries this application will share with other applications 
    }),

    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),

  ],
};
