import { useTranslation } from 'react-i18next';
import './App.css';
import Form from './form';
import Name from './name';
import LocaleSwitcher from './locale-switcher';

export function App() {
  const { t } = useTranslation();

  return (
    <main>
      <article className="App p-2 flex justify-center flex-col bg-background-colour">
        <h1 className={"text-header text-2xl font-bold mb-4"}>
          {t("title")}
        </h1>
        <Form />
        <Name />
      </article>
      <LocaleSwitcher />
    </main>
  );
}
