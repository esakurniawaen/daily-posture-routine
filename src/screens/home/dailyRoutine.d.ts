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
