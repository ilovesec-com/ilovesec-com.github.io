import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home', href: '/',
    },
    {
      text: 'About', href: '/#about',
      links: [
        {
          text: 'Bio',
          href: '/#about',
        },
        {
          text: 'Certifications',
          href: '/#certs',
        },
        {
          text: 'Skills',
          href: '/#skills',
        },
        {
          text: 'CTFs',
          href: '/#ctf',
        },
      ],
    },
    {
      text: 'Community', href: '/#presentations',
      links: [
        {
          text: 'Talks',
          href: '/#presentations',
        },
        {
          text: 'Community Highlights',
          href: '/#highlights',
        },
      ],
    },
    {
      text: 'Blog', href: 'https://ilovesec.substack.com',
    },
    {
      text: 'Contact', href: '/#contact',
    },
  ],
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
  footNote: ``,
};
