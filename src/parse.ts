import { parseExpressionAt } from 'acorn';
import { CallExpression } from 'estree';

// 匹配 createFromIconfontCN 但是可能会出现别名的情况 也须要处理
export const parseCreateFromIconfontCN = (code: string, id: string) => {
  const matches = Array.from(code.matchAll(/createFromIconfontCN/g));
  const aliUrls = new Set<any>();

  matches.forEach((m) => {
    const start = m.index!;

    const ast: CallExpression = parseExpressionAt(code, start, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ranges: true,
    }) as any;

    if (ast.type === 'CallExpression') {
      ast.arguments.forEach((arg) => {
        if (arg.type === 'ObjectExpression') {
          arg.properties.forEach((prop) => {
            if (
              prop.type === 'Property' &&
              prop.key.type === 'Identifier' &&
              prop.key.name === 'scriptUrl' &&
              prop.value.type === 'Literal'
            ) {
              aliUrls.add(prop.value.value);
            }
          });
        }
      });
    }
  });

  return Array.from(aliUrls);
};
