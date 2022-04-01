import type { Plugin } from 'vite';
import { isMatch } from 'micromatch';
import { parseExpressionAt, parse } from 'acorn';

export function IconfontCss(): Plugin {
  let aliUrl = '';
  const virtualModuleId = '@ali-icon-module.css';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;

  return {
    name: 'vite-plugin-iconfont-css',
    transform(code, id) {
      if (
        isMatch(id, ['**/*.js', '**/*jsx', '**/*.ts', '**/*tsx', '**/*.vue'])
      ) {
        // 匹配 createFromIconfontCN 但是可能会出现别名的情况 也须要处理
        const ast = parseExpressionAt(code, 1, {
          ecmaVersion: 'latest',
          sourceType: 'module',
          ranges: true,
        });

        console.log(ast);
      }

      //
      // const matchedUrl = code.match(/at\.alicdn.+js/)?.[0];

      // if (matchedUrl) {
      //   aliUrl = matchedUrl;

      //   return `import '${virtualModuleId}'
      //       ${code}`;
      // }

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
