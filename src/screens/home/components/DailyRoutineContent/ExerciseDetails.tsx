import AutoAnimate from '@/components/AutoAnimate';
import { Button } from '@/components/buttons';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { type Exercise } from '../../atom';

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
    function toggleExerciseComplete() {
        onExerciseUpdate(exercise.id, { completed: !exercise.completed });
    }

    return (
        <article className="rounded-lg bg-slate-100 px-4 py-3 shadow dark:bg-slate-800 dark:shadow-lg tablet:px-5 tablet:py-4 desktop:py-5 desktop:px-6">
            <h3 className="mb-1.5 text-xl font-bold">
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

            <footer className="flex items-center justify-between">
                <Button
                    variant={exercise.completed ? 'secondary' : 'primary'}
                    onClick={toggleExerciseComplete}
                >
                    {exercise.completed
                        ? 'Mark as uncomplete'
                        : 'Mark as complete'}
                </Button>
                <AutoAnimate>
                    {exercise.completed ? (
                        <span className="flex items-center gap-x-1 text-green-600 dark:text-green-500">
                            Completed <CheckCircleIcon className="h-5 w-5" />
                        </span>
                    ) : (
                        <span className="flex items-center gap-x-1 text-slate-400 dark:text-slate-500">
                            Uncompleted <XCircleIcon className="h-5 w-5" />
                        </span>
                    )}
                </AutoAnimate>
            </footer>
        </article>
    );
}
