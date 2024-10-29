import { cookies } from 'next/headers';

export const getThemeFromCookies = (): string => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;
  return theme || 'light'; // default to light if no theme is set
};
