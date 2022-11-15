/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        bgdark: "#1c232f",
        defaultgray: {
          // DEFAULT: '#e9e9f1',
          // light: '#e9ecef',
          DEFAULT: "#f4f4f4",
          light: "#f8f8f8",
        },
        primary: {
          // DEFAULT: '#6610f2',
          // light: '#e0cffc',
          DEFAULT: "#5367ff",
          light: "#eef0ff",
        },
        secondary: {
          // DEFAULT: '#0dcaf0',
          // light: '#cff4fc',
          DEFAULT: "#0dcaf0",
          light: "#e7fafe",
        },
        success: {
          // DEFAULT: '#198754',
          // light: '#d1e7dd',
          DEFAULT: "#00d09c",
          light: "#e6fbf6",
        },
        danger: {
          // DEFAULT: '#dc3545',
          // light: '#f8d7da',
          DEFAULT: "#ff585d",
          light: "#ffeeef",
        },
        warning: {
          // DEFAULT: '#ffc107',
          // light: '#fff3cd',
          DEFAULT: "#ffb61b",
          light: "#fff3cd",
        },
        info: {
          // DEFAULT: '#0d6efd',
          // light: '#cfe2ff',
          DEFAULT: "#1da1f2",
          light: "#e8f6fe",
        },
      },
    },
  },
  plugins: [],
}
