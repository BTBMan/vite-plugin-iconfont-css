import { isMatch } from 'micromatch';
import { describe, expect, test } from 'vitest';

describe('match', () => {
  test('whether or match', () => {
    expect(
      isMatch(
        '/Users/john_long/Personal/Projects/vite-plugin-iconfont-css/playground/src/main.ts',
        ['**/**/*.ts'],
      ),
    ).toBe(true);

    expect(
      isMatch(
        '/Users/john_long/Personal/Projects/vite-plugin-iconfont-css/playground/src/main.ts',
        ['**/**/*.ts'],
      ),
    ).toBe(true);
  });
});
