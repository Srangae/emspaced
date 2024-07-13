import Preloader from "@/layouts/Preloader";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";

export const metadata = {
  title: "Emspaced",
  description: "SQL service provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
