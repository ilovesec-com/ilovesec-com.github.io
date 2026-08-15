import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import tailwindcss from '@tailwindcss/vite';

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
    domains: ['cdn.pixabay.com'],
  },

  compressHTML: true,

  markdown: {
    processor: unified(),
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },

  redirects: {
    '/about.html': {
      status: 302,
      destination: '/#about'
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
      destination: 'https://ilovesec.substack.com',
      target: '_blank'
    },
    '/blog/': {
      status: 302,
      destination: 'https://ilovesec.substack.com',
      target: '_blank'
    },   
    '/category/video/': {
      status: 302,
      destination: 'https://ilovesec.substack.com/t/video',
      target: '_blank'
    },
    '/video/': {
      status: 302,
      destination: 'https://ilovesec.substack.com/t/video',
      target: '_blank'
    },
    '/defaultsite': {
      status: 302,
      destination: '/'
    },
  },
});
