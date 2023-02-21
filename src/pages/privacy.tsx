import { type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import Page from "../components/Page";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
    ])),
  },
});

const Privacy: NextPage = () => {
  return (
    <Page title="Privacy | OpenKind" description="Our privacy policy">
      <main>
        {/* 
            Here goes the content
            */}
      </main>
    </Page>
  );
};

export default Privacy;
