const description =
  'Google Developer Student Clubs - USLS is a community of students who connect, learn, and grow together.';

const imgUrl =
  'https://user-images.githubusercontent.com/69457996/223909395-d151c5c8-56bd-44ac-bfa0-c4ddfd26b87f.png';

export default {
  title: 'Google Developer Student Clubs - USLS',
  description,
  openGraph: {
    type: 'website',
    url: 'https://gdscusls.live',
    title: 'Powered by Intellect, Driven by Values',
    description,
    images: [
      {
        url: imgUrl,
        width: 1920,
        height: 1080,
        alt: 'Google Developer Student Clubs - USLS',
        type: 'image/png',
      },
    ],
    site_name: 'Google Developer Student Clubs - USLS',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
};
