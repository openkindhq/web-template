import { type AppType } from "next/app";

import { api } from "../utils/api";
import { appWithTranslation } from "next-i18next";

import nextI18nConfig from "../../next-i18next.config.mjs";


import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = api.withTRPC(I18nApp);

export default TRPCApp;
