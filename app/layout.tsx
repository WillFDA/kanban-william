import Providers from "./Providers";
import ThemeSwitcher from "./ThemeSwitcher";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanban",
  description: "Kanban app by William",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
