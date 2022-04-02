import type { Plugin } from 'vite';
import { isMatch } from 'micromatch';
import { parseCreateFromIconfontCN } from './parse';

export function IconfontCss(): Plugin {
  let aliUrls: string[] = [];
  const virtualModuleId = '@ali-icon-module.css';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;
  const fileMatched = (id) =>
    isMatch(id, ['**/*.js', '**/*jsx', '**/*.ts', '**/*tsx', '**/*.vue']);

  return {
    name: 'vite-plugin-iconfont-css',
    transform(code, id) {
      if (fileMatched(id)) {
        aliUrls = parseCreateFromIconfontCN(code, id);
      }

      console.log(aliUrls);

      return null;
    },
    resolveId(id) {
      // if (id === virtualModuleId) {
      //   return resolvedVirtualModuleId;
      // }

      return null;
    },
    load(id) {
      // if (id === resolvedVirtualModuleId) {
      //   return `@import '//${aliUrl.replace('.js', '.css')}';`;
      // }

      return null;
    },
  };
}
