# eslint-config-ts-base

## Usage

```bash
npm i -D eslint @nulltype/eslint-config-ts-base @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-sort-keys-fix
```

In your eslint config file:

```js
module.exports = {
  extends: '@nulltype/ts-base'
}
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
