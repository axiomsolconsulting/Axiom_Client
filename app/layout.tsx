import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header/Header"));
const Footer = dynamic(() => import("./components/Footer/Footer"));

const Red = Red_Hat_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-red-hat-display",
});

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Top IT Consulting Company for Innovative Digital Solutions",
    description: "Leading IT consulting company offering advanced digital solutions to optimize business performance with expert consulting and technology innovations.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/*  Schema Markup Code  */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Axiom",
                            url: "https://Axiom.com",
                            logo: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1728063186/Axiom_Logo_copy_n4y5vv.png",
                            description: "Decimal Solution provides full-stack development, QA engineering, and Unity expertise.",
                            founders: [
                                {
                                    "@type": "Person",
                                    name: "Dr. Tehseen Riaz Abbasi",
                                    jobTitle: "CEO",
                                },
                            ],
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Default Address",
                                addressLocality: "Islamabad",
                                addressRegion: "Pakistan",
                                postalCode: "44790",
                                addressCountry: "PK",
                            },
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+92-XXX-XXXXXXX",
                                contactType: "Customer Support",
                                areaServed: "PK and US",
                                availableLanguage: ["English", "Urdu"],
                            },
                            sameAs: ["https://www.facebook.com/decimalsolution", "https://www.instagram.com/decimalsolution", "https://www.linkedin.com/company/decimalsolution", "https://www.youtube.com/@decimalsolution"],
                        }),
                    }}
                />
            </head>

            <body className={`${geistSans.variable} ${geistMono.variable} ${Red.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
