
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Calendar,
  Music,
  MapPin,
  Ticket,
  Star,
  MessageSquare,
  Map,
  Key,
  Settings,
  Menu,
  X,
  Home,
  Building
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Users, label: "Usuários", path: "/users" },
  { icon: Calendar, label: "Eventos", path: "/events" },
  { icon: Music, label: "Artistas", path: "/artists" },
  { icon: Building, label: "Casas de Show", path: "/venues" },
  { icon: Ticket, label: "Ingressos", path: "/tickets" },
  { icon: Star, label: "Avaliações", path: "/reviews" },
  { icon: MessageSquare, label: "Feed Ao Vivo", path: "/feeds" },
  { icon: Map, label: "Mapa", path: "/map" },
  { icon: Key, label: "Chaves de API", path: "/api-keys" },
  { icon: Settings, label: "Configurações", path: "/settings" },
];

export const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-purple-700/50">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Deevo
            </h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-purple-800/50 rounded-lg transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
        {!isCollapsed && (
          <p className="text-purple-300 text-sm mt-1">Painel Administrativo</p>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "hover:bg-purple-800/30 text-purple-200 hover:text-white"
                  )}
                >
                  <item.icon size={20} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-purple-700/50">
        {!isCollapsed && (
          <div className="text-xs text-purple-300">
            <p>© 2024 Deevo</p>
            <p>Sistema de Eventos Musicais</p>
          </div>
        )}
      </div>
    </div>
  );
};
