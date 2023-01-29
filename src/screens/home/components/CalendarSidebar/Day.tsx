import { DateTime } from 'luxon';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useFutureDate, useCompletedExercisesPercentage } from '../../hooks';
import type { DailyRoutine } from '../../dailyRoutine';
import clsx from 'clsx';

type DayProps = {
    activeDate: DateTime;
    onActiveDateChange: (date: DateTime) => void;
    onSelectedDateChange: (date: DateTime) => void;
    selectedDate: DateTime;
    day: number;
    dailyRoutine: DailyRoutine | null;
};

export default function Day({
    day,
    dailyRoutine,
    activeDate,
    onActiveDateChange,
    selectedDate,
    onSelectedDateChange,
}: DayProps) {
    const completedExercisesPercentage = useCompletedExercisesPercentage(
        dailyRoutine?.exercises,
    );

    const isFutureDate = useFutureDate(activeDate.set({ day }));

    function handleDayClick() {
        if (isFutureDate) {
            window.alert('Sorry, you cannot select a future date.');
            return;
        }

        const date = activeDate.set({ day });
        onActiveDateChange(date);
        onSelectedDateChange(date);
    }

    function isSelected() {
        if (!dailyRoutine) return false;

        return selectedDate.hasSame(
            DateTime.fromMillis(dailyRoutine.date),
            'day',
        );
    }

    return (
        <button
            onClick={handleDayClick}
            className={clsx(' grid h-10 w-10 place-items-center rounded-full', {
                'bg-slate-800': !isFutureDate,
            })}
            key={day}
        >
            {dailyRoutine ? (
                <CircularProgressbar
                    value={completedExercisesPercentage}
                    text={String(day)}
                    styles={buildStyles({
                        pathColor: isSelected() ? '#a855f7' : '',
                        textColor: isSelected() ? '#c084fc' : '#94a3b8',
                        trailColor: '#334155',
                        textSize: '36px',
                    })}
                />
            ) : (
                <span
                    className={clsx({
                        'text-slate-600': isFutureDate,
                        'text-slate-400': !isFutureDate,
                    })}
                >
                    {day}
                </span>
            )}
        </button>
    );
}
