import catppuccin from "@catppuccin/tailwindcss";

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        splineSansBold: "splineSansBold",
        splineSansLight: "splineSansLight",
        splineSansMedium: "splineSansMedium",
        splineSansRegular: "splineSansRegular",
        splineSansSemiBold: "splineSansSemiBold",
      },
    },
  },
  plugins: [
    catppuccin({
      prefix: "ctp", // Optional: Prefix for Catppuccin classes
      defaultFlavour: "mocha", // Choose your preferred theme variant
    }),
  ],
};
