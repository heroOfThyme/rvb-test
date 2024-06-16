import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Web Development',
          href: getPermalink('/web-development'),
        },
        {
          text: 'Web Hosting',
          href: getPermalink('/web-hosting'),
        },
        {
          text: 'Search Engine Optimization',
          href: getPermalink('/search-engine-optimization'),
        },
        {
          text: 'Business Process Automation',
          href: getPermalink('/business-process-automation'),
        },
        {
          text: 'Google Business Management',
          href: getPermalink('/google-business-management'),
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
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Our Solutions',
      links: [
        { text: 'Web Development', href: '/web-development' },
        { text: 'Web Hosting', href: '/web-hosting' },
        { text: 'Search Engine Optimization', href: '/search-engine-optimization' },
        { text: 'Business Process Automation', href: '/business-process-automation' },
        { text: 'Google Business Management', href: '/google-business-management' },
      ],
    },
    {
      title: 'Get Started',
      links: [
        { text: 'General Inquires', href: 'mailto:info@rvbcorp.com' },
        { text: 'Sales', href: 'mailto:sales@rvbcorp.com' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Portfolio', href: '/portfolio' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Get in Touch', href: '/contact' },
        { text: 'FAQ', href: '/contact#faq' },
        { text: 'Documentation', href: '#' },
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
