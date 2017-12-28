 # Creating new project and installing webpack
 1. **yarn init -y** - create package.json
 2. **git init** - initialize repository
 3. **touch .gitignore** - create ignore
 4. **echo "node_modules">.gitignore** - add folder to ignore
 ###First commit
 5. **git add .**
 6. **git commit -m "first commit"**
 7. **yarn add webpack -D** install webpack(local)
  ```
  "devDependencies": {
     "webpack": "^3.10.0"
   }
 ```
 8. **touch webpack.config.js** create config
 9. create *npm-scripts*
 ```
"scripts": {
    "start": "webpack"
  },
```
10. **mkdir source** - create new folder
11. **touch source/{index.js,menu.js}** - create two new files in folder
###Create html file using ***html-webpack-plugin***
12. **yarn add html-webpack-plugin -D** - install html-webpack-plugin(local)
###Start App
13. **yarn run start**
###Local server ***node-static***plugin
14. **yarn add node-static -D** install local server
15. create *npm-scripts*
 ```
"scripts": {
    "serv": "static build"
  },
```
16. start local server **yarn run serv**
###Webpack --watch
17. for that, in scripts we need to add key word --watch
 ```
"scripts": {
     "start": "webpack --watch",
  },
```
###Pug - template engine
18. need to setup two plugins **yarn add pug pug-loader -D**
19. **touch source/index.pug** - create first pug file
