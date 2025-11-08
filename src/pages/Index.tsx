import { useState } from "react";
import { Home, MapPin, MessageCircle, Activity, User } from "lucide-react";
import Feed from "@/components/screens/Feed";
import Help from "@/components/screens/Help";
import Chats from "@/components/screens/Chats";
import ActivityScreen from "@/components/screens/ActivityScreen";
import Profile from "@/components/screens/Profile";
import BottomNav from "@/components/layout/BottomNav";

const Index = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const renderScreen = () => {
    switch (activeTab) {
      case "feed":
        return <Feed />;
      case "help":
        return <Help />;
      case "chats":
        return <Chats />;
      case "activity":
        return <ActivityScreen />;
      case "profile":
        return <Profile />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="relative h-screen w-full max-w-[430px] mx-auto bg-background overflow-hidden flex flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Index;
