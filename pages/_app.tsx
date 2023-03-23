import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/base.scss";
import Analytics from "../analytics";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <Analytics>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-5RMNSVZG68`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-5RMNSVZG68');
              `,
          }}
        />
      </Head>
      <div className="container">
        <div className="header-and-content">
          <Header />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </Analytics>
  );
};

export default App;
