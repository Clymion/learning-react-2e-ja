import { ReactNode } from 'react';

interface SiteLayoutProps {
  children: ReactNode;
  menu?: ReactNode;
}

export default function SiteLayout({
  children,
  menu,
}: SiteLayoutProps) {
  return (
    <div className="site-container">
      <div className="menu">{menu}</div>
      <div className="content">{children}</div>
    </div>
  );
}
