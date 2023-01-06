const cacheDir = (constants, source) => [
  constants.PUBLISH_DIR,
  `${source}/.bridgetown-cache`,
];

module.exports = {
  async onPreBuild({ constants, inputs, utils }) {
    if (await utils.cache.restore(cacheDir(constants, inputs.source))) {
      console.log('Restoring persisted cache');
    } else {
      console.log('No persisted cache found. Skipping');
    }
  },
  async onPostBuild({ constants, inputs, utils }) {
    if (await utils.cache.save(cacheDir(constants, inputs.source))) {
      console.log('Cache persisted');
    } else {
      console.log('No cache was found. Please check your config for this plugin');
    }
  },
};
