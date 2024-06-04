import { Card, CardContent, Typography, Grid } from '@mui/material';

const FinancialOverview = () => {
  const data = {
    totalIncome: 4156.45,
    totalOutcome: 4156.45,
    income: 3146.45,
    expenses: 1146.45,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card className='card'>
          <CardContent>
            <Typography variant="h6">Total Income</Typography>
            <Typography variant="h4">${data.totalIncome}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className='card'>
          <CardContent>
            <Typography variant="h6">Total Outcome</Typography>
            <Typography variant="h4">${data.totalOutcome}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className='card'>
          <CardContent>
            <Typography variant="h6">Income</Typography>
            <Typography variant="h4">${data.income}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className='card'>
          <CardContent>
            <Typography variant="h6">Expenses</Typography>
            <Typography variant="h4">${data.expenses}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FinancialOverview;
