module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: 'standard',
    overrides: [
        {
            files: ['**/*.test.js'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            rules: { 'jest/prefer-expect-assertions': 'off' }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: [2, 4]
    }
}
