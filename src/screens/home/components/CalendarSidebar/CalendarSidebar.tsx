import { Dialog } from '@headlessui/react';
import Calendar from './Calendar';

type CalendarSidebarProps = {
    onMobileSidebarClose: () => void;
    mobileSidebarOpen: boolean;
};

export default function CalendarSidebar({
    onMobileSidebarClose,
    mobileSidebarOpen,
}: CalendarSidebarProps) {
    return (
        <>
            <aside className="sticky top-[4.688rem] hidden w-1/3 max-w-xl self-start rounded-lg shadow dark:shadow-lg desktop:block">
                <h2 className="sr-only">Calendar tracker</h2>
                <Calendar />
            </aside>

            <Dialog
                as="aside"
                open={mobileSidebarOpen}
                onClose={onMobileSidebarClose}
            >
                <h2 className="sr-only">Calendar tracker</h2>
                <div
                    className="fixed inset-0 z-40 backdrop-blur dark:bg-slate-900/30"
                    aria-hidden="true"
                />

                <div className="fixed inset-0 z-50 flex items-end tablet:items-start tablet:justify-end">
                    <Dialog.Panel className="bg-slate-50 shadow dark:bg-slate-900 dark:shadow-lg tablet:w-1/3 tablet:rounded-md">
                        <Calendar />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}
