import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

const Document = () => {
  return (
    <Html>
      <Head>
        <title>
          Imersão Esmeralda - Worksession de Teatro Musical | Proart Produções
        </title>
        <link rel="stylesheet" href="/styles/fonts.css" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
