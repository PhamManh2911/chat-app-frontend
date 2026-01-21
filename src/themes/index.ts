import type { ThemeConfig } from "antd";

import { lightColors } from "./light";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: lightColors.primary,
    colorInfo: lightColors.info,
    colorSuccess: lightColors.success,
    colorWarning: lightColors.warning,
    colorError: lightColors.error,

    colorBgLayout: lightColors.layoutBg,
    colorBgContainer: lightColors.containerBg,
    colorBgElevated: lightColors.elevatedBg,

    colorText: lightColors.textPrimary,
    colorTextSecondary: lightColors.textSecondary,
    colorTextTertiary: lightColors.textTertiary,
    colorTextLightSolid: lightColors.textInverse,

    colorBorder: lightColors.border,
    colorSplit: lightColors.divider,

    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
    fontSize: 14,
    lineHeight: 1.5,

    borderRadius: 10,
    borderRadiusLG: 12,

    controlHeight: 36,
    controlHeightLG: 44,

    motionEaseOut: "cubic-bezier(0.22, 1, 0.36, 1)",
    motionEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  components: {
    Button: {
      borderRadius: 10,
      fontWeight: 500,
      primaryShadow: "0 6px 16px rgba(22, 119, 255, 0.25)",
    },

    Input: {
      borderRadius: 10,
      paddingInline: 12,
    },

    Card: {
      borderRadiusLG: 12,
      paddingLG: 16,
    },

    Layout: {
      headerBg: lightColors.layoutBg,
      siderBg: lightColors.layoutBg,
      bodyBg: lightColors.layoutBg,
      footerBg: lightColors.layoutBg,
    },

    Badge: {
      dotSize: 10,
    },

    Avatar: {
      borderRadius: 8,
    },
  },
};
