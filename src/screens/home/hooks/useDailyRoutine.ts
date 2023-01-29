import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import type { DailyRoutine } from '../dailyRoutine';

export function useDailyRoutine(
    dailyRoutines: DailyRoutine[],
    selectedDate: DateTime,
) {
    const [dailyRoutine, setDailyRoutine] = useState<DailyRoutine | null>(null);

    useEffect(() => {
        const currentDailyRoutine = dailyRoutines?.find((dailyRoutine) =>
            DateTime.fromMillis(dailyRoutine.date).hasSame(selectedDate, 'day'),
        );

        setDailyRoutine(currentDailyRoutine ?? null);
    }, [dailyRoutines, selectedDate]);

    return dailyRoutine;
}
