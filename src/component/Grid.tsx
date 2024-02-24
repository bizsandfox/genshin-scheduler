import React from "react";

interface GridProps {
  columns: number;
  gap: string;
  children: React.ReactNode; // Add the children property
}

const Grid: React.FC<GridProps> = ({ columns, gap, children }) => {
  const gridTemplateColumns = `repeat(${columns}, 1fr)`;
  const gridGap = gap;

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns,
        gridGap,
        listStyleType: "none",
      }}
    >
      {children}
    </ul>
  );
};

export default Grid;
