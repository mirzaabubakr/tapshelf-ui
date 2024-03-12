import { ReactNode } from "react";
import "./index.css";

interface BoxWrapperProps {
  children: ReactNode;
}

export default function BoxWrapper({ children }: BoxWrapperProps) {
  return <div className="box-wrapper">{children}</div>;
}
