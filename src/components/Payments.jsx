import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const payments = [
  {
    id: 1,
    patient: "Ahmed",
    status: "Paid",
    date: "12/02/2023",
    amount: 280.0,
    method: "Visa **** 4242",
  },
  {
    id: 2,
    patient: "Ahmed",
    status: "Part Paid",
    date: "12/02/2023",
    amount: 280.0,
    method: "MasterCard **** 2332",
  },
  {
    id: 3,
    patient: "Ahmed",
    status: "Paid",
    date: "12/02/2023",
    amount: 280.0,
    method: "Visa **** 4242",
  },
  {
    id: 4,
    patient: "Ahmed",
    status: "Paid",
    date: "12/02/2023",
    amount: 280.0,
    method: "Visa **** 4242",
  },
];

const Payments = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date & Time</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.patient}</TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>${payment.amount.toFixed(2)}</TableCell>
              <TableCell>{payment.method}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Payments;
