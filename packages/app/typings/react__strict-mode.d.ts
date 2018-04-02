import { SFC } from "react";

declare module "react" {
  export const StrictMode: SFC<object>;
}
