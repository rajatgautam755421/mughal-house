// Root layout is intentionally minimal: the real <html> + <body> live in
// app/[locale]/layout.tsx so that `lang` and `dir` can follow the active
// locale. Next still requires app/layout.tsx to exist, so this just
// forwards children through.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
