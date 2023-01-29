import type { ButtonSize } from './buttonProperty';
import { clsx } from 'clsx';
import { type HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: 'primary' | 'secondary';
}

export default function Button({
    children,
    size = 'medium',
    variant = 'primary',
    ...restProps
}: ButtonProps) {
    return (
        <button
            className={clsx('font-medium transition', {
                'rounded-md py-2 px-3': size === 'medium',
                'bg-purple-500 text-slate-200 transition hover:bg-purple-600 hover:text-slate-300':
                    variant === 'primary',
                'border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800':
                    variant === 'secondary',
            })}
            {...restProps}
        >
            {children}
        </button>
    );
}
