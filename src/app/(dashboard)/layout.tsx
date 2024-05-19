import { SidebarComponent } from "binaryCorner/component/sidebar-component";

export default function DashboardLayout({
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
