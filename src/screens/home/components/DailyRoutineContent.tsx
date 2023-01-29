import { IconButton } from '@/components/buttons';

import { Disclosure } from '@headlessui/react';
import { DateTime } from 'luxon';
import type { DailyRoutine, Exercise } from '../dailyRoutine';
import { useDailyRoutine } from '../hooks';
import ExerciseDetails from './ExerciseDetails';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { type ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type DailyRoutineContentProps = {
    selectedDate: DateTime;
    dailyRoutines: DailyRoutine[];
    onDailyRoutineUpdate: (
        dailyRoutineId: string,
        fieldsToUpdate: Pick<Partial<DailyRoutine>, 'exercises'>,
    ) => void;
};

export default function DailyRoutineContent({
    selectedDate,
    dailyRoutines,
    onDailyRoutineUpdate,
}: DailyRoutineContentProps) {
    const dailyRoutine = useDailyRoutine(dailyRoutines, selectedDate);

    function handleExerciseUpdate(
        exerciesId: number,
        fieldsToUpdate: Omit<Partial<Exercise>, 'id'>,
    ) {
        if (dailyRoutine === null) return;

        const updatedExercises = dailyRoutine.exercises.map((exercise) =>
            exercise.id === exerciesId
                ? { ...exercise, ...fieldsToUpdate }
                : exercise,
        );

        onDailyRoutineUpdate(dailyRoutine.id, {
            exercises: updatedExercises,
        });
    }

    if (dailyRoutine === null) return null;

    return (
        <div className="grid grow place-items-center">
            <div className="w-full max-w-xl px-4 desktop:px-0">
                <div className="bg-slate-900 py-14 text-center">
                    <h1 className="text-center font-serif text-4xl font-extrabold text-slate-300">
                        Daily Posture Routine
                    </h1>
                    <span className="mt-3 block">
                        For:{' '}
                        <strong>
                            {DateTime.fromMillis(
                                dailyRoutine.date,
                            ).toLocaleString(DateTime.DATE_FULL)}
                        </strong>
                    </span>
                </div>

                <div className="space-y-6">
                    <VideoSection title="Introduction">
                        <iframe
                            src="https://www.youtube.com/embed/RqcOCBb4arc?end=132"
                            className="aspect-video w-full rounded-md"
                            title="Introduction"
                            allowFullScreen
                        />
                    </VideoSection>

                    <VideoSection childrenDefaultOpen={true} title="Exercises">
                        <div className="space-y-4 tablet:space-y-5 desktop:space-y-6">
                            {dailyRoutine.exercises.map((exercise) => (
                                <ExerciseDetails
                                    key={exercise.id}
                                    exercise={exercise}
                                    onExerciseUpdate={handleExerciseUpdate}
                                />
                            ))}
                        </div>
                    </VideoSection>

                    <VideoSection title="Implementation">
                        <iframe
                            src="https://www.youtube.com/embed/RqcOCBb4arc?start=535&end=599"
                            className="aspect-video w-full rounded-md"
                            title="Implemantation"
                            allowFullScreen
                        />
                    </VideoSection>
                </div>
            </div>
        </div>
    );
}

type VideoSectionProps = {
    title: string;
    children: ReactNode;
    childrenDefaultOpen?: boolean;
};

function VideoSection({
    title,
    children,
    childrenDefaultOpen = false,
}: VideoSectionProps) {
    return (
        <Disclosure
            className="shadow dark:shadow-md"
            defaultOpen={childrenDefaultOpen}
            id={title}
            as="section"
        >
            {({ open }) => (
                <>
                    <div className="flex justify-between py-2">
                        <h2 className="text-2xl font-bold text-slate-300 ">
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
                </>
            )}
        </Disclosure>
    );
}
