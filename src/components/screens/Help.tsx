import { MapPin, Clock, AlertCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const helpRequests = [
  {
    id: 1,
    user: "Асель Қалиева",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=asel",
    location: "Астана, Қазақстан",
    time: "30 минут бұрын",
    title: "Әуежайдан алып кетіңіз",
    description: "Нұрсұлтан Назарбаев әуежайынан қалаға жеткізіп беретін адам керек",
    category: "Көлік",
  },
  {
    id: 2,
    user: "Марат Сейтов",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marat",
    location: "Нью-Йорк, АҚШ",
    time: "2 сағат бұрын",
    title: "Қазақ тағамын табу керек",
    description: "Нью-Йоркте қазақ асханасы немесе дүкені бар ма?",
    category: "Тамақ",
  },
  {
    id: 3,
    user: "Гүлнұр Әміржан",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gulnur",
    location: "Дубай, БАӘ",
    time: "5 сағат бұрын",
    title: "Заңгер кеңесі қажет",
    description: "Дубайда тұратын қазақ заңгері бар ма? Бизнес құжаттары бойынша көмек керек",
    category: "Кеңес",
  },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border/50 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">Жәрдем</h1>
          <Button variant="default" size="sm" className="rounded-full">
            + Сұрау жіберу
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Қала немесе ел іздеу..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </header>

      {/* Map Placeholder */}
      <div className="mx-6 mt-6 mb-4 h-48 rounded-3xl bg-gradient-primary relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <MapPin size={48} className="mx-auto mb-2 opacity-80" />
            <p className="text-sm font-medium opacity-90">Дүниежүзілік карта</p>
            <p className="text-xs opacity-70 mt-1">Жәрдем сұрауларын көру</p>
          </div>
        </div>

        {/* Animated markers */}
        <div className="absolute top-8 left-12 w-3 h-3 rounded-full bg-accent animate-pulse-soft" />
        <div className="absolute top-20 right-16 w-3 h-3 rounded-full bg-accent animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-12 left-24 w-3 h-3 rounded-full bg-accent animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      {/* Help Requests */}
      <div className="px-6 space-y-3">
        <h2 className="text-lg font-semibold text-foreground mb-3">Соңғы сұраулар</h2>

        {helpRequests.map((request) => (
          <div
            key={request.id}
            className="bg-card rounded-3xl p-5 border border-border/50 hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
          >
            {/* User info */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={request.avatar}
                alt={request.user}
                className="w-10 h-10 rounded-full ring-2 ring-primary/20"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm">{request.user}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin size={12} />
                  <span>{request.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} />
                <span>{request.time}</span>
              </div>
            </div>

            {/* Request content */}
            <div className="mb-3">
              <h4 className="font-semibold text-foreground mb-1">{request.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{request.description}</p>
            </div>

            {/* Category tag */}
            <div className="flex items-center justify-between">
              <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                {request.category}
              </span>
              <Button variant="default" size="sm" className="rounded-full">
                Жауап беру
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
