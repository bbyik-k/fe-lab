import { lazy, Suspense, useState } from 'react';
// import LineChart from './LineChart';

const LineChart = lazy(() => import('./LineChart'));

export default function CompanySales() {
  const [shown, setShown] = useState(false);
  return (
    <>
      <button onClick={() => setShown((prev) => !prev)}>show company sales</button>
      {shown && (
        <Suspense fallback={<div>loading...</div>}>
          <LineChart data={data} xkey={'month'} ykeys={['sales']} />
        </Suspense>
      )}
    </>
  );
}

const data: { month: string; sales: number }[] = [
  { month: 'Jan', sales: 100 },
  { month: 'Feb', sales: 200 },
  { month: 'Mar', sales: 300 },
  { month: 'Apr', sales: 400 },
  { month: 'May', sales: 500 },
  { month: 'Jun', sales: 600 },
  { month: 'Jul', sales: 700 },
  { month: 'Aug', sales: 800 },
  { month: 'Sep', sales: 900 },
  { month: 'Oct', sales: 1000 },
  { month: 'Nov', sales: 1100 },
  { month: 'Dec', sales: 1200 },
];
