import { type ElementType, type HTMLAttributes } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface AutoAnimateProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
}

export default function AutoAnimate({
    as: Tag = 'div',
    children,
    ...rest
}: AutoAnimateProps) {
    const [ref] = useAutoAnimate<HTMLElement>();

    return (
        <Tag ref={ref} {...rest}>
            {children}
        </Tag>
    );
}
