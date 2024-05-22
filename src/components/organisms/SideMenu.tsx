import { useEffect, useRef } from "react"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showSideMenuAtom } from "@/store"
import { useStore } from "@nanostores/react"


function SideMenu() {
    const wrapperRef = useRef<any>(null)
    const ulRef = useRef<any>(null)
    const showSideMenu = useStore(showSideMenuAtom)
    const isShowingSideMenu = useStore(isShowingSideMenuAtom)
    const hideSideMenuAnimation = useStore(hideSideMenuAnimationAtom)


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
        <aside
            ref={wrapperRef}
            className={`${showSideMenu ? "!block showsidemenu " : ""} ${hideSideMenuAnimation ? "hidesidemenu" : ""
                } hidden  hide_scrollbar laptop:block  w-[20rem] h-full max-h-[100vh] laptop:w-[26vw] desktop:w-[21rem] fixed top-0 left-0 z-30 bg-cerise/80 background_noise`}> {/*  overflow-y-scroll  */}
            <div className='mx-3 border-b-[1px] h-[54px] border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 z-[99] flex'>
                {/* Empty Space for the logo */}
            </div>

            <div className="pl-[1.2rem] pt-3 laptop:pt-[2.5rem] mb-4 rounded-tr-sm rounded-br-sm hide_scrollbar "> {/*  overflow-y-scroll  */}
                <div onClick={handlerSide} className="laptop:hidden absolute top-2 flex flex-col items-center pl-[15rem] group">
                    <div className='flex justify-center filtromorado w-8 h-8 tablet:w-8 tablet:h-8 items-center transition-colors cursor-pointer rounded-full -translate-x-[1px]'>
                        <p className='font-tommybold font-black text-lg tablet:text-lg svg group-hover:text-cerise'>{` } `}</p>
                    </div>
                    <div className="cursor-pointer min-w-[59px]">
                        <p className='font-tommyregular text-[0.6rem] tablet:text-[0.6rem] opacity-80 antialiased text-center text-snow dark:text-cerise transition-colors tracking-wider '>Close</p>
                    </div>
                </div>

                <div ref={ulRef} className="flex group">
                    {/* <MenuList pathname={pathname} params={params} /> */}
                    <p className="hidden self-end text-cerise opacity-90 group-hover:animate-bounce">▼</p>
                </div>
            </div>
        </aside>
    )
}


export default SideMenu