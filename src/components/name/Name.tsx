import { t } from 'i18next'
import { useAppSelector } from '../../store/hooks'
import "./Name.css"
import { useTranslation } from 'react-i18next'

export function Name() {
    const name = useAppSelector((state: any) => state.user?.name)
    const fullState = useAppSelector(state => state)
    const { t } = useTranslation();

    return (
        <div className={"p-10 bg-main-colour text-white font-bold mt-2"}>
            <p>
                {t("greeting")} {name || t("extra-prompt-text")}{name && "!"}
            </p>
            {name && <code>
                <hr className={"my-2"}/>
                <p>{t("result-text")}</p>
                <pre>{JSON.stringify(fullState, null, 2)}</pre>
            </code>}
        </div>
    )
}
