module.exports = {
  locales: ['en', 'fr', 'nl'],
  defaultLocale: 'en',
  pages: {
    '/': ['home'],
  },
  loadLocaleFrom: (lang, ns) => {
    const translation = lang.slice(0, 2);

    return import(`./locales/${translation}/${ns}.json`).then(
      (m) => m.default,
    );
  },
};