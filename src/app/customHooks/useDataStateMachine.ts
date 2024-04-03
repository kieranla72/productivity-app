import { ApiError } from "next/dist/server/api-utils";
import { useState } from "react";

export interface DataState<Data> {
  status: "SUCCESS" | "PENDING" | "ERROR" | "LOADING";
  data?: Data;
  error?: any;
}

export function useDataStateMachine<Data, Args extends any[]>(
  fn: (...args: Args) => Promise<Data>
): [DataState<Data>, (...args: Args) => void, () => void] {
  const [state, setState] = useState<DataState<Data>>({ status: "PENDING" });

  const action = (...args: Args) => {
    setState({ ...state, status: "LOADING" });
    fn(...args)
      .then((d) => {
        setState({ status: "SUCCESS", data: d });
      })
      .catch((e) => {
        console.log(`There was an error: ${e}`);
        setState({ ...state, status: "ERROR", error: e });
      });
  };
  return [state, action, () => setState({ status: "PENDING" })];
}
