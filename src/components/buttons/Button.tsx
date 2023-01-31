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
            className={clsx('font-semibold transition', {
                'rounded-md py-2 px-3': size === 'medium',
                'bg-purple-600 text-slate-100 hover:text-slate-200 dark:bg-purple-500 dark:text-slate-200 dark:hover:text-slate-300':
                    variant === 'primary',
                'border border-slate-300 bg-slate-200 dark:border-slate-600 dark:bg-slate-700':
                    variant === 'secondary',
            })}
            {...restProps}
        >
            {children}
        </button>
    );
}
