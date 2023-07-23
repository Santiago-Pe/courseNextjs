import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return <div style={{ color: "red", padding: "20px" }}>{children}</div>;
}
