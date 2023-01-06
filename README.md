# Netlify Build Plugin: Persist the Cache between builds

Speed up deploys by caching your previous build cache, so you only need to build changed files (and any other cached assets)

## Installation

You can install this plugin directly via the Netlify UI [here](https://app.netlify.com/teams/madhatter2099/plugins/netlify-plugin-jekyll-cache/install).

If you don't want to use the UI then you can install the plugin using npm. Add the plugin as a development dependency:

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
  # only required if cacheFolder is not in the root directory of your repository
  source = "/jekyll" 
  cacheFolder = ".jekyll-cache"
```
