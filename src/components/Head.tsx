import { siteConfig } from '@/config/site';

interface HeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

const Head = ({
  title = siteConfig.name,
  description = siteConfig.description,
  ogImage = siteConfig.ogImage,
}: HeadProps) => {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return (
    <>
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MBLPJF9K');
      ` }} />
      {/* End Google Tag Manager */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {/* Preconnect to External Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            description: siteConfig.description,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo.png`,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: siteConfig.contact.phone,
              contactType: 'customer service',
              areaServed: 'BR',
              availableLanguage: 'Portuguese',
            },
            sameAs: [
              siteConfig.links.instagram,
              siteConfig.links.linkedin,
            ],
          }),
        }}
      />
    </>
  );
};

export default Head; 