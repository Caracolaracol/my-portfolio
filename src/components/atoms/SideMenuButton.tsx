import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showProjectListAtom, showSideMenuAtom } from '@/store'
import { useStore } from '@nanostores/react'

function SideMenuButton() {
    const isShowingSideMenu = useStore(isShowingSideMenuAtom)

    const handlerSide = () => {
        if (isShowingSideMenu == false) {
            showSideMenuAtom.set(true)
            isShowingSideMenuAtom.set(true)
            setTimeout(() => {
                showProjectListAtom.set(true)
            }, 220);
        } else {
            hideSideMenuAnimationAtom.set(true)
            showProjectListAtom.set(false)
            setTimeout(() => {
                showSideMenuAtom.set(false)
                isShowingSideMenuAtom.set(false)
                hideSideMenuAnimationAtom.set(false)
            }, 452);
        }
    }

    return (
        <button onClick={handlerSide} className={`bottom-7 z-50 fixed laptop:hidden cursor-pointer  `}>
            <div className='flex justify-center rounded-full bg-ocre hover:bg-violet  active:bg-violet size-12 tablet:size-16 items-center transition-colors cursor-pointer'>
                <p className='font-tommyBold font-black text-cerise text-3xl tablet:text-5xl '>{` } `}</p>
            </div>
        </button>
    )
}

export default SideMenuButton