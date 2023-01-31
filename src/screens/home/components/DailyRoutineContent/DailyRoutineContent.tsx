import ClientOnly from '@/components/ClientOnly';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { DateTime } from 'luxon';
import {
    activeDateAtom,
    currentDailyRoutineAtom,
    dailyRoutinesAtom,
    type DailyRoutine,
    type Exercise,
} from '../../atom';
import ExerciseDetails from './ExerciseDetails';
import VideoSection from './VideoSection';

export default function DailyRoutineContent() {
    const [dailyRoutines, setDailyRoutines] = useAtom(dailyRoutinesAtom);
    const currentDailyRoutine = useAtomValue(currentDailyRoutineAtom);

    const setActiveDate = useSetAtom(activeDateAtom);

    function updateDailyRoutine(
        fieldsToUpdate: Pick<Partial<DailyRoutine>, 'exercises'>,
    ) {
        const updatedDailyRoutines = dailyRoutines.map((dailyRoutine) =>
            dailyRoutine.id === currentDailyRoutine?.id
                ? { ...dailyRoutine, ...fieldsToUpdate }
                : dailyRoutine,
        );
        setDailyRoutines(updatedDailyRoutines);
    }

    function handleUpdateExercise(
        exerciesId: number,
        fieldsToUpdate: Omit<Partial<Exercise>, 'id'>,
    ) {
        const updatedExercises = currentDailyRoutine?.exercises.map(
            (exercise) =>
                exercise.id === exerciesId
                    ? { ...exercise, ...fieldsToUpdate }
                    : exercise,
        );
        updateDailyRoutine({
            exercises: updatedExercises,
        });
    }

    if (currentDailyRoutine === undefined) return null;

    return (
        <ClientOnly className="grid grow place-items-center">
            <div className="w-full max-w-xl px-4 desktop:px-0">
                <div className="py-14 text-center">
                    <h1 className="text-center font-serif text-4xl font-extrabold">
                        Daily Posture Routine
                    </h1>
                    <span className="mt-3 block">
                        For:{' '}
                        <time
                            title="Set calendar back to selected daily routine"
                            className="cursor-pointer font-bold"
                            onClick={() =>
                                setActiveDate((prevActiveDate) =>
                                    prevActiveDate.set({
                                        month: DateTime.fromMillis(
                                            currentDailyRoutine.date,
                                        ).month,
                                        year: DateTime.fromMillis(
                                            currentDailyRoutine.date,
                                        ).year,
                                    }),
                                )
                            }
                            dateTime={DateTime.fromMillis(
                                currentDailyRoutine.date,
                            ).toISODate()}
                        >
                            {DateTime.fromMillis(
                                currentDailyRoutine.date,
                            ).toLocaleString(DateTime.DATE_FULL)}
                        </time>
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
                    <VideoSection contentDefaultOpen title="Exercises">
                        <div className="space-y-4 tablet:space-y-5 desktop:space-y-6">
                            {currentDailyRoutine.exercises.map((exercise) => (
                                <ExerciseDetails
                                    key={exercise.id}
                                    exercise={exercise}
                                    onExerciseUpdate={handleUpdateExercise}
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
        </ClientOnly>
    );
}
