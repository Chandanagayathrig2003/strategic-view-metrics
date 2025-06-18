
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 185000, customers: 1250, orders: 890 },
  { month: 'Feb', revenue: 195000, customers: 1320, orders: 920 },
  { month: 'Mar', revenue: 210000, customers: 1450, orders: 1050 },
  { month: 'Apr', revenue: 225000, customers: 1580, orders: 1180 },
  { month: 'May', revenue: 240000, customers: 1720, orders: 1290 },
  { month: 'Jun', revenue: 255000, customers: 1850, orders: 1420 },
  { month: 'Jul', revenue: 268000, customers: 1980, orders: 1520 },
  { month: 'Aug', revenue: 275000, customers: 2100, orders: 1580 },
  { month: 'Sep', revenue: 290000, customers: 2250, orders: 1680 },
  { month: 'Oct', revenue: 305000, customers: 2380, orders: 1780 },
  { month: 'Nov', revenue: 320000, customers: 2520, orders: 1890 },
  { month: 'Dec', revenue: 335000, customers: 2650, orders: 1980 },
];

export const TrendChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            yAxisId="revenue"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <YAxis 
            yAxisId="count"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip 
            formatter={(value, name) => {
              if (name === 'revenue') return [`$${Number(value).toLocaleString()}`, 'Revenue'];
              return [`${Number(value).toLocaleString()}`, name === 'customers' ? 'Customers' : 'Orders'];
            }}
            labelStyle={{ color: '#374151' }}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Line 
            yAxisId="revenue"
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#3b82f6' }}
          />
          <Line 
            yAxisId="count"
            type="monotone" 
            dataKey="customers" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#10b981' }}
          />
          <Line 
            yAxisId="count"
            type="monotone" 
            dataKey="orders" 
            stroke="#8b5cf6" 
            strokeWidth={3}
            dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#8b5cf6' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
