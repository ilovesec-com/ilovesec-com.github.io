import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home', href: '/'
    },
    {
      text: 'Contact', href: getPermalink('/contact'),
    },
    {
      text: 'About', href: getPermalink('/homes/personal'),
      links: [
        {
          text: 'Bio',
          href: getPermalink('/homes/personal/#about'),
        },
        {
          text: 'Security Community Highlights',
          href: getPermalink('/homes/personal/#highlights'),
        },
        {
          text: 'Security Certifications',
          href: getPermalink('/homes/personal/#certs'),
        },
        {
          text: 'Skills',
          href: getPermalink('/homes/personal/#skills'),
        },
      ],
    },
    {
      text: 'Content', href: getPermalink('/homes/personal'),
      links: [
        {
          text: 'Blog',
          href: getPermalink('category/blog/'),
        },
        {
          text: 'Videos',
          href: getPermalink('category/video/'),
        },
        {
          text: 'SOC Tools',
          href: 'https://github.com/samunoske/SOC-Tools',
        },
      ],
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
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/thejoshuamorgan' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://infosec.exchange/@Samunoske' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/ilovesec.com' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.twitter.com/samunoskex' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/samunoske' },
  ],
  footNote: `
  <a rel="me" href="https://infosec.exchange/@Samunoske"></a>2024
  `,
};
