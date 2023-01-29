import { type ButtonSize } from './buttonProperty';
import { clsx } from 'clsx';
import { type HTMLAttributes, type ReactElement } from 'react';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    children: ReactElement;
    appearance?: ButtonAppearance;
}

type ButtonAppearance = 'solid' | 'outline';

export default function IconButton({
    children,
    size = 'medium',
    appearance = 'solid',
    ...restProps
}: IconButtonProps) {
    return (
        <button
            className={clsx('', {
                'rounded-md  p-2': size === 'medium',
                'rounded p-1.5': size === 'small',
                'rounded-lg p-3': size === 'large',
                'border border-slate-700 bg-slate-800': appearance === 'solid',
            })}
            {...restProps}
        >
            {children}
        </button>
    );
}
