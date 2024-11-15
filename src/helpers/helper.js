export function selectColor(color) {
  const colorClasses = {
    green: "bg-ctp-green/20",
    mauve: "bg-ctp-mauve/20",
    peach: "bg-ctp-peach/20",
    pink: "bg-ctp-pink/20",
  };

  const borderClasses = {
    green: "border-ctp-green",
    mauve: "border-ctp-mauve",
    peach: "border-ctp-peach",
    pink: "border-ctp-pink",
  };

  const textClasses = {
    green: "text-ctp-green",
    mauve: "text-ctp-mauve",
    peach: "text-ctp-peach",
    pink: "text-ctp-pink",
  };

  const bgColor = colorClasses[color] || "bg-ctp-rose/20";
  const borderColor = borderClasses[color] || "bg-ctp-rose";
  const textColor = textClasses[color] || "bg-ctp-rose";

  return {
    bgColor,
    textColor,
    borderColor,
  };
}
