import type { DateTime } from 'luxon';
import { useState } from 'react';

export function useMonthDays(date: DateTime): number[] {
    const [days] = useState(
        Array.from({ length: date.daysInMonth }, (_, i) => i + 1),
    );
    return days;
}
