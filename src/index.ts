import type { Plugin } from 'vite';

export const IconfontCss = (): Plugin => {
  let aliUrl = '';
  const virtualModuleId = '@ali-icon-module.css';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;

  return {
    name: 'vite-plugin-iconfont-css',
    transform(code, id) {
      console.log(id, 1, 2);
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
};
