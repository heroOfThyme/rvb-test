import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from '@playform/compress';
import astrowind from './vendor/integration';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter.mjs';
import node from "@astrojs/node";
import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hasExternalScripts = false;
const whenExternalScripts = (items = []) => hasExternalScripts ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [
    tailwind({
    applyBaseStyles: false
  }), 
  sitemap(), 
  mdx(), 
  icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'voice-presentation', 'business-contact', 'database']
    }
  }),

  ...whenExternalScripts(() => 
    partytown({
      config: {
        forward: ['dataLayer.push'] },
    })
  ), 
  
  compress({
    CSS: true,
    HTML: {
      'html-minifier-terser': {
        removeAttributeQuotes: false
      }
    },
    Image: true,
    JavaScript: true,
    SVG: true,
    Logger: 1
  }), 
  
  astrowind({
    config: "./src/config.yaml"
  }), 
  
  jopSoftwarecookieconsent(), 
  react(), 
  partytown({
    config: {
      debug:false,
    }
  }
  )],

  image: {
    service: sharpImageService(),
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin]
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  },

  adapter: node({
    mode: "standalone"
  })
});