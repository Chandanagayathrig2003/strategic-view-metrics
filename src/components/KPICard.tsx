
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  period: string;
}

export const KPICard = ({ title, value, change, trend, period }: KPICardProps) => {
  const isPositive = trend === "up";
  
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
        <div className={`flex items-center text-sm ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {change}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
        </div>
      </div>
      
      <div className="mt-4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-300 ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
          style={{ width: isPositive ? '75%' : '45%' }}
        />
      </div>
    </Card>
  );
};
