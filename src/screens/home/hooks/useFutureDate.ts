import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

export function useFutureDate(date: DateTime) {
    const [isFutureDate, setIsFutureDate] = useState(false);

    useEffect(() => {
        if (date > DateTime.now()) {
            setIsFutureDate(true);
        } else {
            setIsFutureDate(false);
        }
    }, [date]);

    return isFutureDate;
}
