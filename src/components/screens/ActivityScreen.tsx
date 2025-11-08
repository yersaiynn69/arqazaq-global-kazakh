import { Heart, MessageCircle, UserPlus, Eye } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "like",
    user: "Айдос Нұрлан",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aidos",
    action: "постыңызды ұнатты",
    time: "5 минут бұрын",
    icon: Heart,
    color: "text-destructive",
  },
  {
    id: 2,
    type: "comment",
    user: "Динара Смаилова",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dinara",
    action: "пікір қалдырды",
    content: "Керемет жоба! Табыс тілеймін 🎉",
    time: "15 минут бұрын",
    icon: MessageCircle,
    color: "text-primary",
  },
  {
    id: 3,
    type: "follow",
    user: "Ержан Байжанов",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yerzhan",
    action: "сізге жазылды",
    time: "1 сағат бұрын",
    icon: UserPlus,
    color: "text-accent",
  },
  {
    id: 4,
    type: "view",
    user: "Асель Қалиева",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=asel",
    action: "профиліңізді қарады",
    time: "2 сағат бұрын",
    icon: Eye,
    color: "text-muted-foreground",
  },
  {
    id: 5,
    type: "like",
    user: "Марат Сейтов",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marat",
    action: "постыңызды ұнатты",
    time: "3 сағат бұрын",
    icon: Heart,
    color: "text-destructive",
  },
];

const ActivityScreen = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border/50 px-6 py-4">
        <h1 className="text-2xl font-bold text-foreground">Белсенділік</h1>
      </header>

      {/* Stats Overview */}
      <div className="px-6 py-6 grid grid-cols-4 gap-3">
        <div className="bg-gradient-primary rounded-2xl p-4 text-center shadow-md">
          <div className="text-2xl font-bold text-white mb-1">234</div>
          <div className="text-xs text-white/80">Ұнатулар</div>
        </div>
        <div className="bg-card rounded-2xl p-4 text-center border border-border/50">
          <div className="text-2xl font-bold text-foreground mb-1">89</div>
          <div className="text-xs text-muted-foreground">Пікірлер</div>
        </div>
        <div className="bg-card rounded-2xl p-4 text-center border border-border/50">
          <div className="text-2xl font-bold text-foreground mb-1">456</div>
          <div className="text-xs text-muted-foreground">Қаралды</div>
        </div>
        <div className="bg-gradient-accent rounded-2xl p-4 text-center shadow-md">
          <div className="text-2xl font-bold text-white mb-1">67</div>
          <div className="text-xs text-white/80">Жазылды</div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="px-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Соңғы әрекеттер</h2>

        <div className="space-y-3">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="bg-card rounded-2xl p-4 border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className={`p-2 rounded-xl bg-muted/50 ${activity.color}`}>
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <img
                        src={activity.avatar}
                        alt={activity.user}
                        className="w-8 h-8 rounded-full ring-2 ring-border/50"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-semibold text-foreground">{activity.user}</span>{" "}
                          <span className="text-muted-foreground">{activity.action}</span>
                        </p>
                      </div>
                    </div>

                    {activity.content && (
                      <p className="text-sm text-muted-foreground mt-2 pl-10">
                        {activity.content}
                      </p>
                    )}

                    <p className="text-xs text-muted-foreground mt-2 pl-10">{activity.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityScreen;
