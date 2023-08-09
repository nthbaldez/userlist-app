import { useMenuOption } from '@/hooks/useMenuOption';
import { MenuOptionsTypes } from '@/types/menuOptions';
import Image from 'next/image'
import AddIcon from '../svg/AddIcon';

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
      <AddIcon />
    </button>
  )
}
