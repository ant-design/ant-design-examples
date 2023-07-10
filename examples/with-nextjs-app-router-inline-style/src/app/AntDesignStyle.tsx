"use client";

import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { PropsWithChildren } from "react";
import { renderToString } from "react-dom/server"

export const AntdStyle = ({ children }: PropsWithChildren) => {

    const cache = createCache();

    renderToString(
        <StyleProvider cache={cache}>
            {children}
        </StyleProvider>
    );

    return <>
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}></style>
        {children}
    </>;
}