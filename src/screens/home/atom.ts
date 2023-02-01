import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { DateTime } from 'luxon';

export type Exercise = {
    name: string;
    category: 'Routine 1' | 'Routine 2';
    completed: boolean;
    howMany: string;
    video: {
        src: `https://www.youtube.com/embed/RqcOCBb4arc?start=${string}&end=${string}`;
        title: string;
    };
    id: number;
};

export type DailyRoutine = {
    date: number; // date are stored in unix epcho milliseconds
    id: string;
    exercises: Exercise[];
};

export const selectedDateAtom = atom(DateTime.now());
export const activeDateAtom = atom(DateTime.now());

export const dailyRoutinesAtom = atomWithStorage<DailyRoutine[]>(
    'alrightnot',
    [],
);
export const currentDailyRoutineAtom = atom((get) =>
    get(dailyRoutinesAtom).find((dailyRoutine) =>
        DateTime.fromMillis(dailyRoutine.date).hasSame(
            get(selectedDateAtom),
            'day',
        ),
    ),
);
