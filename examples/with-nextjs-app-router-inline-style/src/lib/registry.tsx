
'use client'

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';


export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode
}) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
    const cache = createCache();

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>
            <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}></style>
            {styles}
        </>
    })

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <StyleProvider cache={cache}>
                {children}
            </StyleProvider>
        </StyleSheetManager>
    )
}