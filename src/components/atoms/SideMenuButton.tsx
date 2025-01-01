/* import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showProjectListAtom, showSideMenuAtom } from '@/store' */
import { stateSideMenuAtom,showProjectListAtom } from '@/store'
import { useStore } from '@nanostores/react'

function SideMenuButton() {
    const stateSideMenu = useStore(stateSideMenuAtom)

        const handlerSide = () => {
            if (stateSideMenu == 'hidden') {
                console.log('opening')
                stateSideMenuAtom.set('opening')
                setTimeout(() => {
                    console.log('is Open')
                    stateSideMenuAtom.set('open')
                    showProjectListAtom.set(true)
                }, 452);
            } else if (stateSideMenu == 'open') {
                console.log('hiding')
                stateSideMenuAtom.set('hiding')
                showProjectListAtom.set(false)
                setTimeout(() => {
                    console.log('is Hidden')
                    stateSideMenuAtom.set('hidden')
                }, 452);
            }
        }
    

    return (
        <button onClick={handlerSide} className={`bottom-0 left-0 z-50 w-[7rem] h-16 rounded-t-md bg-violet hover:bg-cerise rounded-md m-2 fixed laptop:hidden cursor-pointer shadow-lg transition-all hover:shadow-[0_0_10px_2px_rgba(238,130,238,0.1),0_0_20px_4px_rgba(255,20,147,0.1),0_0_30px_6px_rgba(255,165,0,0.1)]`}>
            <div className='flex justify-center w-full h-full rounded-md bg-violet hover:bg-cerise active:bg-ocre items-center transition-colors cursor-pointer'>
            <p className='font-chrono tracking-wider font-black text-platinum text-2xl tablet:text-xl '>{` menu `}</p>
            </div>
        </button>
    )
}

export default SideMenuButton