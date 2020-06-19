// This file is read by dashboard and cli and needs to be present under process.ced()

const providenceConfig = {
  metaConfig: {
    categoryConfig: [
      {
        // This is the name found in package.json
        project: 'lion-based-ui',
        majorVersion: 1,
        // These conditions will be run on overy filePath
        categories: {
          style: localFilePath => {
            const fromPackages = localFilePath.startsWith('./packages/style');
            const fromRoot = localFilePath.startsWith('./style');
            return fromPackages || fromRoot;
          },
          core: localFilePath => {
            const fromPackages = localFilePath.startsWith('./packages/core');
            const fromRoot = localFilePath.startsWith('./core.js');
            return fromPackages || fromRoot;
          },
          utils: localFilePath => {
            const names = ['ajax', 'localize'];
            const fromPackages = names.some(p => localFilePath.startsWith(`./packages/${p}`));
            const fromRoot = names.some(p => localFilePath.startsWith(`./${p}`));
            return fromPackages || fromRoot;
          },
          overlays: localFilePath => {
            const names = ['dialog', 'tooltip'];
            const fromPackages = names.some(p => localFilePath.startsWith(`./packages/${p}`));
            const fromRoot =
              names.some(p => localFilePath.startsWith(`./ing-${p}`)) ||
              localFilePath.startsWith('./overlays.js');
            return fromPackages || fromRoot;
          },
          forms: localFilePath => {
            const names = [
              'checkbox',
              'checkbox-group',
              'field',
              'field-mixin',
              'fieldset',
              'form',
              'input',
              // "input-amount",
              // "input-date",
              // "input-datepicker",
              // "input-email",
              // "input-iban",
              'radio',
              'radio-group',
              'textarea',
              'validate',
              'validation-feedback',
              'select',
              'select-account',
              'option-account',
              'switch',
            ];
            const fromPackages = names.some(p => localFilePath.startsWith(`./packages/${p}`));
            const fromRoot =
              names.some(p => localFilePath.startsWith(`./ing-${p}`)) ||
              localFilePath.startsWith(`./forms.js`);
            return fromPackages || fromRoot;
          },
          tests: localFilePath => localFilePath.includes('/test/'),
          demos: localFilePath => localFilePath.includes('/stories/'),
          translations: localFilePath => localFilePath.includes('/translations/'),
          icons: localFilePath =>
            localFilePath.startsWith('./icons/') ||
            localFilePath.startsWith('./icon') ||
            localFilePath.startsWith('./ing-icon'),
        },
      },
    ],
  },
  // By predefening groups, we can do a query for programs/collections...
  // Select via " providence analyze -t 'exampleCollection' "
  searchTargetCollections: {
    exampleCollection: [
      './providence-input-data/search-targets/example-project-a',
      './providence-input-data/search-targets/example-project-b',
      './providence-input-data/search-targets/ing-flow',
      './providence-input-data/search-targets/ing-orange-close-creditcard',
      './providence-input-data/search-targets/ing-orange-survey',
    ],
    // ...
  },
  referenceCollections: {
    // Our products
    'lion-based-ui': [
      './providence-input-data/references/lion-based-ui',
      './providence-input-data/references/lion-based-ui-labs',
    ],
  },
};

module.exports = providenceConfig;
