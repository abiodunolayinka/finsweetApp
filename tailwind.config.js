module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2130",
        divider: "#888888",
        faq: "#F0F2FE",
      },
      backgrondImages: (theme) => ({
        'herobg': `url("../../gradient/herobg.svg")`,
      }),
      
    }
  }
}