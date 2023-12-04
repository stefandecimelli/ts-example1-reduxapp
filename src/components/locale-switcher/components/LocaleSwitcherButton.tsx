import { Dispatch, SetStateAction } from 'react'
import { setLocaleInSearchParams } from '../../../lib/i18n';
import "./LocaleSwitcherButton.css"

export function LocaleSwitcherButton({
    locale, setLocale
}: {
    locale: string, setLocale: Dispatch<SetStateAction<string>>
}) {
    const setLocaleInUrl = async (newLocale: string) => {
        setLocaleInSearchParams(newLocale);
        setLocale(newLocale);
    }
    return (
        <button
            onClick={e => setLocaleInUrl(locale)}
            className={"bg-second-colour rounded text-white px-2 pb-1"}
        >{locale}
        </button>
    )
}
