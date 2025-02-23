import "./globals.css";

export const metadata = {
  title: "Rishik Tech Projects",
  description: "These projects are created by Rishik Reddy",
};

// ✅ Correct way to define viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
