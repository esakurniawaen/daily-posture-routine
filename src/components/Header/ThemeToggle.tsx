import { useTheme } from '@/hooks';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import AutoAnimate from '../AutoAnimate';
import { IconButton } from '../buttons';
import ClientOnly from '../ClientOnly';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    const buttonLabel =
        theme === 'light' ? 'Enable dark mode' : 'Enable light mode';

    return (
        <ClientOnly
            as={IconButton}
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
        </ClientOnly>
    );
}
