import type { Plugin } from 'vite';
import { isMatch } from 'micromatch';
import { parseCreateFromIconfontCN } from './parse';
import { composeCss } from './composeCss';

type Options = {
  include: string[];
};

const defaultOptions = {
  include: ['**/*.js', '**/*.jsx', '**/**/*.ts', '**/*.tsx'],
};

export function IconfontCss(opt?: Options): Plugin {
  const optinos: Options = Object.assign(defaultOptions, opt);
  const { include } = optinos;
  let alreadyImportUrls: string[] = [];
  let aliUrls: string[] = [];
  const virtualModuleId = '@ali-icon-module.css';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;
  const fileMatched = (id) => isMatch(id, include);

  return {
    name: 'vite-plugin-iconfont-css',
    transform(code, id) {
      if (fileMatched(id)) {
        aliUrls = Array.from(
          new Set([...aliUrls, ...parseCreateFromIconfontCN(code, id)]),
        );

        if (aliUrls.length) {
          return `import '${virtualModuleId}'
            ${code}`;
        }
      }

      return null;
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }

      return null;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const cssStr = composeCss(aliUrls, alreadyImportUrls);

        aliUrls = [];

        return cssStr;
      }

      return null;
    },
  };
}
