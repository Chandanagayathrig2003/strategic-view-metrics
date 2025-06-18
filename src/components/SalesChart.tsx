
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { quarter: 'Q1 2024', actual: 87, target: 85 },
  { quarter: 'Q2 2024', actual: 92, target: 90 },
  { quarter: 'Q3 2024', actual: 88, target: 95 },
  { quarter: 'Q4 2024', actual: 96, target: 98 },
];

export const SalesChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
          <XAxis 
            dataKey="quarter" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
            domain={[70, 100]}
          />
          <Tooltip 
            formatter={(value, name) => [`${value}%`, name === 'actual' ? 'Actual Performance' : 'Target Performance']}
            labelStyle={{ color: '#374151' }}
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)'
            }}
          />
          <Bar dataKey="target" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="actual" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
