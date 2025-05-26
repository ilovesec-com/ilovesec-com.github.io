import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';

import astrowind from './vendor/integration';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
} from './src/utils/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    service: squooshImageService(),
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },


  redirects: {
    '/': {
      status: 302,
      destination: '/homes/personal/#about'
    },    
    '/about.html': {
      status: 302,
      destination: '/homes/personal/#about'
    },
    '/about/': {
      status: 302,
      destination: '/homes/personal/#about'
    },
    '/videos.html': {
      status: 302,
      destination: '/category/videos/'
    },
    '/all-posts.html': {
      status: 302,
      destination: '/category/blog/'
    },    
    '/category/blog/': {
      status: 302,
      destination: 'https://ilovesec.substack.com'
    },
    '/blog/': {
      status: 302,
      destination: 'https://ilovesec.substack.com'
    },   
    '/category/video/': {
      status: 302,
      destination: 'https://ilovesec.substack.com/t/video'
    },
    '/video/': {
      status: 302,
      destination: 'https://ilovesec.substack.com/t/video'
    },  
    '/defaultsite': {
      status: 302,
      destination: '/'
    },
  },
});
