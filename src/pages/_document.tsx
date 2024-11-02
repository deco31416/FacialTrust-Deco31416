// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Poppins Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Título personalizado */}
        <title>FacialTrustPay - By Deco31416</title>

        {/* SEO Metadata */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="FacialTrustPay: This MVP facilitates micropayments through facial recognition and blockchain technology, ensuring fast and secure transactions. It prioritizes user privacy by not storing biometric data, generating a unique facial hash that allows identification without saving sensitive information."
        />
        <meta
          name="keywords"
          content="MVP, micropagos, reconocimiento facial, blockchain, transacciones rápidas, seguridad, privacidad, hash facial, tecnología avanzada, pagos digitales, reconocimiento biométrico, desarrollo de DApps, innovación en pagos, micropayments, facial recognition, fast transactions, advanced technology, digital payments, biometric recognition, DApp development, payment innovation"
        />
        <meta name="author" content="Deco31416" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media Sharing */}
        <meta property="og:title" content="FacialTrustPay - Secure Micropayments with Facial Recognition in Blockchain" />
        <meta
          property="og:description"
          content="The solution prioritizes user privacy by not storing biometric data, generating a unique facial hash that identifies users without saving sensitive information."
        />
        <meta property="og:image" content="https://res.cloudinary.com/dtwcswdd8/image/upload/v1730538257/Facial_Trust_Pay_bat6ro.png" />
        <meta property="og:url" content="https://deco31416.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FacialTrustPay - By Deco31416" />
        <meta
          name="twitter:description"
          content="The solution prioritizes user privacy by not storing biometric data, generating a unique facial hash that identifies users without saving sensitive information."
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/dtwcswdd8/image/upload/v1730538257/Facial_Trust_Pay_bat6ro.png" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
            `,
          }}
        />
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
