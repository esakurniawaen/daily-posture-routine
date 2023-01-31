import cuid from 'cuid';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { dailyRoutinesAtom, type Exercise, selectedDateAtom } from '../../atom';
import CalendarHeader from './CalendarHeader';
import exercisesData from '../../exercisesData.json';
import MonthDays from './MonthDays';
import { DateTime } from 'luxon';

export default function Calendar() {
    const [dailyRoutines, setDailyRoutines] = useAtom(dailyRoutinesAtom);
    const selectedDate = useAtomValue(selectedDateAtom);

    useEffect(() => {
        const dailyRoutineAlreadyExistOnSelectedDate = dailyRoutines.some(
            (dailyRoutine) =>
                DateTime.fromMillis(dailyRoutine.date).hasSame(
                    selectedDate,
                    'day',
                ),
        );

        if (dailyRoutineAlreadyExistOnSelectedDate) return;

        setDailyRoutines([
            ...dailyRoutines,
            {
                id: cuid(),
                date: selectedDate.toMillis(),
                exercises: exercisesData as Exercise[],
            },
        ]);
    }, [selectedDate]); // eslint-disable-line

    return (
        <div className="p-4 tablet:p-5 desktop:p-6">
            <CalendarHeader />
            <MonthDays />
        </div>
    );
}
