import "./App.css";
import { BanditContextProvider, Campaign } from "@bandit-network/react";

function App() {
  return (
    <div
    // style={{
    //   backgroundImage: "url('/printdotworldbackground.png')",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    //   minHeight: "100vh", // Ensures the background covers the full viewport height
    // }}
    >
      <BanditContextProvider
        apiKey="78f7f48318be4473834c3abdac9fc5bf"
        cluster="mainnet"
      >
        <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto relative w-full">
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
            <div>
              <h2 className="text-center text-xl md:text-4xl font-bold text-black">
                Campaign for internosaur.com by{" "}
                <a
                  className="underline"
                  href="https://x.com/pogul_saicharan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @pogul_saicharan
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="fixed top-[50%] w-[90%] lg:w-[50%] left-[50%] z-[1500] translate-x-[-50%] translate-y-[-50%]">
          <Campaign campaignId={4498} displayMode="integrated" />
        </div>
        <img
          src="/internosaurdino.png"
          alt="img"
          className="absolute bottom-0 right-10 w-[180px] h-[180px]"
        />
      </BanditContextProvider>
    </div>
  );
}

export default App;
