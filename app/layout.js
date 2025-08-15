import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "M Asad Nazir | Fullstack & Frontend Developer",
  description:
    "Portfolio of M Asad Nazir, a Web Developer skilled in React.js, Next.js, Node.js, WordPress, PostgreSQL, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="M Asad Nazir, Web Developer, Frontend Developer, React.js, Next.js, Node.js, WordPress, Portfolio, JavaScript, Fullstack"
        />
        <meta name="author" content="M Asad Nazir" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asad.galaxydev.pk/" />
        <meta
          property="og:image"
          content="https://asad.galaxydev.pk/asad.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://asad.galaxydev.pk/asad.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data for SEO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "M Asad Nazir",
              url: "https://asad.galaxydev.pk/",
              sameAs: [
                "https://www.linkedin.com/in/masadnazir10/",
                "https://github.com/masadnazir1/",
                "https://x.com/masadnazir11",
                "https://www.facebook.com/masadnazir10",
              ],
              jobTitle: "Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Personal Projects",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
