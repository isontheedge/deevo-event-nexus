
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

export const StatsCard = ({ title, value, icon: Icon, change, changeType = "neutral" }: StatsCardProps) => {
  const changeColor = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-600"
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${changeColor[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};
