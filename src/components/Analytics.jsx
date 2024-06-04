import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 4000, outcome: 2400 },
  { month: "Feb", income: 3000, outcome: 1398 },
  { month: "Mar", income: 2000, outcome: 9800 },
  { month: "Apr", income: 2780, outcome: 3908 },
  { month: "May", income: 1890, outcome: 4800 },
  { month: "Jun", income: 2390, outcome: 3800 },
  { month: "Jul", income: 3490, outcome: 4300 },
];

const Analytics = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="income" stroke="#8884d8" />
        <Line type="monotone" dataKey="outcome" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Analytics;
