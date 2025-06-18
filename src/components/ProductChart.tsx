
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { product: 'Enterprise Suite', sales: 8420 },
  { product: 'Professional Plan', sales: 6850 },
  { product: 'Starter Package', sales: 5240 },
  { product: 'Add-on Services', sales: 3780 },
  { product: 'Mobile App', sales: 2950 },
];

export const ProductChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="horizontal" margin={{ left: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
          <XAxis 
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
          />
          <YAxis 
            type="category"
            dataKey="product"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 11 }}
            width={80}
          />
          <Tooltip 
            formatter={(value) => [`${Number(value).toLocaleString()} units`, 'Sales Volume']}
            labelStyle={{ color: '#374151' }}
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)'
            }}
          />
          <Bar 
            dataKey="sales" 
            fill="#8b5cf6" 
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
