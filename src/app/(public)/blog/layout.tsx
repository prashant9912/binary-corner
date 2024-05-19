import { SidebarComponent } from "binaryCorner/component/sidebar-component";

export default function BlogLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div>
      <SidebarComponent>{children}</SidebarComponent>
    </div>
  );
}
