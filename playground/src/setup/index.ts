import { type App } from 'vue';
import { setupAntd } from './setupAntd';
import { setupFoo } from './setupFoo';

export const setupApp = (app: App) => {
  setupFoo();

  setupAntd(app);
};
