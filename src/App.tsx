import Header from "./component/Header";
import { Stories } from "./component/Stories";
import { POSTS } from "./data/Data";
import Post from "./component/Posts";
import { Suggestions } from "./component/Suggetions";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="min-w-[380px] max-w-5xl mx-auto pt-20 px-4 grid grid-cols-1  lg:grid-cols-[1fr,320px]  gap-8">
        <div className="space-y-4">
          <Stories />
          {POSTS.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>

        <Suggestions />
      </main>
    </div>
  );
}

export default App;
