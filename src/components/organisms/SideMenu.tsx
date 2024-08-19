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
                className={`${showSideMenu ? "!block showSideMenu" : "w-0.5"} ${hideSideMenuAnimation ? "hideSideMenu" : ""} z-30  h-full max-h-[100vh] laptop:w-[26vw] desktop:w-[21rem] fixed top-0 left-0 bg-cerise background_noise_overlay`}> {/*  overflow-y-scroll  */}
                <div className='mx-3 border-b-[1px] h-[54px]  border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 flex'>
                    {/* Empty Space for the logo */}
                </div>

                <ul className={`${showSideMenu ? 'relative' : 'hidden tablet:block'} p-1 ml-3 mt-4 w-full ${showProjectList ? 'opacity-100' : 'opacity-0'} laptop:!opacity-100 duration-300 transition-all`}>
                    {POST_CATEGORIES.map(cat => (
                        <div key={cat.title} className="my-6">
                            <CategoryTitle>{cat.title}</CategoryTitle>
                            {POSTS[cat.title].map(POST => <ProjectLink key={POST.title} to={`/portfolio/${POST.link}`}>{POST.title}</ProjectLink>)}
                        </div>
                    ))}
                    <div className="my-6">
                        <CategoryTitle>Blog</CategoryTitle>
                        <ProjectLink to={`/portfolio`}>Introduction</ProjectLink>
                        {blogEntries.map((POST: any) => <ProjectLink key={POST.id} to={`/blog/${POST.slug}`}>{POST.data.title}</ProjectLink>)}
                    </div>
                </ul>
            </aside>

        </>
    )
}


export default SideMenu