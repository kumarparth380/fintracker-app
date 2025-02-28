import HomeIcon from '@/assets/svgs/home.svg';
import ReceiptIcon from '@/assets/svgs/receipt.svg';
import UsersIcon from '@/assets/svgs/users.svg';
import LineChartIcon from '@/assets/svgs/line-chart.svg';
import CreditCardIcon from '@/assets/svgs/credit-card.svg';
import WalletIcon from '@/assets/svgs/wallet.svg';
import ToolIcon from '@/assets/svgs/tool.svg';
import ShieldIcon from '@/assets/svgs/shield.svg';
import SettingsIcon from '@/assets/svgs/settings.svg';

export const menuItems = [
  { icon: HomeIcon, label: 'Dashboard', href: '/' },
  { icon: ReceiptIcon, label: 'Transactions', href: '/transactions' },
  { icon: UsersIcon, label: 'Accounts', href: '/accounts' },
  { icon: LineChartIcon, label: 'Investments', href: '/investments' },
  { icon: CreditCardIcon, label: 'Credit Cards', href: '/credit-cards' },
  { icon: WalletIcon, label: 'Loans', href: '/loans' },
  { icon: ToolIcon, label: 'Services', href: '/services' },
  { icon: ShieldIcon, label: 'My Privileges', href: '/privileges' },
  { icon: SettingsIcon, label: 'Settings', href: '/settings' },
];
