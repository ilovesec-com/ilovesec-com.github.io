import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home', href: '/'
    },
    {
      text: 'Contact Us', href: getPermalink('/contact'),
    },
    {
      text: 'About Us', href: getPermalink('/homes/personal'),
      links: [
        {
          text: 'Resume',
          href: getPermalink('/homes/personal/#resume'),
        },
        {
          text: 'Portfolio',
          href: getPermalink('/homes/personal/#portfolio'),
        },
      ],
    },
    {
      text: 'Blog', href: '/blog',
    },
  ],
  actions: [{ text: 'Blog', href: getBlogPermalink(), target: '_blank' }],
};

export const footerData = {
  links: [


  ],
  secondaryLinks: [

  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.twitter.com/samunoskex' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/samunoske' },
  ],
  footNote: `
  Made by onWidget
  `,
};
