import { useAtomValue } from 'jotai';
import { activeDateAtom } from '../../atom';
import { useMonthDays } from '../../hooks';
import Day from './Day';

export default function DaysInMonth() {
    const activeDate = useAtomValue(activeDateAtom);
    const monthDays = useMonthDays(activeDate.daysInMonth);

    return (
        <section>
            <h3 className="sr-only">Month days</h3>
            <div className="flex flex-wrap gap-3">
                {monthDays.map((day) => (
                    <Day day={day} key={day} />
                ))}
            </div>
        </section>
    );
}
