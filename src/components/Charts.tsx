import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Line } from 'recharts';
import { motion } from 'framer-motion';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const PatrimonialGrowthChart = () => {
  const data = [
    { month: 'Jan', consortium: 100000, financing: 95000 },
    { month: 'Mar', consortium: 150000, financing: 120000 },
    { month: 'Jun', consortium: 200000, financing: 140000 },
    { month: 'Set', consortium: 300000, financing: 160000 },
    { month: 'Dez', consortium: 400000, financing: 180000 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-[300px] mt-8"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorConsortium" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#367eF3" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#050950" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorFinancing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C0C0C0" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3c3c3c" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#3c3c3c" />
          <XAxis dataKey="month" stroke="#C0C0C0" />
          <YAxis stroke="#C0C0C0" tickFormatter={(value) => `${value / 1000}k`} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
            labelStyle={{ color: '#C0C0C0' }}
            formatter={(value: number) => formatCurrency(value)}
          />
          <Area
            type="monotone"
            dataKey="consortium"
            stroke="#367eF3"
            fillOpacity={1}
            fill="url(#colorConsortium)"
            name="Consórcio SP Solutions"
          />
          <Area
            type="monotone"
            dataKey="financing"
            stroke="#C0C0C0"
            fillOpacity={1}
            fill="url(#colorFinancing)"
            name="Financiamento Tradicional"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export const MonthlyReturnChart = ({ plans }: { plans: any[] }) => {
  // Transform data from plans array for the chart
  const chartData = plans.map(plan => ({
    name: plan.name,
    'Retorno Mensal Potencial': plan.monthlyReturn,
    'Investimento Mensal': plan.monthlyInvestment,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-[300px] mt-8"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#C0C0C0" />
          <XAxis dataKey="name" stroke="#C0C0C0" />
          <YAxis yAxisId="left" stroke="#367eF3" tickFormatter={(value) => formatCurrency(value)} />
          <YAxis yAxisId="right" orientation="right" stroke="#C0C0C0" tickFormatter={(value) => formatCurrency(value)} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
            labelStyle={{ color: '#C0C0C0' }}
            formatter={(value: number, name: string) => [
              formatCurrency(value),
              name,
            ]}
          />
          <Bar
            yAxisId="left"
            dataKey="Retorno Mensal Potencial"
            fill="#367eF3"
            name="Retorno Mensal Potencial"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Investimento Mensal"
            stroke="#C0C0C0"
            strokeWidth={2}
            name="Investimento Mensal"
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}; 