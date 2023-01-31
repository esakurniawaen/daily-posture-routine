import { useAtomValue } from 'jotai';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { dailyRoutinesAtom, type DailyRoutine } from '../atom';

export function useDayDailyRoutine(date: DateTime) {
    const dailyRoutines = useAtomValue(dailyRoutinesAtom);
    const [dayDailyRoutine, setDayDailyRoutine] = useState<DailyRoutine | null>(
        null,
    );

    useEffect(() => {
        const dailyRoutine = dailyRoutines?.find((dailyRoutine) =>
            DateTime.fromMillis(dailyRoutine.date).hasSame(date, 'day'),
        );

        setDayDailyRoutine(dailyRoutine ?? null);
    }, [dailyRoutines, date]);

    return dayDailyRoutine;
}
