import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

import SettingsNavIcon from '@/assets/svgs/settings-nav.svg';
import NotificationIcon from '@/assets/svgs/notification.svg';
import { useLocation } from 'react-router';

export const Header = () => {
  const pathname = useLocation().pathname;
  const title =
    pathname === '/'
      ? 'Dashboard'
      : pathname.split('/')[1].charAt(0).toUpperCase() +
        pathname.split('/')[1].slice(1);

  const SearchBar = () => (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#6F767E]" />
      <Input
        type="search"
        placeholder="Search for something"
        className="h-11 w-full rounded-full border-0 bg-[#F4F4F4] pl-11 pr-4 text-[15px] placeholder:text-[#6F767E] focus-visible:ring-0 lg:w-[320px]"
      />
    </div>
  );

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="flex flex-col border-b border-[#F4F4F4] bg-white lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#1A1D1F]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              {/* Sidebar content goes here */}
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-semibold text-[#1A1D1F]">{title}</h1>
          <img
            src={'/src/assets/images/profile.jpg'}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="px-4 pb-4">
          <SearchBar />
        </div>
      </div>

      <div className="hidden border-b border-[#F4F4F4] bg-white px-8 py-4 lg:flex">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[32px] font-semibold text-[#1A1D1F]">{title}</h1>
          <div className="flex items-center gap-6">
            <SearchBar />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-[#f5f7fa] hover:bg-[#F4F4F4]">
              <img
                src={SettingsNavIcon}
                width={22}
                height={22}
                alt="settings-icon"
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-[#f5f7fa] hover:bg-[#F4F4F4]">
              <img
                src={NotificationIcon}
                width={22}
                height={22}
                alt="notification-icon"
              />
            </Button>
            <img
              src={'/src/assets/images/profile.jpg'}
              alt="Profile"
              width={44}
              height={44}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
