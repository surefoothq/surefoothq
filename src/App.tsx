import Logo from "./assets/logo.svg";

function App() {
  return (
    <main class="flex flex-col bg-[#fbcbbb] h-dvh">
      <div class="shrink-0 py-10 flex flex-col gap-4">
        <h1 class="text-center text-4xl lg:text-6xl font-boldonse">
          Surefoot HQ
        </h1>
        <p class="text-center">Under Construction...</p>
      </div>
      <div class="grow relative">
        <img
          src={Logo}
          alt="Surefoot Logo"
          class="absolute size-full object-contain object-bottom"
        />
      </div>
    </main>
  );
}

export default App;
