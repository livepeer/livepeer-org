const { i18n } = require('./next-i18next.config');
const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();
const withSvgr = require('next-svgr');
const withTM = require('next-transpile-modules')([
  'gsap',
  'gsap/DrawSVGPlugin',
  'gsap/MotionPathPlugin',
  'gsap/ScrollTrigger',
  'gsap/SplitText',
  'react-use-mailchimp',
]);

module.exports = withPlugins(
  [withSvgr, [withMDX, { pageExtensions: ['mdx', 'tsx'] }], withTM],
  {
    i18n,
  }
);
