'use client';
import {Icon } from '@/once-ui/components';

import React, { ReactNode, forwardRef } from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';

interface CommonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 's' | 'm' | 'l';
    title?: string;
    subtitle?: string;
    icon?: string;
    image?: string;
    fillWidth?: boolean;
    children?: ReactNode;
    href?: string;
    className?: string;
    style?: React.CSSProperties;
}

export type CardProps = CommonProps & React.HTMLAttributes<HTMLDivElement>;

const isExternalLink = (url: string) => /^https?:\/\//.test(url);

const Card = forwardRef<HTMLDivElement, CardProps>(({
    variant = 'primary',
    size = 'm',
    title,
    subtitle,
    icon,
    image,
    children,
    fillWidth = false,
    href,
    className,
    style,
    ...props
}, ref) => {
    const content = (
        <>
            {image && <img src={image} alt={title || ''} className={styles.image} />}
            <div className={styles.content}>
                {icon && <Icon name={icon} size={size} />}
                {title && <h3 className={styles.title}>{title}</h3>}
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                {children}
            </div>
        </>
    );

    const commonProps = {
        className: `${styles.card} ${styles[variant]} ${styles[size]} ${fillWidth ? styles.fillWidth : ''} ${className || ''}`,
        style,
    };

    if (href) {
        const isExternal = isExternalLink(href);

        if (isExternal) {
            return (
                <a
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    target="_blank"
                    rel="noreferrer"
                    {...commonProps}>
                    {content}
                </a>
            );
        }

        return (
            <Link
                href={href}
                ref={ref as React.Ref<HTMLAnchorElement>}
                {...commonProps}>
                {content}
            </Link>
        );
    }

    return (
        <div
            ref={ref}
            {...commonProps}
            {...props}>
            {content}
        </div>
    );
});

Card.displayName = 'Card';

export { Card };
