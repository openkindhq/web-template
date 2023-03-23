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
      <main className="flex justify-center py-24 text-neutral-300">
        <div className="w-2/3 flex justify-center">

        OpenKind does not participate in sharing or selling user data to third parties under any circumstances.
        <br/>
        By using LongProjectName, you agree to this privacy policy. For inquiries, please contact us at info@openkind.org

        </div>
          
      </main>
    </Page>
  );
};

export default Privacy;
