interface childrenProps {
    children: JSX.Element | String;
    to: string;
}
function ProjectLink({ children, to }: childrenProps) {

    return (
        <a href={to}>
            <li className={`font-tommyRegular cursor-pointer text-platinum laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:hover:text-snow hover:text-timberwolf`}>
                {children}
            </li>
        </a>
    )
}

export default ProjectLink