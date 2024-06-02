interface childrenProps {
    children: JSX.Element | String;
}
function ProjectLink({ children }: childrenProps) {

    return (
        <a>
            <li className={`font-tommyRegular text-darkpurple indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:hover:text-snow hover:text-timberwolf`}>
                {children}
            </li>
        </a>
    )
}

export default ProjectLink