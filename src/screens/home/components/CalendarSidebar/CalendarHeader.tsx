import { IconButton } from '@/components/buttons';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { type DateTime } from 'luxon';

type CalendarHeaderProps = {
    activeDate: DateTime;
    onActiveDateChange: (date: DateTime) => void;
};

export default function CalendarHeader({
    activeDate,
    onActiveDateChange,
}: CalendarHeaderProps) {
    function handlePrevMonthClick() {
        onActiveDateChange(activeDate.minus({ months: 1 }));
    }

    function handleNextMonthClick() {
        onActiveDateChange(activeDate.plus({ months: 1 }));
    }

    return (
        <header className="mb-4 flex items-center gap-x-3">
            <IconButton size="small" onClick={handlePrevMonthClick}>
                <ChevronLeftIcon className="h-4 w-4" />
            </IconButton>
            <strong>{activeDate.toFormat('MMMM yyyy')}</strong>
            <IconButton size="small" onClick={handleNextMonthClick}>
                <ChevronRightIcon className="h-4 w-4" />
            </IconButton>
        </header>
    );
}
