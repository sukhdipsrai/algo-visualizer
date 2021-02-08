## Summary
This is a Algorithm-Viewer, which allows the user to select an algorithm and visualy see it be executed.


## MVP List
* Able to Select different algorithms to be visially executed
* Visually executed algorithms look stunning and make use of of three.js
* Able to slow down, speed up or pause visual display
* There is a user selected input that matches the asthetic, for how many data points to use in algorithm

## Technologies, Libraries, APIs
* three.js
* Vanilla JS, HTML, CSS
* ### Technical Challenges
    * Learning and implementing three.js
    * Using three.js in a dynamic way, rendering random or generated artificats then moving them around to visualized sorting or searching
    * Pausing/ Speeding and or slowing the rendering must all be connected somehow
    * Dealing with Asynchronicity in JS when also trying to render multiple objects and do certain things, possible code strucutre issue
    * Creating a unqiue and compelling visual design for the showcasing the algorithm.

## Wireframe
![WireFrame](/images/wireframe-js-aa.png)


## TimeLine
* ### DAY 1
    * Complete hosting and having a complete site rendering with algorithm logic in place (quicksort), start to learn the three.js library and finilize visual style to implement
* ### DAY 2
    * Use the in place logic of the algorithm, and start to implemnt and replace it with three.js graphics
* ### DAY 3
    * Continue the implementation.
* ### DAY 4
    * Start a New algorithm (Merge Sort), writing the main implementation ut first along with the button to switch to the new algorithm. Starting the Three.js visual styling
* ### DAY 5
    * Finishing up the visual styling for the previous Algorithm, if Done moving on to either Radix Sort or Djikstra Algorithm, the latter would require a different visual scheme.


# README

## Node Version Manager (NVM)
- To find out which version of node your machine is currently running, use the command `node -v` in your terminal
- We want to build our projects in the latest stable build that is supported by all of our dependencies.
- For easy node version management, we'll use the [Node Version Manager](https://github.com/nvm-sh/nvm)
  
### Installation and Config
We can use homebrew to install the manager:
1. update homebrew with `brew update`
2. install the manager with `brew install nvm`
3. make a directory for the manger in your root folder with `mkdir ~/.nvm`
4. in your `~/.zshrc` file for zsh users or in your `.bash_profile` for bash users, add the following:

   ```
   export NVM_DIR=~/.nvm
   source $(brew --prefix nvm)/nvm.sh
   ```
5. Finally, we need to restart our terminal to load the new changes.

### Versioning
- Once nvm is installed and configured, we want to install the needed version of node with the command `nvm install 14.15.0`
- In order to switch node versions, use the command `nvm use <desired node version>` (in our case, we want to run `nvm use 14.15.0`)

## Project Set Up

1. create your new project directory and `cd` into it 
2. `git init`
3.  create a simple `.gitignore`
    ```
    # .gitignore

    /node_modules/
    ```
    > **NOTE WE WILL NOT IGNORE OUR BUNDLE FILES IN ORDER TO HOST ON GITHUB PAGES**
4.  `npm init` and follow prompts
5.  install dev dependencies
    ```
    npm install @babel/core@7.11.6 @babel/plugin-proposal-optional-chaining@7.11.0 @babel/preset-env@7.11.5 autoprefixer@9.8.6 babel-loader@8.1.0 css-loader@3.6.0 file-loader@5.1.0 mini-css-extract-plugin@0.8.2 node-sass@4.14.1 postcss-loader@3.0.0 sass@1.27.0 sass-loader@8.0.2 style-loader@1.3.0 url-loader@3.0.0 webpack@4.44.2 webpack-cli@3.3.12 webpack-dev-server@3.11.0 webpack-merge@4.2.2 --save-dev
    ```
6.  create basic `/src` subdirectory and file structure
    ```
    - src/
        - index.js
        styles/
            - index.scss
        scripts/
    ```
7.  In your root directory, create `webpack.common.js`

    ```JavaScript
    // webpack.common.js

    const path = require("path");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const outputDir = "./dist";

    module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"), 
    output: {
        path: path.join(__dirname, outputDir),
        filename: "[name].js",
        publicPath: "/dist/",
    },
    resolve: {
        extensions: [".js"], // if we were using React.js, we would include ".jsx"
    },
    module: {
        rules: [
        {
            test: /\.js$/, // if we were using React.js, we would use \.jsx?$/
            use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-proposal-optional-chaining"],
                exclude: /node_modules/,
            }, // if we were using React.js, we would include "react"
            },
        },
        {
            test: /\.css$/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: "../",
                },
            },
            "css-loader",
            "postcss-loader",
            ],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
            {
                loader: "file-loader",
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                name: "[name].[ext]",
                outputPath: "images/",
                publicPath: "images/",
                },
            },
            ],
        },
        {
            test: /\.scss/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: "../",
                },
            },
            "css-loader",
            "sass-loader",
            "postcss-loader",
            ],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        require("autoprefixer"),
    ],
    };
    ```

8.  Create `webpack.dev.js`

    ```JavaScript
    // webpack.dev.js
    const merge = require("webpack-merge");
    const common = require("./webpack.common.js");

    module.exports = merge(common, {
      mode: "development",
      devtool: "inline-source-map",
      devServer: {
        contentBase: "./",
        watchContentBase: true,
        open: "Google Chrome", // use "chrome" for PC
      },
    });
    ```

9.  Create `webpack.prod.js`

    ```JavaScript
    // webpack.prod.js
    const merge = require("webpack-merge");
    const common = require("./webpack.common.js");

    module.exports = merge(common, {
        mode: "production",
        devtool: "source-map"
    });
    ```

10. create `postcss.config.js`

    ```JavaScript
    // postcss.config.js
    module.exports = {
        plugins: {
            autoprefixer: {}
        }
    };
    ```

11. add `browserlist` key and update `scripts` in `package.json`

    ```JavaScript
    // package.json

    ...

    "browserslist": [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ],
    "scripts": {
        "start": "webpack-dev-server --config webpack.dev.js",
        "webpack:watch": "webpack --watch --config webpack.dev.js",
        "webpack:build": "webpack --config webpack.prod.js  --optimize-minimize"
    },

    ...


    ```

12. create `index.scss` in `/src/styles`
    - this will be a place to import all of your custom style sheets
13. create `index.js` in `/src` directory and import style `/src/styles/index.scss`
    ```JS
    // src/index.js
    import "./styles/index.scss";
    ```
14. create `index.html` and import `dist/main.css` and `dist/main.js` appropriately

    ``` html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="./dist/main.css" />
        <title>Project Name</title>
    </head>

    <body>
        <script src="./dist/main.js"></script>
    </body>
    </html>
    ```