import { FormEvent, useState } from 'react';
import { setName } from '../../store/action/form-actions'
import { useAppDispatch } from '../../store/hooks';
import "./Form.css"

export function Form() {
    const dispatch = useAppDispatch();
    const [nameInput, setNameIput] = useState("");

    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setName(nameInput))
    }
    return (
        <article>
            <form onSubmit={handleForm} className={"space-x-1 text-main-colour"}>
                <label>Enter your name: </label>
                <input
                    type={"text"}
                    name={"name"}
                    className={"p-1 rounded"}
                    value={nameInput}
                    onChange={event => setNameIput(event.target.value)}
                />
                <button type={'submit'} className={"py-1 px-5 rounded bg-second-colour text-white"}>
                    Send
                </button>
            </form>
        </article>
    )
}
