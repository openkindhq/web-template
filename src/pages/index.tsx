import { type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import NavBar from "../components/NavBar";
import Faq from "../components/FAQ";
import Footer from "../components/Footer";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
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
      <div className="flex h-full flex-col justify-between overflow-x-hidden bg-neutral-50 text-neutral-900 dark:bg-darkBg dark:text-white">
        <div className="flex-1">
          <NavBar />
          <main className="h-screen"></main>
        </div>
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Home;
