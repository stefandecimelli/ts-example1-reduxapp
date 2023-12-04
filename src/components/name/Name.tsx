import { useAppSelector } from '../../store/hooks'
import "./Name.css"

export function Name() {
    const name = useAppSelector((state: any) => state.user?.name)
    const fullState = useAppSelector(state => state)

    return (
        <div className={"p-10 bg-main-colour text-white font-bold mt-2"}>
            <p>
                Hello {name || "human. Please enter your name above."}{name && "!"}
            </p>
            {name && <code>
                <hr className={"my-2"}/>
                <p>Here is what your state looks like:</p>
                <pre>{JSON.stringify(fullState, null, 2)}</pre>
            </code>}
        </div>
    )
}
