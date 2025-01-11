import { useEffect, useRef, useState } from 'react';
import { NAV_NAMES } from '@/config/nav';
import { useStore } from '@nanostores/react';
import { hideNavBarMenuAtom, isShowingNavBarMenuAtom, showNavBarMenuAtom } from '@/store';

const styles = 'tablet:text-xl text-snow hover:text-ocrelight dark:hover:text-ocrelight self-center text-center font-tommyregular'

function NavBarMobile({ pathname }: { pathname: String | undefined }) {
    const [mounted, setMounted] = useState(false)
    const wrapperNavBarRef = useRef<any>(null)
    const ulNavBarRef = useRef<any>(null)
    const showNavBar = useStore(showNavBarMenuAtom)
    const isShowingNavBar = useStore(isShowingNavBarMenuAtom)
    const hideNavBarAnimation = useStore(hideNavBarMenuAtom)

    const themeHandler = () => {

    }
    const languageHandler = () => {

    }

    const handlerNavBar = () => {
        if (isShowingNavBar == false) {
            showNavBarMenuAtom.set(true)
            isShowingNavBarMenuAtom.set(true)
        } else {
            hideNavBarMenuAtom.set(true)
            setTimeout(() => {
                showNavBarMenuAtom.set(false)
                isShowingNavBarMenuAtom.set(false)
                hideNavBarMenuAtom.set(false)
            }, 452);
        }
    }

    useEffect(() => {
        setMounted(true)
        // SHOW AND HIDE NAVBAR HANDLER
        const sideMenuHandler = () => {
            if (isShowingNavBar == true) {
                hideNavBarMenuAtom.set(true)
                setTimeout(() => {
                    showNavBarMenuAtom.set(false)
                    isShowingNavBarMenuAtom.set(false)
                    hideNavBarMenuAtom.set(false)
                }, 452);
            }
        }
        function handleClickOutside(event: any) {
            if (wrapperNavBarRef.current && !wrapperNavBarRef.current.contains(event.target)) {
                sideMenuHandler()
            }
            if (ulNavBarRef.current && ulNavBarRef.current.contains(event.target)) {
                sideMenuHandler()
            }
        }
        setTimeout(() => {
            showNavBarMenuAtom.set(false)
            isShowingNavBarMenuAtom.set(false)
            hideNavBarMenuAtom.set(false)
        }, 10000);
        // Bind the event listener
        document.addEventListener('astro:page-load', () => {
            document.addEventListener("mousedown", handleClickOutside);
        })
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [wrapperNavBarRef, isShowingNavBar])


    if (!mounted) {
        return null
    }



    return (
        <div >
            <div onClick={handlerNavBar} className={`flex flex-col max-h-[3.6rem] min-h-[3.6rem] justify-end items-center mb-1`} >
                <div className='flex justify-center bg-violet  dark:bg-violet active:bg-violet/80 dark:active:bg-violet/60 rounded-full w-9 h-9 items-center cursor-pointer'>
                    <p className='text-ocre dark:text-cerise hover:cursor-pointer hover:text-cerise font-tommybold font-black text-lg svg'>{`//`}</p>
                </div>
                <div>
                    <p className='font-tommyregular text-[0.6rem] opacity-80 antialiased text-center tablet:text-dark dark:text-cerise hover:cursor-pointer hover:text-ocre px-2 rounded-2xl active:bg-violetlight transition-colors active:bg-opacity-70 tracking-wider'>menu</p>
                </div>
            </div>
            <nav ref={wrapperNavBarRef} className={`${showNavBar ? "!block showNavBar" : ""} ${hideNavBarAnimation ? "hidenavbar" : ""} hidden laptop:shownavbar fixed top-0 right-0 z-30 w-[10rem] h-[280px] bg-black dark:bg-richblack`} >
                <div onClick={handlerNavBar} className="absolute top-2 flex flex-col items-center group">
                    <div className='flex justify-center bg-violet  dark:bg-violet active:bg-violet/80 dark:active:bg-violet/60 filtromorado w-8 h-8 tablet:w-8 tablet:h-8 items-center active:bg-violetaactive dark:active:bg-violetaactive transition-colors cursor-pointer rounded-full -translate-x-[1px]'>
                        <p className='text-ocre  dark:text-cerise font-tommybold font-black text-lg tablet:text-lg svg group-hover:text-fucsia'>{` { `}</p>
                    </div>
                    <div className="cursor-pointer min-w-[59px]">
                        <p className='font-tommyregular text-[0.6rem] tablet:text-[0.6rem] opacity-80 antialiased text-center text-snow dark:text-cerise transition-colors tracking-wider '>close</p>
                    </div>
                </div>
                <div className='mt-[4.4rem] w-[95%] border-t-[1px] border-t-timberwolf/50 dark:border-t-timberwolf/70 my-2 ml-auto'></div>
                <ul ref={ulNavBarRef}>
                    {
                        NAV_NAMES.map((link) => {
                            const isActive = pathname?.startsWith(link.direccion);

                            return (
                                <li key={link.name} className='laptop:max-w-[8rem] laptop:min-w-[4.8rem] text-center transition-opacity-1 my-3'>
                                    <a
                                        href={link.direccion}
                                        className={`${styles} ${isActive ? '!text-ocre dark:!text-ocre' : ''} `
                                        }
                                    >
                                        link.name
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className=' mx-auto w-[80%] border-t-[1px] border-t-timberwolf/50 dark:border-t-timberwolf/70 my-2'></div>

            </nav>
        </div>
    )
}


export default NavBarMobile