import { useAppSelector } from '../../store/hooks'

export function Name() {
    const name = useAppSelector((state: any) => state.user?.name)

    return (
        <p>
            hello {name || "human"}!
        </p>
    )
}
