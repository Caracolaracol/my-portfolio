import { NAV_NAMES } from "../../config/nav";
import { useRef } from "react";

function NavBar({ pathname }: any) {
  const refLinks = useRef<HTMLDivElement | any>(null);

  const handlerMouseLinks = (event: any) => {
    // BG ANIMATED OF FOOTER LINKS
    const { left, top, width, height }: any =
      event.target.getBoundingClientRect();
    refLinks.current.style.opacity = "1";
    refLinks.current.style.visibility = "visible";
    refLinks.current?.style.setProperty("--left", `${left}px`);
    refLinks.current?.style.setProperty("--top", `${top + 30}px`);
    refLinks.current?.style.setProperty("--width", `${width}px`);
    refLinks.current?.style.setProperty("--height", `${height - 20}px`);
  };

  const handlerLeaveLinks = () => {
    // Leave mouse of the footer links
    refLinks.current.style.opacity = "0";
    refLinks.current.style.visibility = "hidden";
  };

  const styles =
    "tablet:text-xs laptop:text-lg desktop:text-xl self-center text-center font-tommyregular hover:text-ocrelight dark:hover:text-ocrelight";

  return (
    <>
      <ul className="flex flex-row justify-evenly">
        {NAV_NAMES.map((s) => {
          const isActive = pathname.startsWith(s.direccion);

          return (
            <li
              key={s.name}
              className="laptop:max-w-[8rem] laptop:min-w-[4.8rem] transition-opacity-1 text-center"
            >
              <a
                onMouseEnter={handlerMouseLinks}
                onMouseLeave={handlerLeaveLinks}
                href={s.direccion}
                className={`${styles} ${isActive ? "!text-ocre dark:!text-ocre" : ""} `}
              >
                {s.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div
        ref={refLinks}
        className={` bg-cerise/20 invisible absolute
                            left-[var(--left)] top-[var(--top)]
                            z-[9] h-[var(--height)]
                            w-[var(--width)] rounded-md
                            opacity-0
                            transition-all
                            duration-300
                            ease-in-out
                            `}
      ></div>
    </>
  );
}

export default NavBar;