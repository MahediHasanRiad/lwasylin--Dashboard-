import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router";

interface MenuType {
  Icon: LucideIcon;
  text: string;
}

export function LogoutBtn({ Icon, text }: MenuType) {


    const logout = () => {
        localStorage.removeItem('access-token');
        window.location.reload();
    }

  return (
    <NavLink to={`/`} className="w-full block group px-2" onClick={logout}>
      {({ isActive }) => (
        <div
          className={`
            relative h-10 w-full flex items-center gap-3 px-3
            rounded-lg transition-all duration-200 cursor-pointer my-2
            ${
              isActive
                ? "bg-primary-hover-0 border-l-4 border-primary-0 py-4"
                : "hover:bg-card-bg-0/50 hover:text-card-0"
            }
          `}
        >
          {/* Active indicator bar */}
          {isActive && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 rounded-full bg-primary-0" />
          )}

          <Icon
            className={`size-[20px] shrink-0 transition-colors ${
              isActive ? "text-secondary-0 ml-2" : "group-hover:text-secondary-0"
            }`}
          />

          <span className="text-sm font-medium tracking-wide truncate">
            {text}
          </span>
        </div>
      )}
    </NavLink>
  );
}