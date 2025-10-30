/** @type {import('tailwindcss').Config} */
const { COLORS, SPACING, FONT_SIZES, RADIUS } = require('./src/design-tokens')

module.exports = {
content: [
  './src/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        bg: COLORS.bg,
        'text-primary': COLORS.textPrimary,
        'text-secondary': COLORS.textSecondary,
        accent: COLORS.accent,
        'border-light': COLORS.borderLight,
        'card-bg': COLORS.cardBg,
      },
      spacing: {
        px: SPACING.px,
        xs: SPACING.xs,
        sm: SPACING.sm,
        md: SPACING.md,
        lg: SPACING.lg,
        xl: SPACING.xl,
        '2xl': SPACING['2xl'],
        '3xl': SPACING['3xl'],
      },
      fontSize: {
        sm: FONT_SIZES.sm,
        base: FONT_SIZES.base,
        lg: FONT_SIZES.lg,
        xl: FONT_SIZES.xl,
        '2xl': FONT_SIZES['2xl'],
        '3xl': FONT_SIZES['3xl'],
      },
      borderRadius: {
        sm: RADIUS.sm,
        md: RADIUS.md,
        lg: RADIUS.lg,
        xl: RADIUS.xl,
        full: RADIUS.full,
      },
    },
  },
  plugins: [],
}
