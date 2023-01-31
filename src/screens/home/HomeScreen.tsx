import { IconButton } from '@/components/buttons';
import BaseLayout from '@/layouts/BaseLayout';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import CalendarSidebar from './components/CalendarSidebar';
import DailyRoutineContent from './components/DailyRoutineContent/DailyRoutineContent';

export default function HomeScreen() {
    const [isMobileCalendarSidebarOpen, setIsMobileCalendarSidebarOpen] =
        useState(false);

    return (
        <BaseLayout
            headerRightColumn={
                <div className="desktop:hidden">
                    <IconButton
                        aria-label="Open the calendar tracker"
                        title="Open the calendar tracker"
                        onClick={() => setIsMobileCalendarSidebarOpen(true)}
                    >
                        <CalendarDaysIcon className="h-6 w-6" />
                    </IconButton>
                </div>
            }
        >
            <div className="flex">
                <CalendarSidebar
                    mobileSidebarOpen={isMobileCalendarSidebarOpen}
                    onMobileSidebarClose={() =>
                        setIsMobileCalendarSidebarOpen(false)
                    }
                />

                <DailyRoutineContent />
            </div>
        </BaseLayout>
    );
}
