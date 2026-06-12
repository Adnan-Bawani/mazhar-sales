import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingUI from "@/components/ui/FloatingUI";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mazhar Decent Electricals | Premium Appliance Repair Since 1980",
  description: "Mumbai's Trusted Appliance Repair Experts Since 1980. We repair Gas Stoves, Washing Machines, Refrigerators, Microwaves, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrolling>
            <div className="min-h-screen w-full relative">
              <div className="relative z-10">
                {children}
              </div>
            </div>
            <FloatingUI />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
