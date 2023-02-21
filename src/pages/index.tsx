import { type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import FAQ from "../components/FAQ";
import Page from "../components/Page";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
    ])),
  },
});

const Home: NextPage = () => {
  return (
    <Page title="OpenKind" description="Home page">
      <div>
        <main></main>
        <FAQ />
      </div>
    </Page>
  );
};

export default Home;
