import{ lazy, Suspense } from 'react';
import './dashboard.scss';

const ChartBox = lazy(() => import('../../components/charts/chartBox/ChartBox'));
const BarChartBox = lazy(() => import('../../components/charts/barChartBox/BarChartBox'));

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser
} from '../../chartData/data';

const Dashboard = () => {
  return (
    <div className="adminHome">
      <div className="box">
        <Suspense fallback={<div>Loading...</div>}>
          <ChartBox {...chartBoxUser} />
        </Suspense>
      </div>
      <div className="box">
        <Suspense fallback={<div>Loading...</div>}>
          <ChartBox {...chartBoxProduct} />
        </Suspense>
      </div>
      <div className="box">
        <Suspense fallback={<div>Loading...</div>}>
          <ChartBox {...chartBoxConversion} />
        </Suspense>
      </div>
      <div className="box">
        <Suspense fallback={<div>Loading...</div>}>
          <ChartBox {...chartBoxRevenue} />
        </Suspense>
      </div>
      <div className="box">
        <Suspense fallback={<div>Loading...</div>}>
          <BarChartBox {...barChartBoxVisit} />
        </Suspense>
      </div>
      <div className="box">
        <Suspense fallback={<div>Loading...</div>}>
          <BarChartBox {...barChartBoxRevenue} />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;