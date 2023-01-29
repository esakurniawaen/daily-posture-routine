import { Dialog } from '@headlessui/react';
import Calendar, { type CalendarProps } from './Calendar';

type CalendarSidebarProps = CalendarProps & {
    onMobileSidebarClose: () => void;
    mobileSidebarOpen: boolean;
};

export default function CalendarSidebar({
    onMobileSidebarClose,
    mobileSidebarOpen,
    ...calendarProps
}: CalendarSidebarProps) {
    return (
        <>
            <aside className="sticky top-16 hidden w-1/3 max-w-xl self-start desktop:block">
                <Calendar {...calendarProps} />
            </aside>

            <Dialog
                as="aside"
                open={mobileSidebarOpen}
                onClose={onMobileSidebarClose}
            >
                <div
                    className="fixed inset-0 z-40 backdrop-blur dark:bg-slate-900/30"
                    aria-hidden="true"
                />

                <div className="fixed inset-0 z-50 flex items-end tablet:items-start tablet:justify-end">
                    <Dialog.Panel className="flex justify-end rounded-lg tablet:w-1/3">
                        <Calendar {...calendarProps} />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}
