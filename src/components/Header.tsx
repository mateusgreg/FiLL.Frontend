import { LogOut, Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-nav-bg text-nav-foreground px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="text-nav-foreground hover:bg-white/10">
          <Menu className="w-5 h-5" />
        </Button>
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white/80 rounded" />
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-nav-foreground hover:bg-white/10 flex items-center gap-2"
      >
        Log out
        <LogOut className="w-4 h-4" />
      </Button>
    </header>
  );
};

export default Header;