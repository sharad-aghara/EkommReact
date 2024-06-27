import Footer from "./Footer";
import Navbar from "./Navbar";

const NavbarProvider = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow my-20">
            {children}
        </main>
        <Footer />
    </div>
  );
}

export default NavbarProvider;
