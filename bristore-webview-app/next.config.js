/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['antd-mobile', 'antd-mobile-icons']);

const nextConfig = { reactStrictMode: true, output: 'standalone' };

module.exports = withPlugins([withTM], nextConfig);
