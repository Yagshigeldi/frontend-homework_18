import { LINKS } from "../../static"
import { Link, NavLink, useLocation } from "react-router-dom"
import headerLogo from "../../assets/logo.svg"

const Header = () => {
  const {pathname} = useLocation()

  const isYellow = pathname.startsWith("/posts")
  return (  
    <header className={`${isYellow? "bg-yellow-400" : "bg-blue-500"} text-white `}>
      <nav className="h-25 container mx-auto flex gap-6 items-center justify-between">
        <Link to={"/"}>
        <div><img src={headerLogo} alt="" /></div>
        </Link>
        <ul className="flex gap-10 font-bold">
          {
            LINKS?.map((link) => (
          <li key={link.id}>
            <NavLink className={({isActive}) => `text-base text-[17px] ${isActive ? "text-blue-800 underline" : ""}`} to={link.path}>{link.text}</NavLink>
          </li>

            ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header