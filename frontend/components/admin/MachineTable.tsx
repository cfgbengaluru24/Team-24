import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const machines = [
  {
    type: "Shredder",
    description: "Paid",
    total: "10",
    active: "5",
  },
  {
    type: "Hitachi",
    description: "Paid",
    total: "50",
    active: "26",
  },
  {
    type: "Winch",
    description: "Paid",
    total: "60",
    active: "38",
  },
];

const MachineTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Type</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Active</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {machines.map((machine) => (
          <TableRow key={machine.type}>
            <TableCell className="font-medium">{machine.type}</TableCell>
            <TableCell>{machine.total}</TableCell>
            <TableCell>{machine.active}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MachineTable;
