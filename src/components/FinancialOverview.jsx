import { Card, CardContent, Typography, Grid } from "@mui/material";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MoneyIcon from "@mui/icons-material/Money";

const FinancialOverview = () => {
  const data = {
    totalIncome: 4156.45,
    totalOutcome: 4156.45,
    income: 3146.45,
    expenses: 1146.45,
  };

  return (
    <Grid container spacing={2} marginBottom={6}>
      <Grid item xs={3}>
        <Card className="card">
          <CardContent>
            <div className="FinancialIcons">
              <CallToActionIcon />
              <TrendingUpIcon />
            </div>
            <Typography style={{ color: "#fff" }} variant="h6">
              Total Income
            </Typography>
            <Typography style={{ color: "#fff" }} variant="h6">
              ${data.totalIncome}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className="card">
          <CardContent>
            <div className="FinancialIcons">
              <CallToActionIcon />
              <TrendingUpIcon />
            </div>
            <Typography style={{ color: "#fff" }} variant="h6">
              Total Outcome
            </Typography>
            <Typography style={{ color: "#fff" }} variant="h6">
              ${data.totalOutcome}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className="card">
          <CardContent>
            <div className="FinancialIcons">
              <MonetizationOnIcon />
              <TrendingUpIcon />
            </div>
            <Typography style={{ color: "#fff" }} variant="h6">
              Income
            </Typography>
            <Typography style={{ color: "#fff" }} variant="h6">
              ${data.income}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className="card">
          <CardContent>
            <div className="FinancialIcons">
              <MoneyIcon />
              <TrendingUpIcon />
            </div>
            <Typography style={{ color: "#fff" }} variant="h6">
              Expenses
            </Typography>
            <Typography style={{ color: "#fff" }} variant="h6">
              ${data.expenses}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FinancialOverview;
