import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Expense } from "@/context/types";

const mockExpenses: Expense[] = [
  {
    id: 1,
    name: "Netflix",
    price: 16.99,
    occurance: "MONTHLY", // from Cadence enum
    category: "ENTERTAINMENT", // from Category enum
    nextChargeDate: "2025-01-15",
    paymentType: "DEBIT_CARD", // from PaymentType enum
    url: "https://netflix.com",
  },
  {
    id: 2,
    name: "Spotify",
    price: 11.99,
    occurance: "MONTHLY",
    category: "ENTERTAINMENT",
    nextChargeDate: "2025-01-20",
    paymentType: "DEBIT_CARD",
  },
  {
    id: 3,
    name: "Rent",
    price: 1800,
    occurance: "MONTHLY",
    category: "RENT",
    nextChargeDate: "2025-02-01",
    paymentType: "CASH",
  },
  {
    id: 4,
    name: "Phone Plan",
    price: 59,
    occurance: "MONTHLY",
    category: "UTILITIES",
    nextChargeDate: "2025-01-28",
    paymentType: "CASH",
  },
  {
    id: 5,
    name: "Gym Membership",
    price: 42,
    occurance: "WEEKLY",
    category: "UTILITIES",
    nextChargeDate: "2025-01-08",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 6,
    name: "Gym Membership",
    price: 42,
    occurance: "WEEKLY",
    category: "UTILITIES",
    nextChargeDate: "2025-01-08",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 7,
    name: "Gym Membership",
    price: 42,
    occurance: "WEEKLY",
    category: "UTILITIES",
    nextChargeDate: "2025-01-08",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 8,
    name: "Gym Membership",
    price: 42,
    occurance: "WEEKLY",
    category: "UTILITIES",
    nextChargeDate: "2025-01-08",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 9,
    name: "Gym Membership",
    price: 42,
    occurance: "WEEKLY",
    category: "UTILITIES",
    nextChargeDate: "2025-01-08",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 10,
    name: "Gym Membership",
    price: 42,
    occurance: "WEEKLY",
    category: "UTILITIES",
    nextChargeDate: "2025-01-08",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 11,
    name: "Gym Membership",
    price: 42,
    occurance: "WEEKLY",
    category: "UTILITIES",
    nextChargeDate: "2025-01-08",
    paymentType: "CREDIT_CARD",
  },
];

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "AUD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "occurance",
    header: "Occurance",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("occurance")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "nextChargeDate",
    header: "Next Charge Date",
    cell: ({ row }) => {
      let date = new Date(row.getValue("nextChargeDate"));
      let formattedDate = Intl.DateTimeFormat("en-GB").format(date);
      return <div className="capitalize">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "paymentType",
    header: "Payment Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("paymentType")}</div>
    ),
  },
  {
    accessorKey: "url",
    header: "Url",
    cell: ({ row }) => <div className="capitalize">{row.getValue("url")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const expense = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function ExpenseList() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: mockExpenses,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          {/* add paginator */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
