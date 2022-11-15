module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: [],
    // add your custom rules here
    rules: {
        'max-len': [2, { code: 160, tabWidth: 4, ignoreUrls: true }],
    },
};
