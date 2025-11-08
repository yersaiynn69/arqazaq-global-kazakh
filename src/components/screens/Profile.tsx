import { Settings, MapPin, Calendar, Award, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Профиль</h1>
          <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
            <Settings size={24} className="text-foreground" />
          </button>
        </div>
      </header>

      {/* Cover with gradient */}
      <div className="h-32 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      {/* Profile Info */}
      <div className="px-6 -mt-16 relative">
        {/* Avatar */}
        <div className="mb-4">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
            alt="Profile"
            className="w-32 h-32 rounded-full ring-4 ring-card shadow-lg"
          />
        </div>

        {/* Name and Badge */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold text-foreground">Нұрбол Серік</h2>
            <div className="px-3 py-1 rounded-full bg-gradient-accent flex items-center gap-1 shadow-glow-accent">
              <Award size={14} className="text-white" />
              <span className="text-xs font-semibold text-white">Мен қазақпын</span>
            </div>
          </div>
          <p className="text-muted-foreground">@nurbol_serik</p>
        </div>

        {/* Bio */}
        <p className="text-foreground mb-4 leading-relaxed">
          Алматыда тұратын технология сүйгіш. Қазақстанды дамытуға үлес қосқым келеді 🇰🇿
        </p>

        {/* Location and Join Date */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin size={16} />
            <span>Алматы, Қазақстан</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={16} />
            <span>Қосылды Қаңтар 2024</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">234</div>
            <div className="text-sm text-muted-foreground">Посттар</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">1.2K</div>
            <div className="text-sm text-muted-foreground">Жазылушылар</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">456</div>
            <div className="text-sm text-muted-foreground">Жазылым</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="flex-1 rounded-full" size="lg">
            <Edit size={18} className="mr-2" />
            Өңдеу
          </Button>
          <Button variant="outline" className="rounded-full px-6" size="lg">
            Бөлісу
          </Button>
        </div>

        {/* Recent Posts Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Соңғы посттар</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-gradient-primary opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
