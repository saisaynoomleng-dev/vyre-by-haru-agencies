import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../app/fonts/inter/Inter_18pt-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../app/fonts/inter/Inter_18pt-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../app/fonts/inter/Inter_18pt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/fonts/inter/Inter_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/inter/Inter_18pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/inter/Inter_18pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/inter/Inter_18pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/fonts/inter/Inter_18pt-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../app/fonts/inter/Inter_18pt-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

export const chivoMono = localFont({
  src: [
    {
      path: '../app/fonts/chivo_mono/ChivoMono-Thin.ttf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../app/fonts/chivo_mono/ChivoMono-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../app/fonts/chivo_mono/ChivoMono-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../app/fonts/chivo_mono/ChivoMono-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/chivo_mono/ChivoMono-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../app/fonts/chivo_mono/ChivoMono-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../app/fonts/chivo_mono/ChivoMono-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../app/fonts/chivo_mono/ChivoMono-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../app/fonts/chivo_mono/ChivoMono-Black.ttf',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--font-chivo-mono',
});
