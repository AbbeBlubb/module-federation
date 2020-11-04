/**
 * Dynamic import() to process the rest of the imports before executing the app and 
 * avoid potential race conditions on importing all the code.
 * 
 * Since index.js is the Webpack main default entry point, this code will execute immediately 
 * without giving Webpack time to load the required remotes before execution. If remotes are
 * not loaded before that remote component code executes, it would result in a runtime error.
 */

import("./bootstrap");
