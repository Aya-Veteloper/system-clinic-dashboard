import FinancialOverview from '../../components/FinancialOverview';
import Analytics from '../../components/Analytics';
import Payments from '../../components/Payments';

const Financial = () => {
  return (
    <div className="Financial">
      <FinancialOverview />
      <Analytics />
      <Payments />
    </div>
  );
};

export default Financial;
