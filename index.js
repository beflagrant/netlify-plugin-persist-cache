const cacheDir = (constants, source, cacheFolder) => [
  constants.PUBLISH_DIR,
  `${source}/${cacheFolder}`,
];

module.exports = {
  async onPreBuild({ constants, inputs, utils }) {
    const dir = cacheDir(constants, inputs.source, inputs.cacheFolder)
    if (await utils.cache.restore(dir)) {
      console.log('Restoring persisted cache to', dir);
    } else {
      console.log('No persisted cache found for', dir, '[SKIPPING]]');
    }
  },
  async onPostBuild({ constants, inputs, utils }) {
    const dir = cacheDir(constants, inputs.source, inputs.cacheFolder)
    if (await utils.cache.save(cacheDir(constants, inputs.source))) {
      console.log('Cache persisted for', dir);
    } else {
      console.log('No cache was found. Please check your config for this plugin');
    }
  },
};
