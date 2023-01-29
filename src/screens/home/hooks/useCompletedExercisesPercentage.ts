import { calculatePercentage } from '@/utils';
import { useMemo } from 'react';
import type { Exercise } from '../dailyRoutine';

const TOTAL_EXERCISES_COUNT = 8;

export function useCompletedExercisesPercentage(
    exercises: Exercise[] | undefined,
) {
    const completedExercisesCount = useMemo(() => {
        if (!exercises) return 0;
        return exercises.reduce(
            (acc, curr) => acc + (curr.completed ? 1 : 0),
            0,
        );
    }, [exercises]);

    return calculatePercentage(completedExercisesCount, TOTAL_EXERCISES_COUNT);
}
