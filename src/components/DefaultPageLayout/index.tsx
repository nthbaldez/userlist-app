import { ReactNode } from "react";

interface DefaultPageLayoutProps {
  children: ReactNode;
}

export default function DefaultPageLayout({ children }: DefaultPageLayoutProps) {
  return (
    <div className="flex-1 column">
      {children}
    </div>
  )
}
