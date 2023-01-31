import { useHasMounted } from '@/hooks';
import { type ElementType, type HTMLAttributes } from 'react';

interface ClientOnlyProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
}

export default function ClientOnly({
    children,
    as: Tag = 'div',
    ...restProps
}: ClientOnlyProps) {
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    return <Tag {...restProps}>{children}</Tag>;
}
