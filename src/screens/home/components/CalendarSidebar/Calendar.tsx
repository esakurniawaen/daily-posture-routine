import cuid from 'cuid';
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import type { DailyRoutine, Exercise } from '../../dailyRoutine';
import exercsiesData from '../../exercisesData.json';
import CalendarHeader from './CalendarHeader';
import MonthDays from './MonthDays';

export type CalendarProps = {
    selectedDate: DateTime;
    onSelectedDateChange: (date: DateTime) => void;
    dailyRoutines: DailyRoutine[];
    onDailyRoutineCreate: (dailyRoutine: DailyRoutine) => void;
};

const Calendar: React.FC<CalendarProps> = ({
    selectedDate,
    onSelectedDateChange,
    dailyRoutines,
    onDailyRoutineCreate,
}) => {
    const [activeDate, setActiveDate] = useState(selectedDate);

    useEffect(() => {
        function addDailyRoutineToCurrentDateIfNotExisted() {
            const today = DateTime.now();

            const todayDailyRoutineAlreadyExist = dailyRoutines.some(
                (dailyRoutine) =>
                    DateTime.fromMillis(dailyRoutine.date).hasSame(
                        today,
                        'day',
                    ),
            );

            if (todayDailyRoutineAlreadyExist) {
                console.log('daily routine alredy exist');
            } else {
                onDailyRoutineCreate({
                    date: today.toMillis(),
                    id: cuid(),
                    exercises: exercsiesData as Exercise[],
                });
            }
        }

        addDailyRoutineToCurrentDateIfNotExisted();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        function addDailyRoutineToSelectedDateIfNotAlreadyExisted() {
            const dailyRoutineAlreadyExist = dailyRoutines.some(
                (dailyRoutine) =>
                    DateTime.fromMillis(dailyRoutine.date).hasSame(
                        selectedDate,
                        'day',
                    ),
            );

            if (dailyRoutineAlreadyExist) return;

            onDailyRoutineCreate({
                date: selectedDate.toMillis(),
                id: cuid(),
                exercises: exercsiesData as Exercise[],
            });
        }

        addDailyRoutineToSelectedDateIfNotAlreadyExisted();
    }, [selectedDate]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="rounded-lg bg-red-900 py-2 px-4 shadow dark:bg-slate-900 dark:shadow-md tablet:py-3 tablet:px-5 desktop:px-6 desktop:py-4 ">
            <CalendarHeader
                activeDate={activeDate}
                onActiveDateChange={setActiveDate}
            />
            <MonthDays
                selectedDate={selectedDate}
                activeDate={activeDate}
                onSelectedDateChange={onSelectedDateChange}
                dailyRoutines={dailyRoutines}
                onActiveDateChange={setActiveDate}
            />
        </div>
    );
};

export default Calendar;
