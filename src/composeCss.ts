export const composeCss = (urlArr: string[], alreadyImportUrls: string[]) => {
  return urlArr.reduce((init: string, url: string) => {
    if (!alreadyImportUrls.includes(url)) {
      alreadyImportUrls.push(url);

      init += `
        @import '${url.replace('.js', '.css')}';\r
      `;
    }

    return init;
  }, '');
};
