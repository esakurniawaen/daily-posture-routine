import DailyRoutineContent from './components/DailyRoutineContent';
import CalendarSidebar from '../home/components/CalendarSidebar';
import Header from '@/components/Header';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks';
import type { DailyRoutine } from '../home/dailyRoutine';
import { DateTime } from 'luxon';

export default function TrackerScreen() {
    const [selectedDate, setSelectedDate] = useState(DateTime.now());
    const [dailyRoutines, setDailyRoutines] = useLocalStorage<DailyRoutine[]>(
        'dailyRoutines',
        [],
    );

    const [isCalendarSidebarOpen, setCalendarSidebarOpen] = useState(false);

    function handleAddDailyRoutine(dailyRoutine: DailyRoutine) {
        setDailyRoutines([...dailyRoutines, dailyRoutine]);
    }

    function handleUpdateDailyRoutine(
        dailyRoutineId: string,
        fieldsToUpdate: Omit<Partial<DailyRoutine>, 'id' | 'date'>,
    ) {
        const updatedDailyRoutines = dailyRoutines.map((dailyRoutine) =>
            dailyRoutine.id === dailyRoutineId
                ? { ...dailyRoutine, ...fieldsToUpdate }
                : dailyRoutine,
        );

        setDailyRoutines(updatedDailyRoutines);
    }

    return (
        <>
            <Header />

            <main>
                <CalendarSidebar
                    open={isCalendarSidebarOpen}
                    onClose={() => setCalendarSidebarOpen(false)}
                    onDailyRoutineCreate={handleAddDailyRoutine}
                    onSelectedDateChange={setSelectedDate}
                    selectedDate={selectedDate}
                    dailyRoutines={dailyRoutines}
                />
                <DailyRoutineContent
                    selectedDate={selectedDate}
                    dailyRoutines={dailyRoutines}
                    onDailyRoutineUpdate={handleUpdateDailyRoutine}
                />
            </main>
        </>
    );
}
