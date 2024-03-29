import { ReactNode } from "react";

export * from "./asmaul-husna.interface";
export * from "./jadwal-sholat.interface";
export * from "./surat.interface";

export interface ChildrenProps {
  children: ReactNode;
}

export interface DateSliceProps {
  date: Date;
  setDate: (func: Function) => void;
}

export interface WidthSliceProps {
  width: number;
  setWidth: (width: number) => void;
}

export interface IsAscendingSliceProps {
  isAscending: boolean;
  setIsAscending: (isAscending: boolean) => void;
}

export interface ScrollSliceProps {
  scroll: number;
  setScroll: (scroll: number) => void;
}
