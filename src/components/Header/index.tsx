import InputSearch from "../InputSearch"
import Image from 'next/image'

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 flex p-5 justify-between items-center shadow-lg">
      <h4 className="text-title font-medium">{title}</h4>
      <InputSearch />
      <div>
        <Image 
          src="eliza.svg" 
          alt="Eliza"
          width={36}
          height={36} 
        />
      </div>
    </header>
  )
}
