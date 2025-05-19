// app/layout.tsx
import "@/app/globals.scss";
import Layout from "@/components/shared/layout";
import PixelScripts from "@/components/pixelScripts";
import { PostHogProvider } from "@/components/PostHogProvider";
import Image from "next/image";

// if (typeof window !== "undefined") {
//   posthog.init("phc_ydJSSBZlbNQtZVwWKV62FnTJUWHmctjFI3oGyUYMtSH", {
//     api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
//     person_profiles: 'identified_only',
//     loaded: (ph) => {
//       if (process.env.NODE_ENV === "development") ph.debug();
//     },
//   });
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>

   {/* Meta Tags for SEO */}
   <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Own a Tabla Indian Restaurant Franchise in USA. Explore the best food franchise opportunities with a proven brand. Buy a franchise & start your success today!" />
        <meta name="author" content="Tabla Cuisine" />
        <meta name="keywords" content="restaurant franchise, indian restaurant franchise in usa, indian restaurant franchise, indian food franchise in usa, food franchises, food franchise opportunities, best food franchises to own, indian franchise in usa, best restaurant franchises to own, tabla restaurant franchise, tabla franchise, buy a franchise" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Indian Restaurant Franchise in USA | Tabla Franchise Opportunity" />
        <meta property="og:description" content="Own a Tabla Indian Restaurant Franchise in USA. Explore the best food franchise opportunities with a proven brand. Buy a franchise & start your success today!" />
        <meta property="og:image" content="/default-og-image.jpg" />
        {/* <meta property="og:url" content="https://winterpark.tablacuisine.com/" /> */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indian Restaurant Franchise in USA | Tabla Franchise Opportunity" />
        <meta name="twitter:description" content="Own a Tabla Indian Restaurant Franchise in USA. Explore the best food franchise opportunities with a proven brand. Buy a franchise & start your success today!" />
        <meta name="twitter:image" content="/default-og-image.jpg" />

        {/* Title */}
        <title>Indian Restaurant Franchise in USA | Tabla Franchise Opportunity</title>

        <link rel="canonical" href="https://www.tablafranchise.com" />

        {/* Meta Pixel Base Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1381085842889541');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1381085842889541&ev=PageView&noscript=1"
            alt="Fb pixel"
          />
        </noscript>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3WH3RV9Q65"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3WH3RV9Q65');
            `,
          }}
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
          rel="stylesheet"
        />
      </head>
      <body>
        <PixelScripts />
        <PostHogProvider>
          <Layout>
            {children}
          </Layout>
        </PostHogProvider>
      </body>
    </html>
  );
}
