import { type NextPage } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
    ])),
  },
});

const Privacy: NextPage = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-between overflow-x-hidden bg-neutral-50 text-neutral-900 dark:bg-darkBg dark:text-white">
        <div className="flex-1">
          <NavBar />
          <main className="h-screen"></main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
