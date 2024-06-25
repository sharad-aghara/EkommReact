import Navbar from "./Navbar"


const NavbarProvider = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default NavbarProvider