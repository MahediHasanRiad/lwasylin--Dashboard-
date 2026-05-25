import { Menu } from "lucide-react";
import image from "../../../public/logo.png"


function NavbarField({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <nav className="md:hidden lg:hidden grid grid-cols-6 items-center px-4 md:px-8 py-4 bg-primary-bg-0 gap-4 border-b border-gray-800">
      
      {/* Logo & Mobile Toggle Section */}
      <div className="col-span-3 md:col-span-1 flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="md:hidden p-2 hover:text-primary-hover-0 transition-colors"
        >
          <Menu className="size-6" />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0 hidden">
          <img className="w-32 md:w-40" src={image} alt="MAKTech Logo" />
        </div>
      </div>

      {/* Spacer (Hidden on mobile to keep profile on the right) */}
      <div className="hidden md:block md:col-span-4" />

    </nav>
  );
}

export default NavbarField;