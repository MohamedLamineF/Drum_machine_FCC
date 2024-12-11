import "./App.css";

function App() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
            <div></div>
          </div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
              Markdown
              <span className="text-sky-900"> Previewer</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
