import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home', href: '/'
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
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
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/samunoske' },
  ],
  footNote: `
  Made by onWidget
  `,
};
