import { HeaderComponent } from "binaryCorner/component/header-component";
import { FooterComponent } from "binaryCorner/component/footer-component";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderComponent />
      <div className="flex flex-col min-h-screen">{children}</div>
      <FooterComponent />
    </>
  );
}
