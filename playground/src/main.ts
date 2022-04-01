import { type App, createApp } from 'vue';
import AppPage from './App.vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';

export const setupAntd = (app: App) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3295861_9autcxth94f.js',
  });

  app.component('AliIcon', IconFont);
};

createApp(AppPage).use(setupAntd).mount('#app');
