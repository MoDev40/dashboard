import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { HTMLAttributes } from "react";

interface DashboardCardProps {
    label:string;
    Icon:LucideIcon
    amount:string | any;
    description:string
}

export function DashboardCard({
    label,
    Icon,
    amount,
    description
}:DashboardCardProps) {
  return (
    <div className="bg-slate-100/80 p-5 flex flex-col gap-3 rounded shadow border w-full">
        <section className="flex gap-2 justify-between">
            <p className="text-sm ">{label}</p>
            <Icon/>
        </section>
        <section className="flex flex-row justify-between items-center">
            <h2 className="text-2xl font-semibold">{amount}</h2>
            <p className="text-sm">{description}</p>
        </section>
    </div>
  )
}

export function DashboardCardContent (props:HTMLAttributes<HTMLDivElement>){
    return (
        <div
        {...props}
        className={cn(
            "bg-slate-100/80 flex flex-col gap-3 rounded shadow p-5 w-full",
            props.className
        )}
        />
    )
}