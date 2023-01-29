import Header from '@/components/Header';
import CalendarSidebar from '@/screens/home/components/CalendarSidebar';
import { DateTime } from 'luxon';
import { type ReactNode } from 'react';

type BaseLayoutProps = {
    children: ReactNode;
    headerRightColumn?: ReactNode;
};

export default function BaseLayout({
    children,
    headerRightColumn,
}: BaseLayoutProps) {
    return (
        <>
            <Header rightColumn={headerRightColumn} />
            <main className="my-4">{children}</main>
        </>
    );
}
