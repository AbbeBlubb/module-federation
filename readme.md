
# Webpack 5 - Module Federation

## Start in root with Docker

- docker-compose up

or

- npm run c:db // build docker images for apps, with production build
- npm run c:dr // run images and map container ports to localhost ports localhost:3000 (modules), localhost:4000 (infra), localhost:8080 (public)

Pages

- <http://localhost:8080/#/>
- <http://localhost:8080/#/cards>
- <http://localhost:8080/#/loans>

## Start in root without Docker

- npm install // install concurrently in root folder
- npm run c:i // install dependencies in subfolders
- npm run c:s // start dev server, no live reload
- npm run c:d // start dev server with live reload
- npm run c:bd // build dev
- npm run c:bs // serve apps from build folders

## Notes

- Node 14.15 with NPM 6.14.8
- Uses concurrently

## Bumb WP

[Webpack To v5 from v4](https://webpack.js.org/migrate/5/)

## Features

- Botstrapped index.js/bootstrap.js to avoid race conditions between code execution and loading remotes
- Higher Order Function for Error handling and Suspense (delay)
- Dynamic imports of React UI components when the component is needed in the view
- Resilent asynchronous imports of functions, classes, values, etc
- Proxy pattern with cache (infra/src/FetchWithCacheProxy)
- Queue function where calls are queued until the function has been imported

## Some methods for sharing code

- NPM module
  - Publish -> bump dependency versions -> new app version -> deploy as complete unit
  - Teams must inform of new versions and request update. Often changes are needed on both the host application and the rendering component. When host application bumps a version of a rendering compnent, the host application stands for the build, tests and deployment (possible to make "shift left" from here). Needs automation to scale.
- Micro-FE
  - Rendering code is consumed on client or on server at runtime. Micro-FE framework.
  - Rendering code can be updated without need of redeploying the consuming application. Latest version is always downloaded
  - Rendering code might breake the consuming application
- Webpack 4, eg:
  - Code splitting with shared runtime
  - Entry point with injected infra
- Module Federation
  - Code exposed from application, no need to extract code from the rendering application
  - No alternation to existing code bases is required
  - Universal for JS runtime such as browser, Node, Electron, Web Worker
  - Dependencies are shared
  - Problems may occur when loading the rendering code at runtime and when bugs are propagated

## Micro-FE frameworks vs MF

- Share UI vs share code
- Load the UI code into the page and integrate it in a platform-agnostic way vs get JS code from one app to another, even non-UI code
- A simple way to think about MF: makes multiple independent applications work together to look and feel like a monolith, at runtime
- If using the same view framework in all the applications, MF can be used as a sort of Micro-FE framework
