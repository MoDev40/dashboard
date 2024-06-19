import { DashboardCard } from "@/components/DashboardCard";
import { DollarSign, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full p-5">
      <h1 className="text-center font-bold text-2xl">Dashboard</h1>
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-5 w-full">
          <section className="grid grid-cols-1 gap-4 gap-x-8 transition-all md:grid-cols-2 xl:grid-cols-4">
            <DashboardCard
            label="Total Revenue"
            Icon={DollarSign}
            amount="12,000"
            description="Month"
            />
            <DashboardCard
            label="Total Users"
            Icon={UserPlus}
            amount="67"
            description="Users for the month"
            />
            <DashboardCard
            label="Total Subscribers"
            Icon={UserPlus}
            amount="587"
            description="All time"
            />
            <DashboardCard
            label="Total Users"
            Icon={UserPlus}
            amount="1007"
            description="All time"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
