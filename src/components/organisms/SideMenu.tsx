import { useEffect, useRef, useState } from "react"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showProjectListAtom, showSideMenuAtom } from "@/store"
import { useStore } from "@nanostores/react"
import CategoryTitle from "../atoms/CategoryTitle"
import ProjectLink from "../atoms/ProjectLink"
import { BLOG_ENTRIES, POSTS, POST_CATEGORIES } from "@/config/posts"
import logo from '@/assets/logo.png'


function SideMenu({ blogEntries, pathname }: { blogEntries: any, pathname: string }) {
    const refLinks = useRef<HTMLDivElement | any>(null);
    const wrapperRef = useRef<any>(null)
    const ulRef = useRef<any>(null)
    const showSideMenu = useStore(showSideMenuAtom)
    const isShowingSideMenu = useStore(isShowingSideMenuAtom)
    const hideSideMenuAnimation = useStore(hideSideMenuAnimationAtom)
    const showProjectList = useStore(showProjectListAtom)
    console.log(pathname)
    // SHOW AND HIDE SIDE MENU HANDLER
    useEffect(() => {
        const sideMenuHandler = () => {
            if (isShowingSideMenu == true) {
                hideSideMenuAnimationAtom.set(true)
                setTimeout(() => {
                    showSideMenuAtom.set(false)
                    isShowingSideMenuAtom.set(false)
                    hideSideMenuAnimationAtom.set(false)
                }, 452);
            }
        }
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                sideMenuHandler()
            }
            if (ulRef.current && ulRef.current.contains(event.target)) {
                sideMenuHandler()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [wrapperRef, isShowingSideMenu]);
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

    return (
        <>
            <aside
                ref={wrapperRef}
                className={`${showSideMenu ? "!block showSideMenu" : "w-0.5"} ${hideSideMenuAnimation ? "hideSideMenu" : ""} overflow-auto  z-30 h-full max-h-[100vh] laptop:w-[26vw] desktop:w-[21rem] fixed top-0 left-0 `}> {/*  overflow-y-scroll  */}
                {/* <div className='mx-3 border-b-[1px] h-[54px]  border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 flex'>
                </div>
                <div className={`fixed bg-cerise border-b-[1px] h-[54px]  top-0 left-0 laptop:w-[26vw] desktop:w-[21rem]  border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 flex justify-end`}>
                    
                </div>
                  */}
                <div className="">
                    <div className="">
                        <ul className="flex justify-between w-[17rem] h-10 mx-auto  font-tommyMedium text-xl text-platinum items-center mt-8 widescreen:mt-10">
                            {/* <li className="">Login</li> */}
                            <a
                                href="/"
                                className="invisible laptop:visible z-50 mr-4 cursor-pointer"
                            >
                                <img
                                    src={logo.src}
                                    className="w-16 tablet:w-[3.9rem] drop-shadow-md transition-opacity-1"
                                    alt="caracol"
                                />
                            </a>
                            <a href="/blog" className={`${pathname.includes("/blog") && 'bg-cerisedark'} cursor-pointer p-2 rounded-t-md rounded-bl-md`}><li className="" onMouseEnter={handlerMouseLinks}
                                onMouseLeave={handlerLeaveLinks} >Blog</li></a>
                            <a href="/portfolio" className={`${pathname.includes("/portfolio") && 'bg-cerisedark cursor-pointer transition-colors'} p-2 rounded-t-md rounded-br-md`}><li className="" onMouseEnter={handlerMouseLinks}
                                onMouseLeave={handlerLeaveLinks} >Portfolio</li></a>
                            {/* <li className=" text-5xl font-semibold font-chrono">{'<'}</li> */}
                        </ul>
                        <div
                            ref={refLinks}
                            className={`bg-cerisedark absolute left-[var(--left)] top-[var(--top)] z-50 h-[var(--height)] w-[var(--width)] rounded-md opacity-25 backdrop-blur-lg transition-all duration-300 ease-in-out`}
                        ></div>
                    </div>
                    <ul className={`${showSideMenu ? 'relative' : 'hidden tablet:flex flex-col'}  p-1 pl-3  w-full ${showProjectList ? 'opacity-100' : 'opacity-0'} laptop:!opacity-100 duration-300 transition-all `}>

                        {pathname.includes("/portfolio") ? (<><div className="mt-2">
                            <ProjectLink to={`/portfolio`}>Introduction</ProjectLink>
                        </div>
                            {POST_CATEGORIES.map(cat => (
                                <div key={cat.title} className="my-2">
                                    <CategoryTitle>{cat.title}</CategoryTitle>
                                    {POSTS[cat.title].map(POST => <ProjectLink key={POST.title} to={`/portfolio/${POST.link}`}>{POST.title}</ProjectLink>)}
                                </div>
                            ))}</>)
                            : <div className="my-2">
                                <CategoryTitle>Blog</CategoryTitle>
                                {blogEntries.map((POST: any) => <ProjectLink key={POST.id} to={`/blog/${POST.slug}`}>{POST.data.title}</ProjectLink>)}
                            </div>
                        }

                    </ul>
                </div>
            </aside>

        </>
    )
}


export default SideMenu