import { IconButton } from '@/components/buttons';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useAtom } from 'jotai';
import { activeDateAtom } from '../../atom';

export default function CalendarHeader() {
    const [activeDate, setActiveDate] = useAtom(activeDateAtom);

    function handlePrevMonthClick() {
        setActiveDate((prevActiveDate) => prevActiveDate.minus({ month: 1 }));
    }

    function handleNextMonthClick() {
        setActiveDate((prevActiveDate) => prevActiveDate.plus({ month: 1 }));
    }

    return (
        <header className="mb-4 flex items-center gap-x-3">
            <h3 className="sr-only">Calendar Month navigation</h3>

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
