'use client'
import Preloader from "@/layouts/Preloader";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";
import {MetadataProvider, useMetadata} from "@/context/MetadataContext";

export default function RootLayout({ children }) {
    return (
        <MetadataProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
        </MetadataProvider>
    );
}

function RootLayoutContent({ children }) {
    const { metadata } = useMetadata();

    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </head>
        <body>{children}</body>
        </html>
    );
}
