import { type AppType } from "next/app";

import { api } from "../utils/api";
import { appWithTranslation } from "next-i18next";

import nextI18nConfig from "../../next-i18next.config.mjs";

import { Red_Hat_Display, DM_Sans } from "@next/font/google";

const rhd = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-rhd",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
  weight: "400",
});

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${rhd.variable} ${dm_sans.variable} font-main`}>
      <Component {...pageProps} />
    </main>
  );
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = api.withTRPC(I18nApp);

export default TRPCApp;
