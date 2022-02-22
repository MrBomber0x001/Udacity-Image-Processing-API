# Image-processing-api
Image Processing API project for Udacity Advanced Full Stack Nanodegree

## Building and Starting up the server 
1. install the dependencies 
```bash
npm install 
```
2. build
```bash
npm run build
```
this will compile the ts file into js to a `dist` folder
3. start on development mode
```bash
npm start
```
this will start the server on `http://localhost:5000`, the server is ready to open it on your browser

## Linting and formattting

```bash
npm run lint
```
to fix error and warnings from linting
```bash
npm run lint-fix
To build the application 
```bash 
npm run build
```
## Running test
I've used jasmine for testing 
```bash
npm run test
```
## Endpoints
1. home(main)
`http://localhost:5000/?filename=imageName.extension?width=number&height=number`  
this endpoint provide some information about the project and how to use
2. resize
`http://localhost:5000/api/resize` 
this endpoint accept 3 query parameters
<ul>
    <li>filename: should be valid name</li>
    <li>width: should be more than or equal 1</li>
    <li>heigth: should be more than or equal 1</li>
</ul>
 
**note**: provide the full image name with extension,  e.g `santamonica.jpg`