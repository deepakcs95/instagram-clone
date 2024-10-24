import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Link } from "./Link";

interface PostProps {
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  timeAgo: string;
}

const Post = ({ username, avatar, image, caption, likes, timeAgo }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="bg-white border border-gray-200 rounded-lg mb-4">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <img src={avatar} alt={username} className="w-8 h-8 rounded-full object-cover" />
          <Link href={`/${username}`} className="font-semibold hover:underline">
            {username}
          </Link>
        </div>
        <button>
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="relative aspect-square">
        <img src={image} alt="Post" className="w-full h-full object-cover" />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsLiked(!isLiked)}>
              <Heart
                className={`w-6 h-6 ${
                  isLiked ? "fill-red-500 text-red-500" : ""
                } hover:scale-110 transition-transform`}
              />
            </button>
            <button>
              <MessageCircle className="w-6 h-6 hover:scale-110 transition-transform" />
            </button>
            <button>
              <Send className="w-6 h-6 hover:scale-110 transition-transform" />
            </button>
          </div>
          <button onClick={() => setIsSaved(!isSaved)}>
            <Bookmark
              className={`w-6 h-6 ${
                isSaved ? "fill-black" : ""
              } hover:scale-110 transition-transform`}
            />
          </button>
        </div>

        <div className="font-semibold mb-1">{likes.toLocaleString()} likes</div>

        <div className="space-x-2">
          <Link href={`/${username}`} className="font-semibold hover:underline">
            {username}
          </Link>
          <span>{caption}</span>
        </div>

        <button className="text-gray-500 text-sm mt-1">View all comments</button>
        <time className="block text-gray-500 text-xs mt-1">{timeAgo}</time>
      </div>

      <div className="flex items-center border-t border-gray-200 p-3">
        <input type="text" placeholder="Add a comment..." className="flex-1 outline-none" />
        <button className="text-blue-500 font-semibold">Post</button>
      </div>
    </article>
  );
};

export default Post;
