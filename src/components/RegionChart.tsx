
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'North America', value: 42, color: '#3b82f6' },
  { name: 'Europe', value: 28, color: '#10b981' },
  { name: 'Asia Pacific', value: 22, color: '#f59e0b' },
  { name: 'Latin America', value: 5, color: '#ef4444' },
  { name: 'Others', value: 3, color: '#8b5cf6' },
];

export const RegionChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Revenue Share']}
            labelStyle={{ color: '#374151' }}
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)'
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
            wrapperStyle={{ fontSize: '12px', color: '#6b7280' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
