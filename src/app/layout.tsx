import { HeaderComponent } from "binaryCorner/component/header-component";
import "./globals.css";
import { FooterComponent } from "binaryCorner/component/footer-component";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <HeaderComponent /> */}
        <div className="flex flex-col min-h-screen">{children}</div>
        {/* <FooterComponent /> */}
      </body>
    </html>
  );
}
