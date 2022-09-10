import 'styled-components'
import { defaultTheme } from '../styles/theme/defautTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
