import { type ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
    leftColumn?: ReactNode;
    rightColumn?: ReactNode;
};

const Header = ({ leftColumn, rightColumn }: HeaderProps) => {
    return (
        <>
            <header className="sticky top-0 z-30 w-full bg-slate-900 px-4 py-4 shadow desktop:px-6">
                <div className="flex items-center justify-between bg-slate-900 ">
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
