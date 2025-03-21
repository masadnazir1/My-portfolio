import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "M Asad | Portfolio",
  description: "Personal Projects Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
