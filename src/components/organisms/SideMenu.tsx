import { useEffect, useRef, useState } from "react"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showProjectListAtom, showSideMenuAtom } from "@/store"
import { useStore } from "@nanostores/react"
import CategoryTitle from "../atoms/CategoryTitle"
import ProjectLink from "../atoms/ProjectLink"
import { BLOG_ENTRIES, POSTS, POST_CATEGORIES } from "@/config/posts"


function SideMenu({ blogEntries }: { blogEntries: any }) {
    const wrapperRef = useRef<any>(null)
    const ulRef = useRef<any>(null)
    const showSideMenu = useStore(showSideMenuAtom)
    const isShowingSideMenu = useStore(isShowingSideMenuAtom)
    const hideSideMenuAnimation = useStore(hideSideMenuAnimationAtom)
    const showProjectList = useStore(showProjectListAtom)

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


    return (
        <>
            <aside
                ref={wrapperRef}
                className={`${showSideMenu ? "!block showSideMenu" : "w-0.5"} ${hideSideMenuAnimation ? "hideSideMenu" : ""} overflow-auto  z-30 h-full max-h-[100vh] laptop:w-[26vw] desktop:w-[21rem] fixed top-0 left-0 bg-cerise  background_noise_overlay`}> {/*  overflow-y-scroll  */}
                <div className='mx-3 border-b-[1px] h-[54px]  border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 flex'>
                    {/* Empty Space for the logo */}
                </div>
                <div className={`fixed bg-cerise border-b-[1px] h-[54px]  top-0 left-0 laptop:w-[26vw] desktop:w-[21rem]  border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 flex justify-end`}>
                    {/* <div className="flex justify-around">
                        <div className="bg-violet flex items-center mb-2 mt-3 px-4 rounded-md mr-3 py-3">
                            <CategoryTitle text="text-platinum font-tommyMedium text-xl">Blog</CategoryTitle>
                        </div>
                    </div> */}
                </div>
                 
                <div className="">
                   
                    <ul className={`${showSideMenu ? 'relative' : 'hidden tablet:flex flex-col'}  p-1 pl-3  w-full ${showProjectList ? 'opacity-100' : 'opacity-0'} laptop:!opacity-100 duration-300 transition-all `}>
                        <div className="mt-2">
                            <ProjectLink to={`/portfolio`}>Introduction</ProjectLink>
                        </div>
                        {POST_CATEGORIES.map(cat => (
                            <div key={cat.title} className="my-2">
                                <CategoryTitle>{cat.title}</CategoryTitle>
                                {POSTS[cat.title].map(POST => <ProjectLink key={POST.title} to={`/portfolio/${POST.link}`}>{POST.title}</ProjectLink>)}
                            </div>
                        ))}
                        <div className="my-2">
                            <CategoryTitle>Blog</CategoryTitle>
                            {blogEntries.map((POST: any) => <ProjectLink key={POST.id} to={`/blog/${POST.slug}`}>{POST.data.title}</ProjectLink>)}
                        </div>
                        {/* <div className="absolute bottom-0 left-0 right-0">
                        <ul className="flex justify-between px-8 h-full py-2 my-2 font-chrono text-3xl text-raisinblack items-center">
                        <li className="my-4">Login</li>
                        <li className="my-4 text-7xl font-semibold">{'<'}</li>
                        </ul>
                        </div> */}
                    </ul>
                </div>
            </aside>

        </>
    )
}


export default SideMenu