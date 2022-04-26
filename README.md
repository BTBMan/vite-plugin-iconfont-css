# vite-plugin-iconfont-css

This plugin is for auto import iconfont `.css` file by use [@ant-design/icons-vue](https://2x.antdv.com/components/icon-cn#API) `createFromIconfontCN` method in your project

## Install

```bash
npm i vite-plugin-iconfont-css -D
# or
pnpm i vite-plugin-iconfont-css -D
# or
yarn i vite-plugin-iconfont-css -D
```

## Usage

```js
// vite.config.js

import { defineConfig } from 'vite';
import { IconfontCss } from 'vite-plugin-iconfont-css';

export default defineConfig({
  plugins: [IconfontCss()],
});
```

## Options

### `include`

- Type: `string[]`

- Default: `['**/*.js', '**/*.jsx', '**/**/*.ts', '**/*.tsx']`

Array of files, To include when scanning.
