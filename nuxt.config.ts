// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Vue3-Datatable',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
                },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                // { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
                },
            ],
        },
    },
    nitro: {
        routeRules: {
            '/api/**': {
                cors: true,
            },
        },
    },
    css: ['@/assets/css/tailwind.css'],

    modules: ['@pinia/nuxt'],

    publicRuntimeConfig: {
        SITE_URL: process.env.SITE_URL,
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
