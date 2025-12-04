import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { COPPER_CHART_DATA } from '../../constants';

const PriceChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
      <h3 className="text-gold-600 font-bold mb-4 text-sm uppercase tracking-wider">Copper Spot Price Trend (Last 30 Days)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={COPPER_CHART_DATA}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="day" 
            stroke="#9ca3af" 
            tick={{fontSize: 12, fill: '#4b5563'}} 
            tickLine={false}
          />
          <YAxis 
            stroke="#9ca3af" 
            domain={['dataMin - 5', 'dataMax + 5']} 
            tick={{fontSize: 12, fill: '#4b5563'}}
            tickFormatter={(value) => `R${value}`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#ffffff', borderColor: '#D4AF37', color: '#1f2937', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#D4AF37' }}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#D4AF37" 
            strokeWidth={3} 
            dot={{ fill: '#D4AF37', r: 4 }} 
            activeDot={{ r: 8 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;