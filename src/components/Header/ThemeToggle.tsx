import { useTheme } from '@/hooks';
import { IconButton } from '../buttons';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import AutoAnimate from '../AutoAnimate';

export default function ThemeToggle() {
    const { theme, toggleTheme, isMounted } = useTheme();

    const buttonLabel =
        theme === 'light' ? 'Enable dark mode' : 'Enable light mode';

    if (!isMounted) return null;

    return (
        <IconButton
            onClick={() => toggleTheme()}
            title={buttonLabel}
            aria-label={buttonLabel}
        >
            <AutoAnimate>
                {theme === 'light' ? (
                    <MoonIcon className="h-6 w-6" />
                ) : (
                    <SunIcon className="h-6 w-6" />
                )}
            </AutoAnimate>
        </IconButton>
    );
}
