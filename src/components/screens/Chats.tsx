import { Search, MoreHorizontal } from "lucide-react";

const chats = [
  {
    id: 1,
    name: "Айдос Нұрлан",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aidos",
    lastMessage: "Рахмет, кездесуге келемін!",
    time: "14:32",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Динара Смаилова",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dinara",
    lastMessage: "Фотосуреттерді жібердім 📸",
    time: "Кеше",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Ержан Байжанов",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yerzhan",
    lastMessage: "Онлайн кездесу қай уақытта?",
    time: "Кеше",
    unread: 1,
    online: true,
  },
  {
    id: 4,
    name: "Асель Қалиева",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=asel",
    lastMessage: "Әуежайдан алып кеттің ғой, рақмет!",
    time: "Дс, Сс",
    unread: 0,
    online: false,
  },
];

const Chats = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border/50 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">Хабарламалар</h1>
          <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
            <MoreHorizontal size={24} className="text-foreground" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Іздеу..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </header>

      {/* Chat List */}
      <div className="divide-y divide-border/50">
        {chats.map((chat) => (
          <button
            key={chat.id}
            className="w-full px-6 py-4 hover:bg-muted/30 transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              {/* Avatar with online indicator */}
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-14 h-14 rounded-full ring-2 ring-border/50"
                />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-accent border-2 border-card" />
                )}
              </div>

              {/* Chat info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground truncate">{chat.name}</h3>
                  <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chats;
