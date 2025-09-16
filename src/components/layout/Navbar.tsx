import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { 
  Home, 
  Search, 
  ShoppingBag, 
  Wrench, 
  Gift, 
  User, 
  LogOut, 
  Settings,
  Wallet,
  BookOpen,
  Menu,
  X
} from 'lucide-react';
import vynestoLogo from '@/assets/vynesto-logo.png';
import { mockUser } from '@/lib/mockData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Mock auth state - replace with real auth context
  const user = mockUser;
  const isAuthenticated = true;

  const handleLogout = () => {
    // Mock logout - replace with real auth logic
    navigate('/');
  };

  const navigation = [
    { name: 'Housing', href: '/', icon: Home },
    { name: 'Shop', href: '/shop', icon: ShoppingBag },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'Rewards', href: '/rewards', icon: Gift },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={vynestoLogo} alt="VYNESTO" className="h-8 w-auto" />
            <span className="text-xl font-bold gradient-text">VYNESTO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* User Menu / Auth */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* Wallet Balance */}
                <div className="hidden sm:flex items-center space-x-2 bg-primary-light px-3 py-1 rounded-full">
                  <Wallet className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Ksh {user.profile.walletBalance.toLocaleString()}</span>
                </div>

                {/* Reward Points */}
                <Badge variant="secondary" className="hidden sm:flex items-center space-x-1">
                  <Gift className="h-3 w-3" />
                  <span>{user.profile.rewardPoints.toLocaleString()} pts</span>
                </Badge>

                {/* User Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.profile.avatar} alt={user.profile.firstName} />
                        <AvatarFallback>{user.profile.firstName[0]}{user.profile.lastName[0]}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{user.profile.firstName} {user.profile.lastName}</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/bookings')}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      My Bookings
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <Settings className="mr-2 h-4 w-4" />
                      Profile & Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {isAuthenticated && (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                  
                  {/* Mobile Wallet & Points */}
                  <div className="px-4 py-2 space-y-2">
                    <div className="flex items-center justify-between bg-primary-light px-3 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Wallet className="h-4 w-4 text-primary" />
                        <span className="text-sm">Wallet</span>
                      </div>
                      <span className="font-medium">Ksh {user.profile.walletBalance.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between bg-secondary-light px-3 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Gift className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Points</span>
                      </div>
                      <span className="font-medium">{user.profile.rewardPoints.toLocaleString()}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;