import React from "react";
import { ConfigProvider } from "antd";

const testGreenColor = "#008000";
const testRedColor = "#ff0000";

const withTheme = (node: JSX.Element) => (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: testGreenColor,
          },
        }}
      >
        <ConfigProvider
          theme={{
            token: {
              colorBgBase: testRedColor,
            },
          }}
        >
          {node}
        </ConfigProvider>
      </ConfigProvider>
    </>
  )

export default withTheme;