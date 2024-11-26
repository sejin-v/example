import { ViteSSG } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import { routes } from 'vue-router/auto-routes';

// import type { UserModule } from './types'
import App from './App.vue';

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: setupLayouts(routes), base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    // Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    //   .forEach(i => i.install?.(ctx))
  }
);
