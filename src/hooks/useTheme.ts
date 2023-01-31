import { useTheme as useNextTheme } from 'next-themes';

export function useTheme() {
    const { resolvedTheme, setTheme } = useNextTheme();

    function toggleTheme(theme?: 'light' | 'dark') {
        if (theme) {
            setTheme(theme);
            return;
        }
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    }

    return {
        theme: resolvedTheme as 'light' | 'dark',
        toggleTheme,
    };
}
