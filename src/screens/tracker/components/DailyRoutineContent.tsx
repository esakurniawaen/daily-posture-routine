import React, { useEffect, useState } from 'react';
import { type DailyRoutine } from '../../home/dailyRoutine';
import { DateTime } from 'luxon';

type ContentProps = {
    selectedDate: DateTime;
    dailyRoutines: DailyRoutine[];
    onDailyRoutineUpdate: (
        dailyRoutineId: string,
        fieldsToUpdate: Pick<Partial<DailyRoutine>, 'exercises'>,
    ) => void;
};

export default function Content({
    selectedDate,
    dailyRoutines,
    onDailyRoutineUpdate,
}: ContentProps) {
    const [dailyRoutine, setDailyRoutine] = useState<DailyRoutine | null>(null);

    useEffect(() => {
        const currentDailyRoutine = dailyRoutines?.find((dailyRoutine) =>
            DateTime.fromMillis(dailyRoutine.date).hasSame(selectedDate, 'day'),
        );

        setDailyRoutine(currentDailyRoutine ?? null);
    }, [dailyRoutines, selectedDate]);

    function toggleExerciseComplete(exerciesId: number) {
        if (dailyRoutine === null) return;

        const updatedExercises = dailyRoutine.exercises.map((exercise) =>
            exercise.id === exerciesId
                ? { ...exercise, completed: !exercise.completed }
                : exercise,
        );

        onDailyRoutineUpdate(dailyRoutine.id, {
            exercises: updatedExercises,
        });
    }

    if (dailyRoutine === null) return null;

    return (
        <div>
            <h1>Daily Posture Routine</h1>
            <p>
                for:{' '}
                <time>
                    {DateTime.fromMillis(dailyRoutine.date).toLocaleString(
                        DateTime.DATE_SHORT,
                    )}
                </time>
            </p>
            <ul>
                {dailyRoutine.exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <h2>{exercise.name}</h2>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <button
                                onClick={() =>
                                    toggleExerciseComplete(exercise.id)
                                }
                            >
                                {exercise.completed
                                    ? 'Mark as uncomplete'
                                    : 'Mark as complete'}
                            </button>
                            <span>
                                {exercise.completed
                                    ? 'Completed'
                                    : 'Uncompleted'}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
