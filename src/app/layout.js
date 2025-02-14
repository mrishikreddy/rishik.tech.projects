import "./globals.css";

export const metadata = {
  title: "Rishik Tech Projects",
  description: "This projects are created by Rishik Reddy" ,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
