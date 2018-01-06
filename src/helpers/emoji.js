const emojiMap = {
  "😮": ["o", "e"],
  "😐": ["b", "p", "m"],
  "🙂": ["c", "g", "j", "k", "n", "r", "s", "t", "v", "x", "z"],
  "😲": ["d", "l"],
  "😯": ["q", "u", "w", "y"],
  "😀": ["a", "i"]
};
const defaultEmoji = "😐";

export const toEmoji = char => {
  return (
    Object.keys(emojiMap).find(emoji =>
      emojiMap[emoji].includes(char.toLowerCase())
    ) || defaultEmoji
  );
};
