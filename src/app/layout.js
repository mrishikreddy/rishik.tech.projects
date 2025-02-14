import "./globals.css";
import Head from 'next/head';

export const metadata = {
  title: "Rishik Tech Projects",
  description: "This projects are created by Rishik Reddy" ,
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <div>
        {children}
      </div>
    </>
  );
}
