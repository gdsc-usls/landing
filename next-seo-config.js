const description =
  'Here at Google Developer Student Clubs - USLS, our focal point within all our engagements involving those associated with and invested in our ingenious ambitions is discerning, implementing, and meriting their technological proficiencies under the aegis of Google and our Alma Mater.';

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
