import { useTranslation } from 'react-i18next';
import './App.css';
import Form from './form';
import Name from './name';
import { useEffect, useState } from 'react';
import { getLocaleFromSearchParams, setLocaleInSearchParams } from '../lib/i18n';

export function App() {
  const [locale, setLocale] = useState(getLocaleFromSearchParams());
  const { t, i18n } = useTranslation();

  useEffect(() => { i18n.changeLanguage(locale) }, [locale])

  const setLocaleInUrl = async (newLocale: string) => {
    setLocaleInSearchParams(newLocale);
    setLocale(newLocale);
  }

  return (
    <main>
      <article className="App p-2 flex justify-center flex-col bg-background-colour">
        <h1 className={"text-header text-2xl font-bold mb-4"}>
          {t("title")}
        </h1>
        <Form />
        <Name />
      </article>
      <div className={"flex justify-center gap-2 mt-2"}>
        <button onClick={e => setLocaleInUrl("en")} className={"bg-second-colour rounded text-white px-2 py-1 hover:bg-second-colour-100"}>en</button>
        <button onClick={e => setLocaleInUrl("fr")} className={"bg-second-colour rounded text-white px-2 py-1 "}>fr</button>
      </div>
    </main>
  );
}
