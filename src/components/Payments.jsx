import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    backgroundColor: "#000d27",
    color: "#777",
    marginTop: theme.spacing(2),
  },
  tableHeader: {
    backgroundColor: "#0f1b33",
  },
  headerCell: {
    color: "#777",
  },
  filters: {
    display: "flex",
    gap: theme.spacing(2),
  },
  filterSelect: {
    width: 120,
    backgroundColor:
      "linear-gradient(90deg, rgba(2, 34, 62, 1) 0%, rgba(2, 53, 74, 1) 35%, rgba(3, 92, 103, 1) 100%)",
    color: "#fff",
    "& .MuiSelect-icon": {
      color: "#fff",
    },
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#000d27",
    },
  },
}));

const payments = [
  {
    id: 1,
    patient: "Ahmed",
    status: "Paid",
    date: "12/02/2023",
    time: "09:25 AM",
    amount: "$280.00",
    method: "Visa",
    methodLastDigits: "4242",
  },
  {
    id: 2,
    patient: "Ahmed",
    status: "Part Paid",
    date: "12/02/2023",
    time: "09:25 AM",
    amount: "$280.00",
    method: "MasterCard",
    methodLastDigits: "2332",
  },
  {
    id: 3,
    patient: "Ahmed",
    status: "Paid",
    date: "12/02/2023",
    time: "09:25 AM",
    amount: "$280.00",
    method: "Visa",
    methodLastDigits: "4242",
  },
  {
    id: 4,
    patient: "Ahmed",
    status: "Paid",
    date: "12/02/2023",
    time: "09:25 AM",
    amount: "$280.00",
    method: "Visa",
    methodLastDigits: "4242",
  },
];

const Payments = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box style={{ display: "flex", padding: "8px" }}>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          All Payments
        </Typography>
        <Box className={classes.filters}>
          <FormControl className={classes.filterSelect}>
            <InputLabel>Date range</InputLabel>
            <Select>
              <MenuItem value="10 May - 20 May">10 May - 20 May</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.filterSelect}>
            <InputLabel>Status</InputLabel>
            <Select>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
              <MenuItem value="Part Paid">Part Paid</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.filterSelect}>
            <InputLabel>P. Method</InputLabel>
            <Select>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Visa">Visa</MenuItem>
              <MenuItem value="MasterCard">MasterCard</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.headerCell}>Patient</TableCell>
              <TableCell className={classes.headerCell}>Status</TableCell>
              <TableCell className={classes.headerCell}>Date</TableCell>
              <TableCell className={classes.headerCell}>Time</TableCell>
              <TableCell className={classes.headerCell}>Amount</TableCell>
              <TableCell className={classes.headerCell}>Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id} className={classes.tableRow}>
                <TableCell style={{ color: "#666" }}>
                  {payment.patient}
                </TableCell>
                <TableCell>
                  <Chip
                    style={{
                      color: payment.status === "Paid" ? "#00FF00" : "#FFA500",
                    }}
                    label={payment.status}
                  />
                </TableCell>
                <TableCell style={{ color: "#666" }}>{payment.date}</TableCell>
                <TableCell style={{ color: "#666" }}>{payment.time}</TableCell>
                <TableCell style={{ color: "#666" }}>
                  {payment.amount}
                </TableCell>
                <TableCell
                  style={{ color: "#666" }}
                >{`${payment.method} ****${payment.methodLastDigits}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Payments;
