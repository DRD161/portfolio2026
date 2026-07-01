import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'SpaceMono',
      cssVariable: '--font-space-mono',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/SpaceMono-Regular.ttf'],
            weight: '400',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/SpaceMono-Bold.ttf'],
            weight: '700',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'BarlowCondensed',
      cssVariable: '--font-barlow-condensed',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/BarlowCondensed-Regular.ttf'],
            weight: '400',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/BarlowCondensed-SemiBold.ttf'],
            weight: '600',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/BarlowCondensed-Bold.ttf'],
            weight: '700',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/BarlowCondensed-Black.ttf'],
            weight: '900',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Barlow',
      cssVariable: '--font-barlow',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Barlow-Light.ttf'],
            weight: '300',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Barlow-Regular.ttf'],
            weight: '400',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Barlow-Medium.ttf'],
            weight: '500',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
