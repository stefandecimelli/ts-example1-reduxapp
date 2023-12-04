import { useEffect, useState } from 'react';
import "./LocaleSwitcher.css"
import LocaleSwitcherButton from './components';
import { getLocaleFromSearchParams } from '../../lib/i18n';
import { useTranslation } from 'react-i18next';

export function LocaleSwitcher() {
    const [locale, setLocale] = useState(getLocaleFromSearchParams());
    const { i18n } = useTranslation();

    useEffect(() => { i18n.changeLanguage(locale) }, [locale, i18n])

    return (
        <div className={"flex justify-center gap-2 mt-2"}>
            <LocaleSwitcherButton locale={"en"} setLocale={setLocale} />
            <LocaleSwitcherButton locale={"fr"} setLocale={setLocale} />
        </div>
    )
}
