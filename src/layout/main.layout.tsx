import { useState, type ReactNode } from "react";
import { DashboardMenuButton } from "./components/menu";
import {
  Birdhouse,
  CircleDollarSign,
  LayoutGrid,
  LogOut,
  MapPlus,
  ScrollText,
  ShieldAlert,
  ShieldQuestionMark,
  UserRoundCog,
  UserRoundPen,
  X,
} from "lucide-react";
import MenuWithImage from "@/shared/menu-with-image";
import NavbarField from "./components/nav";
import { LogoutBtn } from "./components/logout-btn";
import { NavLink } from "react-router";
import image from '../asset/profile.png'

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const SectionLabel = ({ label }: { label: string }) => (
    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600 px-3 pb-1 pt-2">
      {label}
    </p>
  );

  const Divider = () => <div className="my-2 border-t border-zinc-800/30" />;

  const MenuContent = () => (
    <div className="flex flex-col h-full">
      {/* Scrollable nav links */}
      <div className="flex-1 overflow-y-auto scrollbar-none py-3">
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
        <SectionLabel label="Log-out" />
        <LogoutBtn Icon={LogOut} text="Logout" />
      </div>

      {/* Pinned user profile — never scrolls away */}
      <NavLink to={'/setting'} className="shrink-0 border-t border-zinc-800/30 cursor-pointer">
        <MenuWithImage
          image={image}
          email="contact.mahedihasan@gmail.com"
          role="Admin"
        />
      </NavLink>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-primary-bg-0 antialiased selection:bg-amber-500/20 selection:text-amber-200 overflow-hidden">

      {/* ── NAVBAR (fixed height) ── */}
      <div className="shrink-0 z-50 backdrop-blur-md bg-primary-bg-0/95 border-b border-zinc-800/40">
        <NavbarField onMenuClick={() => setIsMobileMenuOpen(true)} />
      </div>

      <div className="flex flex-1 overflow-hidden">

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

          <div className="flex-1 min-h-0 px-3 py-2">
            <MenuContent />
          </div>
        </aside>

        {/* ── DESKTOP SIDEBAR (scrolls internally) ── */}
        <aside className="hidden md:flex flex-col w-[15%] shrink-0 border-r border-zinc-800/40 bg-primary-bg-0/60 overflow-hidden">
          <div className="flex-1 min-h-0 px-3">
            <MenuContent />
          </div>
        </aside>

        {/* ── MAIN CONTENT (fixed viewport, scrolls internally) ── */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="mx-auto sm:p-6">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}

export default MainLayout;