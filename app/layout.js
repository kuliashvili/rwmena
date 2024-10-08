import "./styles/globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
