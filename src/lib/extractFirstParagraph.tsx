interface Paragraph {
  type: string;
  children: { type: string; text: string }[];
}

interface BlogAttributes {
  Description: Paragraph[];
}

export const extractFirstParagraph = (
  attributes: BlogAttributes
): string | null => {
  const { Description } = attributes;

  if (!Description || Description.length === 0) {
    return null;
  }

  const firstParagraph = Description.find((item) =>
    item.children.some((child) => child.text.trim() !== "")
  );

  if (firstParagraph) {
    const text = firstParagraph.children.map((child) => child.text).join(" ");
    return text;
  }

  return null;
};
