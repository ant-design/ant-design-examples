'use client'

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';


export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode
}) {
    const cache = createCache();

    useServerInsertedHTML(() => (
        <style
            id="antd"
            dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
        >
        </style>
    ));

    return (
        <StyleProvider cache={cache}>
            {children}
        </StyleProvider>
    )
}