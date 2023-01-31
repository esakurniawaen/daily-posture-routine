import { type ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
    leftColumn?: ReactNode;
    rightColumn?: ReactNode;
};

const Header = ({ leftColumn, rightColumn }: HeaderProps) => {
    return (
        <>
            <header className="sticky top-0 z-30 w-full bg-slate-50 px-4 py-3 shadow dark:bg-slate-900 dark:shadow-lg tablet:px-5 tablet:py-4 desktop:px-6">
                <div className="flex items-center justify-between">
                    <div>
                        {leftColumn}
                        <span>Logo</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <ThemeToggle />
                        {rightColumn}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
