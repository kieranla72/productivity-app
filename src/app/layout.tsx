import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { SideNav } from "./ui/SideNav";
import ThemeProviderParent from "./themeProviderParent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProviderParent>
            <SideNav>
              <body className={inter.className}>{children}</body>
            </SideNav>
          </ThemeProviderParent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
