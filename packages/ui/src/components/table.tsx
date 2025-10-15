"use client";

import * as React from "react";

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
}

export interface TableProps {
  columns: TableColumn[];
  rows?: Array<Record<string, React.ReactNode>>;
  footer?: React.ReactNode;
}

export function DataTable({ columns, rows, footer }: TableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/60 shadow-soft">
      <table className="min-w-full divide-y divide-border/60 bg-surface/95">
        <thead className="bg-muted/20">
          <tr className="text-left text-xs font-semibold uppercase tracking-wide text-muted">
            {columns.map((column) => (
              <th
                key={column.key}
                style={column.width ? { width: column.width } : undefined}
                className="px-4 py-3"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60 text-sm text-muted">
          {(rows && rows.length > 0 ? rows : createPlaceholderRows(columns)).map((row, index) => (
            <tr key={index} className="transition hover:bg-muted/10">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 align-top">
                  {row[column.key] ?? <PlaceholderCell />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer ? <tfoot>{footer}</tfoot> : null}
      </table>
    </div>
  );
}

function createPlaceholderRows(columns: TableColumn[]) {
  return Array.from({ length: 3 }, (_, rowIndex) =>
    Object.fromEntries(
      columns.map((column) => [
        column.key,
        <span key={`${column.key}-${rowIndex}`} className="inline-flex h-4 w-16 animate-pulse rounded bg-muted/40" />
      ])
    )
  );
}

const PlaceholderCell = () => (
  <span className="inline-flex h-4 w-20 animate-pulse rounded bg-muted/30" />
);
