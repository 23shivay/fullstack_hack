import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogin?: () => void;
  onLogout?: () => void;
  onMenuClick?: () => void;
}

export default function Navbar({
  user,
  onLogin,
  onLogout,
  onMenuClick,
}: NavbarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800 bg-gradient-to-r from-black/80 via-gray-900/70 to-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div
                className="p-0 rounded-lg"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <Sparkles className="h-6 w-6 premium-animated-text" />
              </div>
              <a href="/">
                <span className="text-3xl font-extrabold premium-animated-text">
                  Genie
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 hover-elevate rounded-lg p-2"
                  data-testid="button-user-menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline text-sm font-medium">
                    {user.name}
                  </span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-popover border border-popover-border rounded-lg shadow-lg">
                    <div className="p-4 border-b border-popover-border">
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    <div className="p-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => {
                          setShowUserMenu(false);
                          onLogout?.();
                        }}
                        data-testid="button-logout"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button onClick={onLogin} data-testid="button-login">
                Sign in with Google
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
