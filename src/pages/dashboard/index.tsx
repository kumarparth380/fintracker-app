import { CardsList } from '@/components/dashboard/CardsList';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="p-4 pt-[40px] lg:p-8 lg:pt-[40px]">
        <div className="grid grid-cols-1 items-stretch gap-6 md:gap-8 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-8">
            <CardsList />
          </div>
        </div>
      </div>
    </div>
  );
}
