# eslint-config-ts-base

## Usage

```bash
npm i -D eslint @nulltype/eslint-config-ts-base @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier
```

In your eslint config file:

```js
import nulltypeConfig from '@nulltype/eslint-config-ts-base'

export default [
  ...nulltypeConfig,
  {
    // ... project settings
  },
]
```

## Prettier proposal

add .prettierrc with following content

```json
{
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always",
  "semi": false
}
```
