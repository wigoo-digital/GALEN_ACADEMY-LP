import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="RocGrotesk"
      rel="preload"
      href="/fonts/RocGrotesk_Regular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,

    <link
      key="RocGrotesk"
      rel="preload"
      href="/fonts/RocGrotesk_Medium.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,

    <link
      key="RocGrotesk"
      rel="preload"
      href="/fonts/RocGrotesk_Bold.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,
    <link
      key="RocGrotesk"
      rel="preload"
      href="/fonts/RocGrotesk_ExtraBold.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,

    <link
      key="RocGrotesk"
      rel="preload"
      href="/fonts/RocGrotesk_ExtraLight.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,

    <link
      key="RocGrotesk"
      rel="preload"
      href="/fonts/RocGrotesk_Light.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,

    <link
      key="RocGrotesk"
      rel="preload"
      href="/fonts/RocGrotesk_Thin.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,
  ]);
};
