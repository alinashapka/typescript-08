import AppBar from "../AppBar/AppBar";
import clsx from "clsx";
import css from "./Layout.module.css";
import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={clsx(css.container)}>
      <AppBar />
      {children}
    </div>
  );
}