import { useState } from "react";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface PostCardProps {
  post: {
    id: number;
    author: string;
    username: string;
    avatar: string;
    time: string;
    content: string;
    images: string[];
    likes: number;
    comments: number;
    isLiked: boolean;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <article className="bg-card border-b border-border/50 px-6 py-5 hover:bg-muted/30 transition-colors">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-12 h-12 rounded-full ring-2 ring-primary/20"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">{post.author}</h3>
              <p className="text-sm text-muted-foreground">{post.username}</p>
            </div>
            <button className="p-1.5 rounded-lg hover:bg-muted/50 transition-colors">
              <MoreHorizontal size={20} className="text-muted-foreground" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{post.time}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-foreground mb-3 leading-relaxed">{post.content}</p>

      {/* Images */}
      {post.images.length > 0 && (
        <div
          className={`
            grid gap-2 mb-4 rounded-2xl overflow-hidden
            ${post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}
          `}
        >
          {post.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-full h-48 object-cover"
            />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-6 pt-2">
        <button
          onClick={handleLike}
          className={`
            flex items-center gap-2 group transition-all duration-300
            ${isLiked ? "text-destructive" : "text-muted-foreground"}
          `}
        >
          <Heart
            size={20}
            className={`
              transition-all duration-300
              ${isLiked ? "fill-current scale-110" : "group-hover:scale-110"}
            `}
          />
          <span className="text-sm font-medium">{likes}</span>
        </button>

        <button className="flex items-center gap-2 text-muted-foreground group hover:text-primary transition-colors">
          <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">{post.comments}</span>
        </button>

        <button className="flex items-center gap-2 text-muted-foreground group hover:text-primary transition-colors ml-auto">
          <Share2 size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </article>
  );
};

export default PostCard;
