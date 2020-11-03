
# Webpack 5 - Module Federation

Experimental repo


## Start in root
- npm install (will install concurrently)
- npm run c:install
- npm run c:start
- npm run c:dev


## Notes
- NPM 7 and Node 14.15 not working properly with package.json workspaces

## Bumb WP
https://webpack.js.org/migrate/5/


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
