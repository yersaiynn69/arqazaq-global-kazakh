import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import PostCard from "@/components/post/PostCard";

const posts = [
  {
    id: 1,
    author: "Айдос Нұрлан",
    username: "@aidos_nurlan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aidos",
    time: "2 сағат бұрын",
    content: "Алматыда жаңа жоба бастадым! Қазақстанның технология саласына үлес қосамыз деп үміттенемін 🇰🇿✨",
    images: [],
    likes: 234,
    comments: 45,
    isLiked: false,
  },
  {
    id: 2,
    author: "Динара Смаилова",
    username: "@dinara_s",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dinara",
    time: "5 сағат бұрын",
    content: "Лондондағы қазақ қауымдастығымен кездестік өткіздік. Дәстүрлі ас-тағамдармен қонақтар құттықтадық 🫶",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
    ],
    likes: 567,
    comments: 89,
    isLiked: true,
  },
  {
    id: 3,
    author: "Ержан Байжанов",
    username: "@yerzhan_b",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yerzhan",
    time: "1 күн бұрын",
    content: "АҚШ-та оқып жүрген қазақ студенттері үшін онлайн кездесу ұйымдастырамыз. Кім қатысқысы келеді?",
    images: [],
    likes: 123,
    comments: 34,
    isLiked: false,
  },
];

const Feed = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ArQazaq
          </h1>
          <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
            <MoreHorizontal size={24} className="text-foreground" />
          </button>
        </div>
      </header>

      {/* Feed */}
      <div className="space-y-0">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
