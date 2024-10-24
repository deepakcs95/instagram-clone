import Header from "./component/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* <main className="max-w-5xl mx-auto pt-20 px-4 grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-8">
        <div className="space-y-4">
          <Stories />

          <div className="space-y-6">
            {POSTS.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>

        <Suggestions />
      </main> */}
    </div>
  );
}

export default App;
