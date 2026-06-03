import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          additionalAddons: path.resolve(__dirname, 'additional-addons.html'),
          affiliate: path.resolve(__dirname, 'affiliate-program.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          blogPost: path.resolve(__dirname, 'blog-post.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          faq: path.resolve(__dirname, 'faq.html'),
          features: path.resolve(__dirname, 'features.html'),
          packageDetails: path.resolve(__dirname, 'package-details.html'),
          packages: path.resolve(__dirname, 'packages.html'),
          privacyPolicy: path.resolve(__dirname, 'privacy-policy.html'),
          termsConditions: path.resolve(__dirname, 'terms-conditions.html'),
          products: path.resolve(__dirname, 'products.html'),
          ecommerce: path.resolve(__dirname, 'ecommerce.html'),
          cms: path.resolve(__dirname, 'cms.html'),
          hrms: path.resolve(__dirname, 'hrms.html'),
          lms: path.resolve(__dirname, 'lms.html'),
          templates: path.resolve(__dirname, 'templates.html'),
        },
      },
    }
  };
});
