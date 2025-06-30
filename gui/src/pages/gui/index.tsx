import { Button } from "@headlessui/react";
import { useState } from "react";
import { History } from "../../components/History";
import { Chat } from "./Chat";

export default function GUI() {
  const [isHistoryHidden, setIsHistoryHidden] = useState(false);
  return (
    <div className="flex w-screen flex-row overflow-hidden">
      {!isHistoryHidden && (
        <aside className="4xl:flex no-scrollbar hidden w-96 overflow-y-auto border-0 border-r border-solid">
          <History />
        </aside>
      )}
      <div className="4xl:flex hidden items-center">
        <Button
          className="relative flex h-32 w-2 flex-col items-center justify-center rounded-full border shadow-sm transition-all duration-200 hover:from-gray-300 hover:to-gray-400"
          onClick={() => setIsHistoryHidden(!isHistoryHidden)}
        >
          <div className="h-10 w-0.5 rounded-full bg-white opacity-70 shadow-sm"></div>
        </Button>
      </div>
      <main className="flex flex-1 flex-col overflow-y-auto">
        <Chat />
      </main>
    </div>
  );
}
