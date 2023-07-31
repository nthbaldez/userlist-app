import InputSearch from "../InputSearch"

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 flex p-5 justify-between content-center shadow-lg">
      <h4 className="text-title font-medium">{title}</h4>
      <InputSearch />
      <div>Image</div>
    </header>
  )
}
