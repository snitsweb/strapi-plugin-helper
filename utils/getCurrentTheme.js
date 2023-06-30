import { useSessionStorage } from 'primereact/hooks';

export const getCurrentTheme = () => useSessionStorage('dark', 'STRAPI_THEME');
