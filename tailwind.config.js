/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#0F9CDA',
                'secondary': '#E5E5E5',
                'dark': '#09293A',
                'white': '#F5F5F5',
                'orange': '#E9AD03',
                'green': '#9FBB46',
                'grey': '#CCCCCC',
                'dark-blue': '#063E57',
                'light-blue': '#DFF0F8',
                'card-bg': '#ECF4F8',
                'wave-one': '#CFEBF8',
                'wave-two': '#6FC4E9',
                'wave-three': '#0F9CDA',
                'wave-four': '#095E83',
                'devpost': '#01579B',
                'youtube': '#FF3D00',
                'github': '#171515',
                'linkedin': '#0e76a8',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                esteban: ['Esteban', 'serif'],
            }
        },
    },
    plugins: [],
}

