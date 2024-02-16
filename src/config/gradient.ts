interface GradientMap {
  [key: string]: string;
}
// export const gradients: GradientMap = {
//   valentine: "bg-gradient-to-r from-red-200 to-red-600",
//   hawaii: "bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300",
//   lavender: "bg-gradient-to-r from-indigo-300 to-purple-400",
//   wintergreen: "bg-gradient-to-r from-green-200 to-green-500",
//   huckleberry: "bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800",
//   bluesteel: "bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800",
//   arendelle: "bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500",
//   spearmint: "bg-gradient-to-r from-green-200 via-green-400 to-green-500",
//   minnesota: "bg-gradient-to-r from-green-200 via-green-400 to-green-500",
//   bombpop: "bg-gradient-to-r from-red-400 via-gray-300 to-blue-500",
//   acadia: "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500",
//   flamingo: "bg-gradient-to-r from-pink-400 to-pink-600",
//   lust: "bg-gradient-to-r from-rose-700 to-pink-600",
//   space: "bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r",
// };

export const gradients: { [key: string]: string } = {
  valentine: "linear-gradient(to right, #fc8181, #b91c1c)",
  hawaii: "linear-gradient(to right, #48bb78, #f6e05e, #f687b3)",
  lavender: "linear-gradient(to right, #818cf8, #8b5cf6)",
  wintergreen: "linear-gradient(to right, #9ae6b4, #38a169)",
  huckleberry: "linear-gradient(to right, #a78bfa, #8b5cf6, #805ad5)",
  bluesteel: "linear-gradient(to right, #9ca3af, #4b5563, #1e3a8a)",
  acadia: "linear-gradient(to right, #911f27, #f9ca24, #faf089)",
  flamingo: "linear-gradient(to right, #fc8181, #f472b6)",
  lust: "linear-gradient(to right, #be123c, #e11d48)",
  space: "linear-gradient(to bottom, #1a202c, #4a5568)",
};

export const randGrads = [
  "linear-gradient(to right, #fc8181, #f56565)",
  "linear-gradient(to right, #f6ad55, #ed8936)",
  "linear-gradient(to right, #faf089, #f6e05e)",
  "linear-gradient(to right, #48bb78, #38a169)",
  "linear-gradient(to right, #38b2ac, #319795)",
  "linear-gradient(to right, #4299e1, #3182ce)",
  "linear-gradient(to right, #667eea, #5a67d8)",
  "linear-gradient(to right, #9f7aea, #805ad5)",
  "linear-gradient(to right, #ed64a6, #c53d84)",
  "linear-gradient(to right, #ed64a6, #8b5cf6)",
  "linear-gradient(to right, #ed64a6, #e11d48)",
  "linear-gradient(to right, #f56565, #ed8936)",
  "linear-gradient(to right, #38a169, #2f855a)",
  "linear-gradient(to right, #4fd1c5, #38b2ac)",
  "linear-gradient(to right, #48bb78, #9ae6b4)",
  "linear-gradient(to right, #4299e1, #4299e1)",
  "linear-gradient(to right, #38a169, #48bb78)",
  "linear-gradient(to right, #4299e1, #3182ce)",
  "linear-gradient(to right, #4dc0b5, #319795)",
  "linear-gradient(to right, #48bb78, #2f855a)",
  "linear-gradient(to right, #4299e1, #38b2ac)",
  "linear-gradient(to right, #4299e1, #4fd1c5)",
  "linear-gradient(to right, #48bb78, #4299e1)",
  "linear-gradient(to right, #4299e1, #4299e1)",
  "linear-gradient(to right, #4299e1, #48bb78)",
  "linear-gradient(to right, #4299e1, #4fd1c5)",
  "linear-gradient(to right, #4299e1, #4299e1)",
] as const;

export const genRandGradient = () =>
  randGrads[Math.floor(Math.random() * randGrads.length)];
