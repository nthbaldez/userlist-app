import SearchIcon from '../svg/SearchIcon'
import styles from './styles.module.scss'

export default function InputSearch() {
  return (
    <div className={styles.inputContainer}>
      <SearchIcon />
      <input type="text" className="w-full text-sm outline-none bg-[#F8F9FA]" placeholder="Search..."/>
    </div>
  )
}
