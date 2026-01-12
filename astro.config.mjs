// @ts-check
import { defineConfig } from 'astro/config';
import fulldevUi from 'fulldev-ui';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  site: 'https://getlogia.online',
  integrations: [fulldevUi(), react()]
});