const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        mono: ["'Public Sans'", ...defaultTheme.fontFamily.mono],
      },
      textColor: {
        fill: withOpacity("--text-fill"),
        primary: withOpacity("--text-primary"),
        muted: withOpacity("--text-muted"),
        inverted: withOpacity("--text-inverted"),
      },
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        footer: withOpacity("--bg-footer"),
        muted: withOpacity("--bg-muted"),
      },
      borderColor: {
        primary: withOpacity("--border-primary"),
      },
      gradientColorStops: {
        "lime-green": withOpacity("--lime-green"),
        "bright-cyan": withOpacity("--bright-cyan"),
      },
    },
  },
  // custom variants
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    function ({ addComponents}) {
      addComponents({
        ".container": {
          maxWidth: "1200px",
        },
      });
    },
  ],
};
