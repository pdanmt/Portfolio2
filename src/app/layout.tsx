import type { Metadata } from "next"
import { Inconsolata, Maven_Pro, Asap } from 'next/font/google'
import { Provider } from "@/components/ui/provider"

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  variable: '--font-maven-pro',
});

const asap = Asap({
  subsets: ['latin'],
  variable: '--font-asap',
});

export const metadata: Metadata = {
  title: "Portfólio - Pedro",
  description: "Portfólio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="avatar.png" type="image/x-icon" />
      </head>
      <body className={`${inconsolata.variable} ${mavenPro.variable} ${asap.variable}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
