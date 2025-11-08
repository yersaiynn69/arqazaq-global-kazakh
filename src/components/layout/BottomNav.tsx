import { Home, MapPin, MessageCircle, Activity, User } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "feed", icon: Home, label: "Feed" },
  { id: "help", icon: MapPin, label: "Жәрдем" },
  { id: "chats", icon: MessageCircle, label: "Chats" },
  { id: "activity", icon: Activity, label: "Activity" },
  { id: "profile", icon: User, label: "Profile" },
];

const BottomNav = ({ activeTab, setActiveTab }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-card/80 backdrop-blur-xl border-t border-border/50">
      <div className="flex items-center justify-around px-4 py-2 safe-area-bottom">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                group relative flex flex-col items-center justify-center gap-1 px-4 py-2 
                transition-all duration-300 rounded-2xl
                ${isActive ? "text-primary" : "text-muted-foreground"}
              `}
            >
              {/* Glow effect for active tab */}
              {isActive && (
                <div className="absolute inset-0 bg-primary/10 rounded-2xl animate-tab-glow" />
              )}

              {/* Icon */}
              <Icon
                className={`
                  relative z-10 transition-all duration-300
                  ${isActive ? "scale-110" : "scale-100 group-hover:scale-105"}
                `}
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
              />

              {/* Label */}
              <span
                className={`
                  relative z-10 text-xs font-medium transition-all duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}
                `}
              >
                {tab.label}
              </span>

              {/* Active indicator dot */}
              {isActive && (
                <div className="absolute -top-1 w-1 h-1 rounded-full bg-primary animate-pulse-soft" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
