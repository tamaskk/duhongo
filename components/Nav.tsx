import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/2.png";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [actions, setActions] = useState<any[]>([]);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      // Load actions from localStorage
      const storedActions = localStorage.getItem("actions");
      if (storedActions) {
        setActions(JSON.parse(storedActions));
      }

      // Fetch actions from API
      getActions();
    }
  }, []);

  const getActions = async () => {
    try {
      const res = await fetch("/api/actions");
      if (!res.ok) {
        throw new Error("Failed to fetch Actions");
      }
      const data = await res.json();

      // Compare with localStorage
      const storedActions = localStorage.getItem("actions");
      const parsedStoredActions = storedActions
        ? JSON.parse(storedActions)
        : [];

      if (
        JSON.stringify(parsedStoredActions) !== JSON.stringify(data.actions)
      ) {
        // Update localStorage and state if changes are detected
        localStorage.setItem("actions", JSON.stringify(data.actions));
        setActions(data.actions);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col w-screen">
      {actions &&
        actions.map((action: any) => {
          return (
            <div
              key={action.action} // Ensure a unique key for each action
              className="w-full h-12 flex items-center justify-center font-semibold text-white text-xl"
              style={{
                background: action.color,
              }}
            >
              <h1>{action.action}</h1>
            </div>
          );
        })}
      <div className="flex flex-row w-screen bg-black h-auto pt-6 pb-2 relative items-center justify-center gap-5">
        <MenuIcon
          className="absolute flex sm:hidden sm:invisible top-6 right-4 z-[9999999]"
          onClick={() => setOpen(!open)}
        />

        <img
          onClick={() => router.push("/")}
          src={logo.src}
          className="w-12 h-12 absolute top-4 left-4 z-[9999999]"
        />
        <div
          className={`flex flex-col sm:flex-row max-sm:bg-black items-center justify-center gap-5 max-sm:transition-all max-sm:duration-300 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:h-screen max-sm:w-screen max-sm:z-[9999] ${
            !open ? "max-sm:-translate-x-[1000px]" : "max-sm:translate-x-0"
          }`}
        >
          <div className="group flex flex-col items-center justify-center">
            <button onClick={() => router.push("/arak")}>Árak / Csomag</button>
            <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all duration-1000"></div>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <button onClick={() => router.push("/idopont")}>
              Időpont foglalás
            </button>
            <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all duration-1000"></div>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <button onClick={() => router.push("/ertekelesek")}>
              Értékelések
            </button>
            <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all duration-1000"></div>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <button onClick={() => router.push("/galeria")}>Galéria</button>
            <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all duration-1000"></div>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <button onClick={() => router.push("/gyik")}>GYIK</button>
            <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all duration-1000"></div>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <button onClick={() => router.push("/kapcsolat")}>Kapcsolat</button>
            <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all duration-1000"></div>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <button onClick={() => router.push("/rolunk")}>Rólunk</button>
            <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
