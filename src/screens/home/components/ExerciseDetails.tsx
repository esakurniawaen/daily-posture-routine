import AutoAnimate from '@/components/AutoAnimate';
import { Button } from '@/components/buttons';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { type Exercise } from '../dailyRoutine';

type ExerciseDetailsProps = {
    exercise: Exercise;
    onExerciseUpdate: (
        exerciesId: number,
        fieldsToUpdate: Omit<Partial<Exercise>, 'id'>,
    ) => void;
};

export default function ExerciseDetails({
    exercise,
    onExerciseUpdate,
}: ExerciseDetailsProps) {
    function toggleExerciseComplete(exerciesId: number) {
        onExerciseUpdate(exerciesId, { completed: !exercise.completed });
    }

    return (
        <article className="rounded-lg px-6 py-4 shadow dark:shadow-lg">
            <h3 className="text-xl font-semibold text-slate-300">
                {exercise.id}. {exercise.name} ({exercise.category})
            </h3>
            <div className="mb-4">
                <iframe
                    className="mb-2 aspect-video w-full rounded-md"
                    src={exercise.video.src}
                    title={exercise.video.title}
                    allowFullScreen
                />
                <p>How many: {exercise.howMany}</p>
            </div>
            <div className="flex items-center justify-between">
                <Button
                    variant={exercise.completed ? 'secondary' : 'primary'}
                    onClick={() => toggleExerciseComplete(exercise.id)}
                >
                    {exercise.completed
                        ? 'Mark as uncomplete'
                        : 'Mark as complete'}
                </Button>
                <AutoAnimate>
                    {exercise.completed ? (
                        <span className="flex items-center gap-x-1 dark:text-green-500">
                            Completed <CheckCircleIcon className="h-5 w-5" />
                        </span>
                    ) : (
                        <span className="flex items-center gap-x-1 dark:text-slate-500">
                            Uncompleted <XCircleIcon className="h-5 w-5" />
                        </span>
                    )}
                </AutoAnimate>
            </div>
        </article>
    );
}
