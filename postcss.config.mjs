const config = {
   theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
      },
      backgroundImage: {
      'text-gradient': 'linear-gradient(267deg, #00ADEF -49.54%, #D60F8C 110.23%)',
    },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
