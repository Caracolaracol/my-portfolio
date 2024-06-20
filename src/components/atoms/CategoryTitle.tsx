
interface childrenProps {
    children: JSX.Element | String;
}

export default function CategoryTitle({ children }: childrenProps) {
    return (
        <div className="my-1">
            <div className="">
                <h2 className="font-chrono text-[1.9rem] antialiased leading-4 tracking-wider text-dark">{children}</h2>
            </div>
        </div>
    )
}