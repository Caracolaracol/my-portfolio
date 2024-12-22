interface childrenProps {
  children: JSX.Element | String;
  to: string;
  sideMenuHandler: () => void;
}
function ProjectLink({ children, sideMenuHandler, to }: childrenProps) {
  return (
    <a
      href={to}
      onClick={async (event) => {
        event.preventDefault();
        sideMenuHandler();
        if (window.innerWidth < 1024) {
          await new Promise((resolve) => setTimeout(resolve, 452));
        }
        window.location.href = to;
      }}
    >
      <li
        className={`font-tommyRegular cursor-pointer text-platinum laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:hover:text-snow hover:text-timberwolf`}
      >
        {children}
      </li>
    </a>
  );
}

export default ProjectLink;
