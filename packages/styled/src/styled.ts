// https://www.styled-components.com/docs/api#typescript
// tslint:disable no-duplicate-imports
import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import theme from "./theme";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;

// https://github.com/styled-components/styled-components/issues/630
type ThemedStyledFunction<T> = styledComponents.ThemedStyledFunction<
  T,
  typeof theme
>;

const withProps = <U>() => <P>(fn: ThemedStyledFunction<P>) =>
  fn as ThemedStyledFunction<P & U>;

export { css, injectGlobal, keyframes, withProps, ThemeProvider };
export default styled;
