# my-first-express-app
My first express app

1. Create a new repo in Github with a README and clone
2. Run 'npm init -y' -- creates a 'package.json file -- go ahead and acp
3. Install Express App dependencies with 'npm i express supertest jest cors'
4. Add a .gitignore and add 'node_modules'

# Deploying on Heroku

1. Heroku login
2. git remote -v -- confirm you don't already have heroku as a remote
3. heroku create [appname]
4. git remote -v --note that heroku is now a remote
5. add a script to your package.json that heroku knows how to start your app
```json

"scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1" 
}
```

6. ACP the change to package.json
7. Deploy the code using
    'git push heroku main' (if you are on the main branch)
    'git push heroku dev:main' (if you are on the dev branch)