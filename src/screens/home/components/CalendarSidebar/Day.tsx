import { DateTime } from 'luxon';

import ClientOnly from '@/components/ClientOnly';
import { useTheme } from '@/hooks';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { activeDateAtom, selectedDateAtom } from '../../atom';
import {
    useCompletedExercisesPercentage,
    useDayDailyRoutine,
} from '../../hooks';

type DayProps = {
    day: number;
};

export default function Day({ day }: DayProps) {
    const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
    const [activeDate, setActiveDate] = useAtom(activeDateAtom);

    const dayDailyRoutine = useDayDailyRoutine(activeDate.set({ day }));
    const completedExercisesPercentage = useCompletedExercisesPercentage(
        dayDailyRoutine?.exercises,
    );

    const { theme } = useTheme();

    function isSelected() {
        if (!dayDailyRoutine) return false;

        return selectedDate.hasSame(
            DateTime.fromMillis(dayDailyRoutine.date),
            'day',
        );
    }

    function isFutureDate() {
        return activeDate.set({ day }) > DateTime.now();
    }

    function handleDayClick() {
        if (isFutureDate()) {
            window.alert('Sorry, you cannot select a future date.');
            return;
        }

        const date = activeDate.set({ day });
        setActiveDate(date);
        setSelectedDate(date);
    }

    const pathColorSelected = theme === 'light' ? '#9333ea' : '#a855f7';
    const textColorSelected = theme === 'light' ? '#7e22ce' : '#a78bfa';

    const textColorUnselected = theme === 'light' ? '#64748b' : '#94a3b8';

    return (
        <ClientOnly
            as="button"
            onClick={handleDayClick}
            className={clsx('grid h-10 w-10 place-items-center rounded-full', {
                'bg-slate-100 dark:bg-slate-800': !isFutureDate(),
                'bg-slate-50 dark:bg-slate-900': isFutureDate(),
            })}
            key={day}
        >
            {dayDailyRoutine ? (
                <CircularProgressbar
                    value={completedExercisesPercentage}
                    text={String(day)}
                    styles={buildStyles({
                        pathColor: isSelected() ? pathColorSelected : '',
                        textColor: isSelected()
                            ? textColorSelected
                            : textColorUnselected,
                        trailColor: theme === 'light' ? '#e2e8f0' : '#334155',
                        textSize: '36px',
                    })}
                />
            ) : (
                <span
                    className={clsx({
                        'text-slate-300 dark:text-slate-600': isFutureDate(),
                    })}
                >
                    {day}
                </span>
            )}
        </ClientOnly>
    );
}
