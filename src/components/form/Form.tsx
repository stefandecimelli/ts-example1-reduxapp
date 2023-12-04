import { FormEvent, useState } from 'react';
import { setName } from '../../store/action/form-actions'
import { useAppDispatch } from '../../store/hooks';

export function Form() {
    const dispatch = useAppDispatch();
    const [nameInput, setNameIput] = useState("");

    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setName(nameInput))
    }
    return (
        <article>
            <form onSubmit={handleForm} className={"space-x-1"}>
                <label>Enter your name: </label>
                <input
                    type={"text"}
                    name={"name"}
                    className={"p-1"}
                    value={nameInput}
                    onChange={event => setNameIput(event.target.value)}
                />
                <button type={'submit'} className={"bg-zinc-300 py-1 px-5"}>Send</button>
            </form>
        </article>
    )
}
