# Electron Starter Pack

> Webpack + Electron + Typescript + React + Less

The goal of this project is to provide a simple starter pack that is flexible and customizable but still removes some of the complexity and setup required for every new Electron project. It supports creating an app that can work both on Electron and the Web and relies on common well known tools.

## Tools

### Webpack and Typescript

It leverages Webpack for both the React code as well as the Electron code and relies on typescript loader in both cases.

### Electron

Basic Electron starter code that creates a simple window and is able to resolve the entry point. Includes `electron-builder` with minimal configuration for generating builds. Under `src/electron`.

### React

Basic React App that can import Less assets. Under `src/react`.

In this case Webpack is configured to look for `.electron.tsx`, `.electron.ts` imports before `.tsx`, `.ts` when running or building for Electron in order to provide an alternative for creating Electron specific code.

## Usage

### Development

Both Electron and Web rely on `webpack-dev-server` for providing an updated development build that includes hot reloading of some assets.

### Development in Electron

```
yarn electron:server
yarn electron:client
```

### Development in the browser

```
yarn web:server
```

### Building for Electron

```
yarn build:electron
```
This will build both the Electron main and Renderer code.

### Building for the Web

```
yarn build:web
```
This will build the web version, you can set the `PUBLIC_PATH` env variable to something that matches your Web Server.

### Generating Electron package / installer

After building for Electron:
```
yarn dist
```
Assets should be generated under `dist/bin` if everything goes well.