import { DateTime } from 'luxon';
import { type DailyRoutine } from '../../dailyRoutine';
import { useMonthDays } from '../../hooks';
import Day from './Day';

type DaysInMonthProps = {
    activeDate: DateTime;
    onActiveDateChange: (date: DateTime) => void;
    onSelectedDateChange: (date: DateTime) => void;
    dailyRoutines: DailyRoutine[];
    selectedDate: DateTime;
};

export default function DaysInMonth({
    activeDate,
    onActiveDateChange,
    selectedDate,
    onSelectedDateChange,
    dailyRoutines,
}: DaysInMonthProps) {
    // const monthDays = Array.from(
    //     { length: activeDate.daysInMonth },
    //     (_, i) => i + 1,
    // );

    const monthDays = useMonthDays(activeDate);

    function getDailyRoutine(date: DateTime) {
        const currentDailyRoutine = dailyRoutines?.find((dailyRoutine) =>
            DateTime.fromMillis(dailyRoutine.date).hasSame(date, 'day'),
        );

        return currentDailyRoutine ?? null;
    }

    return (
        <section>
            <h2 className="sr-only">Month days</h2>
            <div className="flex w-fit flex-wrap content-start gap-3">
                {monthDays.map((day) => (
                    <Day
                        selectedDate={selectedDate}
                        onActiveDateChange={onActiveDateChange}
                        onSelectedDateChange={onSelectedDateChange}
                        dailyRoutine={getDailyRoutine(activeDate.set({ day }))}
                        activeDate={activeDate}
                        day={day}
                        key={day}
                    />
                ))}
            </div>
        </section>
    );
}
