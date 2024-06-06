import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    year: 2020,
    name: "Jan",
    income: 25,
    outcome: 35,
    amt: 10,
  },
  {
    year: 2020,
    name: "Feb",
    income: 30,
    outcome: 35,
    amt: 20,
  },
  {
    year: 2020,
    name: "Mar",
    income: 40,
    outcome: 35,
    amt: 30,
  },
  {
    year: 2020,
    name: "Apr",
    income: 25,
    outcome: 45,
    amt: 40,
  },
  {
    year: 2020,
    name: "May",
    income: 30,
    outcome: 55,
    amt: 50,
  },
  {
    year: 2020,
    name: "June",
    income: 25,
    outcome: 65,
    amt: 60,
  },
  {
    year: 2020,
    name: "July",
    income: 35,
    outcome: 45,
    amt: 70,
  },
];

const useStyles = makeStyles(() => ({
  filterSelect: {
    width: 120,
    backgroundColor:
      "linear-gradient(90deg, rgba(2, 34, 62, 1) 0%, rgba(2, 53, 74, 1) 35%, rgba(3, 92, 103, 1) 100%)",
    color: "#fff",
    "& .MuiSelect-icon": {
      color: "#fff",
    },
  },
}));

const BarChartComponent = () => {
  const [selectedYear, setSelectedYear] = useState(2020);
  const classes = useStyles();

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const filteredData = data.filter((item) => item.year === selectedYear);

  return (
    <div>
      <div style={{ display: "flex", padding: "8px" }}>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Analytics
        </Typography>
        {/* <label htmlFor="year">Select Year:</label>
        <select id="year" value={selectedYear} onChange={handleYearChange}>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select> */}
        <FormControl className={classes.filterSelect}>
          <InputLabel htmlFor="year">Select Year</InputLabel>
          <Select id="year" value={selectedYear} onChange={handleYearChange}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Visa">Visa</MenuItem>
            <MenuItem value="MasterCard">MasterCard</MenuItem>
          </Select>
        </FormControl>
      </div>
      <BarChart
        width={1000}
        height={300}
        data={filteredData}
        barGap={12}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="5 5" />
        <XAxis dataKey="name" axisLine={false} />
        <YAxis dataKey="amt" axisLine={false} />
        <Tooltip
          contentStyle={{
            background:
              "linear-gradient(90deg, rgba(2, 34, 62, 1) 0%, rgba(2, 53, 74, 1) 35%, rgba(3, 92, 103, 1) 100%)",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <Legend verticalAlign="top" height={36} />
        <Bar
          dataKey="income"
          fill="#72ddb2"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="outcome"
          fill="#1cb3fb"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
