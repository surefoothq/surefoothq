import Logo from "./assets/logo-cropped.svg";

function App() {
  return (
    <main class="flex flex-col min-h-dvh">
      <div class="shrink-0 py-10 flex flex-col">
        <h1 class="text-center text-4xl lg:text-6xl font-boldonse shrink-0 leading-normal">
          Surefoot HQ
        </h1>
        <p class="text-center bg-blue-600 p-4">
          We are building something big...
        </p>
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
