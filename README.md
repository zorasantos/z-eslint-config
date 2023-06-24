# Z ESLint config

## Whats included?

- Standard config base;
- Prettier;

## Setup

1. Install the dependencies
```
npm i -D eslint z-eslint-config
or
yarn add eslint z-eslint-config -D
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@zorasantos/z-eslint-config/node"
}
```

3. You can add others configs. Example:

```
{
  "extends": "@zorasantos/z-eslint-config/node",
  "env": {
    "jest": true
  },
  "rules": {
    "no-useless-constructor": "off",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 110,
        "endOfLine": "auto",
        "singleQuote": true,
        "trailingComma": "none",
        "arrowParens": "always"
      }
    ]
  }
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
