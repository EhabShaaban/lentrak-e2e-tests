/// <reference types="cypress" />

const {
  addMatchImageSnapshotPlugin,
 } = require('cypress-image-snapshot/plugin'); 
/**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
   addMatchImageSnapshotPlugin(on, config);
 };

const path = require('path');
const fs = require('fs-extra');

module.exports = (on, config) => {
    
    function getConfigurationByFile(file) {
        const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);

        return fs.readJson(pathToConfigFile);
    }
    const file = config.env.configFile || 'qa';

    return getConfigurationByFile(file);
};