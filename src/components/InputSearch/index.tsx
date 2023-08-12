import SearchIcon from '../svg/SearchIcon'

interface InputSearcProps {
  classHidden: string;
}

export default function InputSearch() {
  const classes = "w-[400px] h-[36px] flex justify-between items-center bg-[#F8F9FA] rounded-[20px] p-[8px] gap-[8px] md:w-[352px]";
  return (
    <div className={classes}>
      <SearchIcon />
      <input type="text" className="w-full text-sm outline-none bg-[#F8F9FA]" placeholder="Search..."/>
    </div>
  )
}
