import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useTheme() {
    const { resolvedTheme, setTheme } = useNextTheme();
    const [isMounted, setMounted] = useState(false);

    function toggleTheme(theme?: 'light' | 'dark') {
        if (theme) {
            setTheme(theme);
            return;
        }
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    return {
        theme: resolvedTheme as 'light' | 'dark',
        toggleTheme,
        isMounted,
    };
}
