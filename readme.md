### Instructions for installation:
 - Install node.js (https://nodejs.org/en/)
 - Install yarn (https://yarnpkg.com/docs/install)

The following commands only need to be run ONCE:
`yarn install`

 To start the server run the following commands in the code directory:
```
 cd Documents\Github\Orchestrio

 node_modules/.bin/webpack -p

 node_modules/.bin/babel-node --presets 'react,es2015' app/server.js
```

Visit localhost:8080 in your browser!
