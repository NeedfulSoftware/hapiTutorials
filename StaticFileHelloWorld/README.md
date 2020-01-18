# StaticFileHelloWorld - An example of how to serve static files

A minimal server that listens for requests on port 8080 and returns the contents of a file.

It uses the [@hapi/inert](https://github.com/hapijs/inert) plugin to serve static files.

## Usage

Install the necessary node modules with the command:
```
npm install
```
Start the server with the command:
```
npm start
```

You should now be able to point your browser at `http://localhost:8080/` and see the "Hello World from a file!" message
displayed.
