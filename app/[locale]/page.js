import TranslationsProvider from "@/components/translate/translation-provider";
import initTranslations from "../i18n";
import classes from "./page.module.css";
import CategoriesPage from "@/components/categories/categories";
import Footer from "@/components/footer/footer";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <header className="inline gap-12 text-center items-center">
          <div className={classes.hero}>
            <h1>{t("header")}</h1>
            <p>{t("subtitle")}</p>
          </div>
        </header>
        <main>
          <CategoriesPage></CategoriesPage>
        </main>
        <Footer></Footer>
      </TranslationsProvider>
    </>
  );
}
