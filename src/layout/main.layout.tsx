import { useState, type ReactNode } from "react";
import { DashboardMenuButton } from "./components/menu";
import {
  Birdhouse,
  CircleDollarSign,
  LayoutGrid,
  MapPlus,
  ScrollText,
  ShieldAlert,
  ShieldQuestionMark,
  UserRoundCog,
  UserRoundPen,
  X,
} from "lucide-react";

import { toast } from "sonner";
import MenuWithImage from "@/shared/menu-with-image";
import image from "../../public/profile.png";
import NavbarField from "./components/nav";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = async () => {
    try {
      // await dispatch()
    } catch (error) {
      toast.error("Logout Failed !!!");
      console.log(error);
    }
  };

  const SectionLabel = ({ label }: { label: string }) => (
    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600 px-3 pb-1 pt-2">
      {label}
    </p>
  );

  const Divider = () => <div className="my-2 border-t border-white" />;

  const MenuContent = () => (
    <section className="flex flex-col min-h-screen h-full justify-between">
      <div className="flex flex-col flex-grow overflow-y-auto scrollbar-none">

        <SectionLabel label="Main" />
        <DashboardMenuButton Icon={LayoutGrid} text="Overview" pageLink="" />
        <DashboardMenuButton Icon={MapPlus} text="Add Community" pageLink="add-community" />
        <DashboardMenuButton Icon={Birdhouse} text="House Database" pageLink="house-database" />
        <DashboardMenuButton Icon={UserRoundPen} text="Housing Manager" pageLink="housing-manager" />
        <DashboardMenuButton Icon={UserRoundPen} text="Contractor" pageLink="contractor" />
        <DashboardMenuButton Icon={ScrollText} text="Work (Jobs)" pageLink="jobs" />
        <DashboardMenuButton Icon={CircleDollarSign} text="Subscription" pageLink="subscription" />

        <Divider />
        <SectionLabel label="Legal" />
        <DashboardMenuButton Icon={ShieldQuestionMark} text="Privacy & Policy" pageLink="privacy-policy" />
        <DashboardMenuButton Icon={ShieldQuestionMark} text="Terms & Conditions" pageLink="terms-and-conditions" />
        <DashboardMenuButton Icon={ShieldAlert} text="About us" pageLink="about" />
        <DashboardMenuButton Icon={ShieldQuestionMark} text="FAQ" pageLink="faq" />

        <Divider />
        <SectionLabel label="Support" />
        <DashboardMenuButton Icon={ShieldQuestionMark} text="Issue" pageLink="issue" />

        <Divider />
        <SectionLabel label="Account" />
        <DashboardMenuButton Icon={UserRoundCog} text="Setting" pageLink="setting" />
      </div>

      {/* Logout */}
      <div className=" border-zinc-800/50 cursor-pointer" onClick={handleLogOut}>
        <MenuWithImage
          image={image}
          email="contact.mahedihasan@gmail.com"
          role="Admin"
        />
      </div>
    </section>
  );

  return (
    <section className="min-h-screen bg-primary-bg-0 antialiased selection:bg-amber-500/20 selection:text-amber-200">
      {/* Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-primary-bg-0/95 border-b border-zinc-800/40">
        <NavbarField onMenuClick={() => setIsMobileMenuOpen(true)} />
      </div>

      <section className="relative grid grid-cols-6 mx-auto">

        {/* ── MOBILE OVERLAY ── */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-primary-bg-0/60 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* ── MOBILE FLYOUT SIDEBAR ── */}
        <aside
          className={`
            fixed top-0 left-0 h-full w-[272px] z-[70] md:hidden flex flex-col shadow-2xl
            transition-transform duration-300 ease-out
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-5 py-4 border-b shrink-0">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-secondary-0 animate-pulse" />
              <span className="text-zinc-300 font-bold tracking-widest text-[10px] uppercase">
                Menu
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-all"
              aria-label="Close navigation menu"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4">
            <MenuContent />
          </div>
        </aside>


        <aside className="col-span-1 hidden md:flex flex-col border-r border-zinc-800/40 bg-primary-bg-0/60">
          <div className="sticky  h-[calc(100vh-70px)] px-3 py-5 flex flex-col">
            <MenuContent />
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="col-span-6 md:col-span-5 min-h-screen bg-white">
          <div className="mx-auto sm:p-6 transition-opacity duration-300 opacity-100">
            {children}
          </div>
        </main>

      </section>
    </section>
  );
}

export default MainLayout;