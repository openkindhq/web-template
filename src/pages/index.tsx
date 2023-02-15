import { type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nConfig from "../../next-i18next.config.mjs"


export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
      "de",
    ])),
  },
});


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OpenKind</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      </>
  );
};

export default Home;
