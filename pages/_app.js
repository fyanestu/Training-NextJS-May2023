import Navbar from "@app/src/components/Navbar";
import "@app/styles/globals.css";

import "@app/styles/sass/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <div className="app-main bg-fixed bg-white w-full min-h-screen">
      <Navbar logo={"/logo-bank-mega.png"} />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
