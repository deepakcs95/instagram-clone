import { useState } from "react";
import { PlusCircle } from "lucide-react";

const STORIES = [
  {
    id: "new",
    username: "Your Story",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
    isNew: true,
  },
  {
    id: "1",
    username: "john_doe",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: "2",
    username: "travel_lisa",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: "3",
    username: "photo_mike",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces",
  },
];

export function Stories() {
  const [activeStory, setActiveStory] = useState<string | null>(null);

  return (
    <div className="flex gap-4 overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg scrollbar-hide">
      {STORIES.map((story) => (
        <button
          key={story.id}
          onClick={() => setActiveStory(story.id)}
          className="flex flex-col items-center gap-1 min-w-[66px]"
        >
          <div
            className={`rounded-full p-[2px] ${
              story.isNew ? "bg-gray-200" : "bg-gradient-to-tr from-yellow-400 to-pink-600"
            }`}
          >
            <div className="relative rounded-full p-[2px] bg-white">
              <img
                src={story.avatar}
                alt={story.username}
                className="w-14 h-14 rounded-full object-cover"
              />
              {story.isNew && (
                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-0.5">
                  <PlusCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>
          <span className="text-xs truncate w-16 text-center">{story.username}</span>
        </button>
      ))}
    </div>
  );
}
