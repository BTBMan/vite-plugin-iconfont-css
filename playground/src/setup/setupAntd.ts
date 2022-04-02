import { type App } from 'vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';

export const setupAntd = (app: App) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3295861_9autcxth94f.js',
  });
  app.component('AliIcon', IconFont);
};
