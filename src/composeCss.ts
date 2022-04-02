export const composeCss = (urlArr: string[]) => {
  return urlArr.reduce((init: string, url: string) => {
    init += `
        @import '//${url.replace('.js', '.css')}';\r
    `;

    return init;
  }, '');
};
