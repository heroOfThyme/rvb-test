import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        // another: {
        //   label: 'Another one (dummy)',
        // },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "🍪 We Use Cookies!",
          description:
            'We use cookies to ensure you get the best experience on our website. <br>By clicking "Accept all" you agree to the use of all cookies. If you want to manage your preferences, click "Manage preferences". <br>You can find more information about cookies and your rights in my Privacy Policy.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="/privacy">Privacy Policy</a>\n<a href="/terms">Terms and conditions</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'We use cookies to enhance your experience on our site. They help us understand how you interact with our website. By continuing, you agree to our use of cookies.',
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'These are the cookies that are essential for you to browse the website and use its features. The information collected relates to the operation of our website and enables us to provide you with the services you have requested.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description:
                'These cookies may be used to ensure that all our services and communications are relevant to you. The information these cookies collect cannot track your browsing activity on other websites. <br> <br>Without these cookies, a website cannot remember choices you’ve previously made or personalize your browsing experience. For example, we use functionality cookies to remember your language preferences and to remember your login details.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics Cookies',
              description:
                'Analytics cookies collect information about your use of the website and enable us to improve the way it works. These cookies give us aggregated information that we use to monitor site performance, count page visits, spot technical errors, see how users reach the website, and measure the effectiveness of advertising.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any query in relation to our policy on cookies and your choices, please <a style="color: #7776ff" href="/contact">Contact Us</a>.',
            },
          ],
        },
      },
    },
  },
};
