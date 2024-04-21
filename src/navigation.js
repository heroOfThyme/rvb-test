import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        {
          text: 'Web Development',
          href: getPermalink('/services/web-development'),
        },
        {
          text: 'Web Hosting',
          href: getPermalink('/services/web-hosting'),
        },
        {
          text: 'Business Process Automation',
          href: getPermalink('/services/business-process-automation'),
        },
        {
          text: 'Application Integration',
          href: getPermalink('/services/application-integration'),
        },
        {
          text: 'Data Science Solutions',
          href: getPermalink('/services/data-science-solutions'),
        },
        {
          text: 'Google Business Management',
          href: getPermalink('/services/google-business-management'),
        },
        {
          text: 'Infrastructure Solutions',
          href: getPermalink('/services/infrastructure-solutions'),
        },
      ],
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink('/blog'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Web Development Solutions',
      links: [
        { text: 'Web Development', href: '#' },
        { text: 'Web Hosting', href: '#' },
        { text: 'Google Business Management', href: '#' },
      ],
    },
    {
      title: 'Integrated Business Solutions',
      links: [
        { text: 'Business Process Automation', href: '#' },
        { text: 'Application Integration', href: '#' },
        { text: 'Data Science Solutions', href: '#' },
        { text: 'Infrastructure Solutions', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        // { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/rvbdatasciences/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/rvbcorp' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/rvb-data-science-017545220/' },
  ],
  footNote: `
    © ${new Date().getFullYear()} • RVB Data Science Corp • All Rights Reserved.`,
};
