import { Line, LineChart as RechartsLineChart, XAxis } from 'recharts';

interface LineChartProps<Data> {
  data: Data[];
  xkey: Extract<keyof Data, string>;
  ykeys: Extract<keyof Data, string>[];
  width?: number;
  height?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LineChart<Data extends Record<string, any>>({ data, xkey, ykeys, width = 800, height = 400 }: LineChartProps<Data>) {
  return (
    <RechartsLineChart data={data} width={width} height={height}>
      <XAxis dataKey={xkey} />
      {ykeys.map((ykey, index) => (
        <Line type='monotone' dataKey={ykey} key={ykey} stroke={COLORS[index % COLORS.length]} />
      ))}
    </RechartsLineChart>
  );
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
