import { parseExpressionAt } from 'acorn';

// 匹配 createFromIconfontCN 但是可能会出现别名的情况 也须要处理
export const parseCreateFromIconfontCN = (code: string, id: string) => {
  const matches = Array.from(code.matchAll(/createFromIconfontCN/g));
  let aliUrls: string[] = [];

  matches.forEach((m) => {
    const start = m.index!;

    const ast = parseExpressionAt(code, start, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ranges: true,
    });

    if (ast.type === 'CallExpression') {
      (ast as any).arguments.forEach((arg) => {
        if (arg.type === 'ObjectExpression') {
          arg.properties.forEach((prop) => {
            if (prop.type === 'Property' && prop.key.name === 'scriptUrl') {
              aliUrls.push(prop.value.value);
            }
          });
        }
      });
    }
  });

  return aliUrls;
};
