import type { PossibleDaysInMonth } from 'luxon';
import { useEffect } from 'react';
import { useState } from 'react';

export function useMonthDays(daysInMonth: PossibleDaysInMonth) {
    const [monthDays, setMonthDays] = useState<number[]>([]);

    useEffect(() => {
        setMonthDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    }, [daysInMonth]);

    return monthDays;
}
