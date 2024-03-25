import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <div className="h-screen w-full bg-[url(/public/images/banner.jpg)] bg-cover">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <img src="" alt="" />
        </div>
      </main>
    </>
  );
}

export default App;
