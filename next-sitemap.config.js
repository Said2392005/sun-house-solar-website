/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sunhousesolar.in',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [],
  },
}
