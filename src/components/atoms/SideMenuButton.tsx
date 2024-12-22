import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showProjectListAtom, showSideMenuAtom } from '@/store'
import { useStore } from '@nanostores/react'

function SideMenuButton() {
    const isShowingSideMenu = useStore(isShowingSideMenuAtom)

    const handlerSide = () => {
        console.log(isShowingSideMenu)
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
        <button onClick={handlerSide} className={`bottom-0 left-0 z-50 w-20 h-16 rounded-t-md m-2 fixed laptop:hidden cursor-pointer`}>
            <div className='flex justify-center w-full h-full rounded-md bg-violet hover:bg-cerise  active:bg-ocre items-center transition-colors cursor-pointer'>
                <p className='font-chrono tracking-wider font-black text-ocre text-2xl tablet:text-xl '>{` menu `}</p>
            </div>
        </button>
    )
}

export default SideMenuButton