# Netlify Build Plugin: Persist the Cache between builds

Speed up deploys by caching your previous build cache, so you only need to build changed files (and any other cached assets)

## Installation

Add the plugin as a development dependency:

```
npm install -D netlify-plugin-persist-cache
```
OR
```
yarn add --dev netlify-plugin-persist-cache
```

## Configuration

Add the following to your `netlify.toml`:

```
[[plugins]]
  package = "netlify-plugin-persist-cache"
  
  [plugins.inputs]
  source = "/output" 
  cacheFolder = ".bridgetown-cache"
```

`source` need only be set if it is not the root of your repository and `cacheFolder` is relative to the `source`.