
import { KPICard } from "./KPICard";
import { RevenueChart } from "./RevenueChart";
import { SalesChart } from "./SalesChart";
import { RegionChart } from "./RegionChart";
import { ProductChart } from "./ProductChart";
import { TrendChart } from "./TrendChart";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Download, Filter, RefreshCw, Plus, Moon, Sun } from "lucide-react";
import { useState } from "react";

export const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$2,847,235",
      change: "+8.2%",
      trend: "up" as const,
      period: "vs last month"
    },
    {
      title: "Active Customers",
      value: "12,847",
      change: "+12.5%",
      trend: "up" as const,
      period: "vs last month"
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8%",
      trend: "up" as const,
      period: "vs last quarter"
    },
    {
      title: "Churn Rate",
      value: "2.1%",
      change: "-0.3%",
      trend: "down" as const,
      period: "vs last month"
    }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Business Performance Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Real-time insights and strategic metrics</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="dark:border-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
              {darkMode ? 'Light' : 'Dark'}
            </Button>
            
            <Select defaultValue="30d">
              <SelectTrigger className="w-32 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            
            <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300">
              <Plus className="w-4 h-4 mr-2" />
              Add Widget
            </Button>
            
            <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold dark:text-white">Revenue Trend</h3>
              <Select defaultValue="monthly">
                <SelectTrigger className="w-24 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <RevenueChart />
          </Card>

          {/* Sales Performance */}
          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold dark:text-white">Sales Performance</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Target vs Actual</span>
              </div>
            </div>
            <SalesChart />
          </Card>

          {/* Regional Performance */}
          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold dark:text-white">Regional Performance</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">Revenue by Region</span>
            </div>
            <RegionChart />
          </Card>

          {/* Product Performance */}
          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold dark:text-white">Top Products</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">Sales Volume</span>
            </div>
            <ProductChart />
          </Card>
        </div>

        {/* Full Width Chart */}
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold dark:text-white">Business Growth Trends</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Orders</span>
              </div>
            </div>
          </div>
          <TrendChart />
        </Card>
      </div>
    </div>
  );
};
