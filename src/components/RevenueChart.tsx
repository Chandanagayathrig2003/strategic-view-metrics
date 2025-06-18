
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 425000, target: 400000 },
  { month: 'Feb', revenue: 380000, target: 420000 },
  { month: 'Mar', revenue: 510000, target: 450000 },
  { month: 'Apr', revenue: 485000, target: 480000 },
  { month: 'May', revenue: 620000, target: 500000 },
  { month: 'Jun', revenue: 580000, target: 550000 },
  { month: 'Jul', revenue: 720000, target: 600000 },
  { month: 'Aug', revenue: 695000, target: 650000 },
  { month: 'Sep', revenue: 780000, target: 700000 },
  { month: 'Oct', revenue: 850000, target: 750000 },
  { month: 'Nov', revenue: 920000, target: 800000 },
  { month: 'Dec', revenue: 1100000, target: 900000 },
];

export const RevenueChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            formatter={(value, name) => [`$${Number(value).toLocaleString()}`, name === 'revenue' ? 'Revenue' : 'Target']}
            labelStyle={{ color: '#374151' }}
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#3b82f6' }}
          />
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="#9ca3af" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
