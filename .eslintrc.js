module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: [
    'airbnb',
    'prettier'
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': ['off'],
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
    }],
  },
  globals: {}
}
