import { useMenuOption } from '@/hooks/useMenuOption';
import { MenuOptionsTypes } from '@/types/menuOptions';
import Image from 'next/image'

export default function ButtonNew() {

  const { setMenuOption } = useMenuOption();

  const pageNavigationToNewUserTab = () => {
    setMenuOption(MenuOptionsTypes.NEWUSER)
  }

  return (
    <button 
      className="bg-violet-600 hover:bg-violet-500 text-[#FFF] font-semibold flex w-[134px] px-[15px] py-[7px] gap-2 rounded-[20px]"
      onClick={() => pageNavigationToNewUserTab()}
    >
      ADD NEW
      <Image src="add.svg" alt="" width={24} height={24}/>
    </button>
  )
}
