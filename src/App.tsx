import "./App.css";

function App() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute top-0 -z-10 h-full w-full bg-white [&>div]:absolute [&>div]:bottom-auto [&>div]:left-auto [&>div]:right-0 [&>div]:top-0 [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:-translate-x-[30%] [&>div]:translate-y-[20%] [&>div]:rounded-full [&>div]:bg-[rgba(109,244,173,0.5)] [&>div]:opacity-50 [&>div]:blur-[80px]">
            <div></div>
          </div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
              Drum
              <span className="text-sky-900"> Machine</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
