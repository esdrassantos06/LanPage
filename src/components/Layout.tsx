'use client';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col text-center items-center justify-center p-24">{children}</main>
  );
}