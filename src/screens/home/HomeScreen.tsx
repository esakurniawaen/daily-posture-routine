import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useLocalStorage } from '@/hooks';
import BaseLayout from '@/layouts/BaseLayout';
import { DateTime } from 'luxon';
import { useState } from 'react';
import CalendarSidebar from './components/CalendarSidebar';
import DailyRoutineContent from './components/DailyRoutineContent';
import type { DailyRoutine } from './dailyRoutine';
import { IconButton } from '@/components/buttons';

export default function HomeScreen() {
    const [selectedDate, setSelectedDate] = useState(DateTime.now());
    const [dailyRoutines, setDailyRoutines] = useLocalStorage<DailyRoutine[]>(
        'dailyRoutines',
        [],
    );

    const [isMobileCalendarSidebarOpen, setIsMobileCalendarSidebarOpen] =
        useState(false);

    function handleAddDailyRoutine(dailyRoutine: DailyRoutine) {
        setDailyRoutines([...dailyRoutines, dailyRoutine]);
    }

    function handleUpdateDailyRoutine(
        dailyRoutineId: string,
        fieldsToUpdate: Pick<Partial<DailyRoutine>, 'exercises'>,
    ) {
        const updatedDailyRoutines = dailyRoutines.map((dailyRoutine) =>
            dailyRoutine.id === dailyRoutineId
                ? { ...dailyRoutine, ...fieldsToUpdate }
                : dailyRoutine,
        );

        setDailyRoutines(updatedDailyRoutines);
    }

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
                    selectedDate={selectedDate}
                    onDailyRoutineCreate={handleAddDailyRoutine}
                    dailyRoutines={dailyRoutines}
                    onSelectedDateChange={setSelectedDate}
                />

                <DailyRoutineContent
                    selectedDate={selectedDate}
                    dailyRoutines={dailyRoutines}
                    onDailyRoutineUpdate={handleUpdateDailyRoutine}
                />
            </div>
        </BaseLayout>
    );
}
