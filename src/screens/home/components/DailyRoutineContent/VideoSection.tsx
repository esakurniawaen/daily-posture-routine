import { IconButton } from '@/components/buttons';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { type ReactNode } from 'react';

type VideoSectionProps = {
    title: string;
    children: ReactNode;
    contentDefaultOpen?: boolean;
};

export default function VideoSection({
    title,
    children,
    contentDefaultOpen = false,
}: VideoSectionProps) {
    return (
        <Disclosure defaultOpen={contentDefaultOpen}>
            {({ open }) => (
                <section
                    className={clsx(!open && 'shadow dark:shadow-lg')}
                    id={title}
                >
                    <div className="flex items-center justify-between py-1">
                        <h2 className="ml-2 text-2xl font-bold">
                            <Link
                                className="transition hover:border-b hover:border-slate-300"
                                href={`#${title}`}
                            >
                                {title}
                            </Link>
                        </h2>
                        <Disclosure.Button as={IconButton} appearance="outline">
                            <ChevronRightIcon
                                className={clsx('h-6 w-6 transition', {
                                    'rotate-90 ': open,
                                })}
                            />
                        </Disclosure.Button>
                    </div>

                    <Disclosure.Panel>{children}</Disclosure.Panel>
                </section>
            )}
        </Disclosure>
    );
}
