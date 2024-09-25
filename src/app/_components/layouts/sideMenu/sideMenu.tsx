import { ROUTES } from '@/routes';
import { ChartBarIcon, WrenchScrewdriverIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
type SideMenuProps = {
  isOpen: boolean;
  openMenu: Dispatch<SetStateAction<boolean>>;
};

const SideMenu = ({ isOpen, openMenu }: SideMenuProps) => {
  const router = useRouter();

  const menuEntries: { icon: React.ElementType; label: string; path: string }[] = [
    {
      icon: UsersIcon,
      label: 'Players',
      path: ROUTES.PLAYERS.pathname,
    },
    {
      icon: ChartBarIcon,
      label: 'Statistics',
      path: ROUTES.STATISTICS.pathname,
    },
    {
      icon: WrenchScrewdriverIcon,
      label: 'Settings',
      path: ROUTES.SETTINGS.pathname,
    },
  ];

  if (!isOpen) return null;
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 -mt-16 h-full w-64  bg-catan-red px-2 py-3 shadow-2xl open:animate-slideRight">
          <div className="ml-3 flex justify-end pt-1">
            <button onClick={() => openMenu(false)}>
              <XMarkIcon className="size-10 text-primary" />
            </button>
          </div>

          <div className="my-4 ml-3 flex flex-col gap-8">
            <div className="mb-3 flex items-center justify-center gap-2">
              <Image src="/assets/catan-logo.png" alt="logo" width={120} height={100} />
            </div>
            {menuEntries.map((entry, index) => (
              <button key={index} className="flex items-center justify-center gap-3" onClick={() => router.push(entry.path)}>
                <entry.icon className="size-9 text-secondary" />
                <span className="text-2xl font-medium text-secondary">{entry.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
