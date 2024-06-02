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
            }, 250);
        }, []) */


    const handlerSide = () => {
        if (isShowingSideMenu == false) {
            showSideMenuAtom.set(true)
            isShowingSideMenuAtom.set(true)
        } else {
            hideSideMenuAnimationAtom.set(true)
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

                <ul className={`p-1 mt-4 w-full ${showProjectList ? 'opacity-100' : 'opacity-0'}  duration-300 transition-opacity`}>
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
                {/* <div className="pl-[1.2rem] pt-3 laptop:pt-[2.5rem] mb-4 rounded-tr-sm rounded-br-sm hide_scrollbar "> 
                <div onClick={handlerSide} className="laptop:hidden absolute top-2 flex flex-col items-center pl-[15rem] group">
                <div className='flex justify-center filtromorado w-8 h-8 tablet:w-8 tablet:h-8 items-center transition-colors cursor-pointer rounded-full -translate-x-[1px]'>
                <p className='font-tommybold font-black text-lg tablet:text-lg svg group-hover:text-cerise'>{` } `}</p>
                </div>
                <div className="cursor-pointer min-w-[59px]">
                <p className='font-tommyregular text-[0.6rem] tablet:text-[0.6rem] opacity-80 antialiased text-center text-snow dark:text-cerise transition-colors tracking-wider '>Close</p>
                </div>
                </div>
                
                <div ref={ulRef} className="flex group ">
                <p className="hidden self-end text-cerise opacity-90 group-hover:animate-bounce">▼</p>
                </div>
            </div> */}


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