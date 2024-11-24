import * as React from "react"
import { flexRender, type Table as TanstackTable } from "@tanstack/react-table"

// import { getCommonPinningStyles } from "@/lib/data-table"
import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTablePagination } from "@/components/data-table/data-table-pagination"

interface DataTableProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
  table: TanstackTable<TData>
  floatingBar?: React.ReactNode | null
}

export function DataTable<TData>({
  table,
  floatingBar = null,
  children,
  className,
  ...props
}: DataTableProps<TData>) {
  return (
    <div
      className={cn("w-full space-y-2.5 overflow-auto", className)}
      {...props}
    >
      {children}
      <div className="overflow-hidden rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b ">
                {headerGroup.headers.map((header) => {
                  const isCheckboxColumn = header.id === 'select'
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className="border-none"
                      style={{
                        // ...getCommonPinningStyles({ column: header.column }),
                        width: isCheckboxColumn ? '40px' : undefined,
                        padding: isCheckboxColumn ? '0 0 0 16px' : undefined,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
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
                  className={cn(
                    "border-b  last:border-none",
                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                    row.getIsSelected() && "bg-blue-50 dark:bg-blue-900"
                  )}
                >
                  {row.getVisibleCells().map((cell) => {
                    const isCheckboxColumn = cell.column.id === 'select'
                    return (
                      <TableCell
                        key={cell.id}
                        className="border-none"
                        style={{
                          // ...getCommonPinningStyles({ column: cell.column }),
                          width: isCheckboxColumn ? '40px' : undefined,
                          padding: isCheckboxColumn ? '0 0 0 16px' : undefined,
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center border-none"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2.5">
        <DataTablePagination table={table} />
        {table.getFilteredSelectedRowModel().rows.length > 0 && floatingBar}
      </div>
    </div>
  )
}