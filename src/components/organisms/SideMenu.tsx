import { useEffect, useRef, useState } from "react"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showSideMenuAtom } from "@/store"
import { useStore } from "@nanostores/react"
import CategoryTitle from "../atoms/CategoryTitle"
import ProjectLink from "../atoms/ProjectLink"


function SideMenu() {
    const wrapperRef = useRef<any>(null)
    const ulRef = useRef<any>(null)
    const showSideMenu = useStore(showSideMenuAtom)
    const isShowingSideMenu = useStore(isShowingSideMenuAtom)
    const hideSideMenuAnimation = useStore(hideSideMenuAnimationAtom)
    const [showProjectList, setShowProjectlist] = useState(false)

    /*     useEffect(() => {
            setTimeout(() => {
                setShowProjectlist(true)
            }, 220);
    
        }, []) */

    const handlerSide = () => {
        if (isShowingSideMenu == false) {
            showSideMenuAtom.set(true)
            isShowingSideMenuAtom.set(true)
            setTimeout(() => {
                setShowProjectlist(true)
            }, 220);
        } else {
            hideSideMenuAnimationAtom.set(true)
            setShowProjectlist(false)
            setTimeout(() => {
                showSideMenuAtom.set(false)
                isShowingSideMenuAtom.set(false)
                hideSideMenuAnimationAtom.set(false)
            }, 452);
        }
    }


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
                className={`${showSideMenu ? "!block showSideMenu" : "w-0.5"} ${hideSideMenuAnimation ? "hideSideMenu" : ""} z-30  h-full max-h-[100vh] laptop:w-[26vw] desktop:w-[21rem] fixed top-0 left-0 bg-cerise background_noise`}> {/*  overflow-y-scroll  */}
                <div className='mx-3 border-b-[1px] h-[54px]  border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 flex'>
                    {/* Empty Space for the logo */}
                </div>

                <ul className={`p-1 mt-4 w-full ${showProjectList ? 'opacity-100' : 'opacity-0'} laptop:!opacity-100 duration-300 transition-opacity`}>
                    <div className="my-6">
                        <CategoryTitle>Web</CategoryTitle>
                        <ProjectLink>Language Spin</ProjectLink>
                        <ProjectLink>IronPlant.cl</ProjectLink>
                    </div>
                    <div className="my-6">
                        <CategoryTitle>Apps</CategoryTitle>
                        <ProjectLink>Giftoky</ProjectLink>
                        <ProjectLink>Torchnd</ProjectLink>
                    </div>
                    <div className="my-6">
                        <CategoryTitle>Videos</CategoryTitle>
                        <ProjectLink>Bichos</ProjectLink>
                        <ProjectLink>Cruzando Ríos / Saltando Piedras</ProjectLink>
                        <ProjectLink>La cena está lista</ProjectLink>
                        <ProjectLink>Quebrada radiocontrol</ProjectLink>
                        <ProjectLink>Asamblea de jueces</ProjectLink>
                    </div>
                    <div className="my-6">
                        <CategoryTitle>Art</CategoryTitle>
                        <ProjectLink>Music Projects</ProjectLink>
                        <ProjectLink>Macro Photography</ProjectLink>
                        <ProjectLink>Arts</ProjectLink>
                    </div>
                    <div className="my-6">
                        <CategoryTitle>Blog</CategoryTitle>
                        <ProjectLink>Introducción</ProjectLink>
                        <ProjectLink>Entradas más antiguas</ProjectLink>
                    </div>
                </ul>
            </aside>
            <button onClick={handlerSide} className={`${showSideMenu ? "moveSideMenuButton translate-x-[274px] " : "translate-x-[0px] "} ${hideSideMenuAnimation ? "hideSideMenuButton " : ""} left-0 z-50 fixed laptop:hidden cursor-pointer`}>
                <div className='flex justify-center rounded-r-md bg-cerise hover:bg-violet active:bg-violet w-5 h-8 tablet:w-5 tablet:h-8 items-center transition-colors cursor-pointer'>
                    <p className='font-tommyBold font-black text-lg tablet:text-lg '>{` } `}</p>
                </div>
            </button>
        </>
    )
}


export default SideMenu