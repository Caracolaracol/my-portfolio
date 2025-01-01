import { useEffect, useRef } from "react"
import { useStore } from "@nanostores/react"
import CategoryTitle from "../atoms/CategoryTitle"
import ProjectLink from "../atoms/ProjectLink"
import {  POSTS, POST_CATEGORIES } from "@/config/posts"
import logo from '@/assets/logo.png'
import { showProjectListAtom, stateSideMenuAtom } from "@/store"


function SideMenu({ blogEntries, pathname }: { blogEntries: any, pathname: string }) {
    const refLinks = useRef<HTMLDivElement | any>(null);
    const wrapperRef = useRef<any>(null)
    const ulRef = useRef<any>(null)
    const stateSideMenu = useStore(stateSideMenuAtom)
    const showProjectList = useStore(showProjectListAtom) 

    useEffect(() => {
        stateSideMenuAtom.set('hidden')
    },[])
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                sideMenuHandler(true)
            }
            if (ulRef.current && ulRef.current.contains(event.target)) {
                sideMenuHandler(true)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [wrapperRef, stateSideMenu]);
    //

    const handlerMouseLinks = (event: any) => {
        // BG ANIMATED OF FOOTER LINKS
        const { left, top, width, height }: any =
            event.target.getBoundingClientRect();
        refLinks.current.style.opacity = "1";
        refLinks.current.style.visibility = "visible";
        refLinks.current?.style.setProperty("--left", `${left}px`);
        refLinks.current?.style.setProperty("--top", `${top + 28}px`);
        refLinks.current?.style.setProperty("--width", `${width}px`);
        refLinks.current?.style.setProperty("--height", `${height - 22}px`);
    };

    const handlerLeaveLinks = () => {
        // Leave mouse of the footer links
        refLinks.current.style.opacity = "0";
        refLinks.current.style.visibility = "hidden";
    };

    const sideMenuHandler = (fromOutside = false) => {
      if (stateSideMenu === "hidden" && fromOutside == false) {
        stateSideMenuAtom.set("opening");
        setTimeout(() => {
          stateSideMenuAtom.set("open");
          showProjectListAtom.set(true);
        }, 452);
      } else if (stateSideMenu == 'open') {
        stateSideMenuAtom.set("hiding");
        showProjectListAtom.set(false);
        setTimeout(() => {
          stateSideMenuAtom.set("hidden");
        }, 452);
      }
    };

    return (
        <>
            <aside
                ref={wrapperRef}
                className={`
                ${stateSideMenu=='opening' && 'bg-raisinblack showSideMenu'} 
                ${stateSideMenu=='hiding' && 'hideSideMenu bg-raisinblack'} 
                ${stateSideMenu=='open' && 'block opacity-100  bg-raisinblack'} 
                ${stateSideMenu=='hidden' && 'w-0.5 bg-opacity-0'} 
                overflow-auto  z-30 h-full max-h-[100vh] laptop:w-[26vw] desktop:w-[21rem] fixed top-0 left-0 `}> {/*  overflow-y-scroll  */}
                <div className="">
                    <div className="">
                        <ul className="flex justify-between w-[17rem] h-10 mx-auto  font-tommyMedium text-xl text-platinum items-center mt-8 widescreen:mt-10">
                            <a
                                href="/"
                                className=" ml-4 z-50 tablet:mr-4 cursor-pointer"
                            >
                                <img
                                    src={logo.src}
                                    className="w-16 tablet:w-[3.9rem] drop-shadow-md transition-opacity-1 z-50"
                                    alt="caracol"
                                />
                            </a>
                            <a href="/blog" className={`${pathname.includes("/blog") && 'bg-cerisedark'} cursor-pointer p-2 rounded-t-md rounded-bl-md`}><li className="" onMouseEnter={handlerMouseLinks}
                                onMouseLeave={handlerLeaveLinks} >Blog</li></a>
                            <a href="/portfolio" className={`${pathname.includes("/portfolio") && 'bg-cerisedark cursor-pointer transition-colors'} p-2 mr-4 tablet:mr-2 laptop:mr-0 rounded-t-md rounded-br-md`}><li className="" onMouseEnter={handlerMouseLinks}
                                onMouseLeave={handlerLeaveLinks} >Portfolio</li></a>
                        </ul>
                        <div
                            ref={refLinks}
                            className={`bg-cerisedark absolute left-[var(--left)] top-[var(--top)] z-50 h-[var(--height)] w-[var(--width)] rounded-md opacity-25 backdrop-blur-lg transition-all duration-300 ease-in-out`}
                        ></div>
                    </div>
                    <ul className={`${stateSideMenu === 'opening' || stateSideMenu === 'open' || stateSideMenu == 'hiding' ? 'relative' : 'hidden tablet:flex flex-col'}  p-1 pl-3  w-full ${showProjectList ? 'opacity-100' : 'opacity-0'} laptop:!opacity-100 duration-300 transition-all `}>

                        {pathname.includes("/portfolio") ? (<><div className="mt-2">
                            <ProjectLink to={`/portfolio`} sideMenuHandler={sideMenuHandler}>Introduction</ProjectLink>
                        </div>
                            {POST_CATEGORIES.map(cat => (
                                <div key={cat.title} className="my-2">
                                    <CategoryTitle>{cat.title}</CategoryTitle>
                                    {POSTS[cat.title].map(POST => <ProjectLink key={POST.title} sideMenuHandler={sideMenuHandler} to={`/portfolio/${POST.link}`}>{POST.title}</ProjectLink>)}
                                </div>
                            ))}</>)
                            : <div className="my-2">
                                <CategoryTitle>Blog</CategoryTitle>
                                {blogEntries.map((POST: any) => <ProjectLink key={POST.id} sideMenuHandler={sideMenuHandler} to={`/blog/${POST.slug}`}>{POST.data.title}</ProjectLink>)}
                            </div>
                        }

                    </ul>
                </div>
            </aside>

        </>
    )
}


export default SideMenu