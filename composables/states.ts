// 颜色主题
export type ThemeDict = 'light' | 'dark'
export const useTheme = () => useState<ThemeDict>('theme', () => 'light')