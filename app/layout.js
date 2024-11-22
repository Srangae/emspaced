// app/layout.js
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";

export const metadata = {
    title: "Default Title",
    description: "Default description",
};

export default function RootLayoutContent({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
