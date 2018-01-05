const emojiMap = {
  a: "😀",
  b: "😐",
  c: "🙂",
  d: "😲",
  e: "😮",
  f: "😐",
  g: "🙂",
  h: "😐",
  i: "😀",
  j: "🙂",
  k: "🙂",
  l: "😲",
  m: "😐",
  n: "🙂",
  o: "😮",
  p: "😐",
  q: "😯",
  r: "🙂",
  s: "🙂",
  t: "🙂",
  u: "😯",
  v: "🙂",
  w: "😯",
  x: "🙂",
  y: "😯",
  z: "🙂"
};

export function toEmoji(char) {
  if (!char) {
    return "😐"
  }
  return emojiMap[char.toLowerCase()] || "😐";
}
