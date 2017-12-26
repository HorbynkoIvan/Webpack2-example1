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
after that we can run app **yarn run start**
10. **mkdir source** - create new folder
11. **touch source/{index.js,menu.js}** - create two new files in folder
###Create html file using ***html-webpack-plugin***
11. **yarn add html-webpack-plugin -D** - install html-webpack-plugin(local)