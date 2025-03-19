"use client";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <main
      className={`flex flex-col text-center items-center ${className} justify-center p-24`}
    >
      {children}
    </main>
  );
}
