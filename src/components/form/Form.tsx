import { FormEvent, useState } from 'react';
import { setName } from '../../store/action/form-actions'
import { useAppDispatch } from '../../store/hooks';
import "./Form.css"
import { useTranslation } from 'react-i18next';

export function Form() {
    const dispatch = useAppDispatch();
    const [nameInput, setNameIput] = useState("");
    const { t } = useTranslation();

    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setName(nameInput))
    }
    return (
        <article>
            <form onSubmit={handleForm} className={"space-x-1 text-main-colour"}>
                <label>{t("enter-your-name")}</label>
                <input
                    type={"text"}
                    name={"name"}
                    className={"p-1 rounded"}
                    value={nameInput}
                    onChange={event => setNameIput(event.target.value)}
                />
                <button type={'submit'} className={"py-1 px-5 rounded bg-second-colour text-white hover:bg-second-colour-100"}>
                    {t("send-button")}
                </button>
            </form>
        </article>
    )
}
