import Header from "./component/Header";
import { Stories } from "./component/Stories";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto pt-20 px-4 grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-8">
        <div className="space-y-4">
          <Stories />
        </div>
      </main>
    </div>
  );
}

export default App;
