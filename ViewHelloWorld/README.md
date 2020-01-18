# ViewHelloWorld - An example of how to use views

A minimal server that listens for requests on port 8080 and generates the response using a view.

It uses the [@hapi/vision](https://github.com/hapijs/vision) plugin and the 
[handlebars](https://github.com/wycats/handlebars.js) templating engine.
## Usage

Install the necessary node modules with the command:
```
npm install
```
Start the server with the command:
```
npm start
```

You should now be able to point your browser at `http://localhost:8080/` and see the "Hello World from a view!" message
displayed.
