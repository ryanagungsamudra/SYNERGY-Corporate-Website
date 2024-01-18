import { FC } from "react";

interface ParagraphProps {
  children: string;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p className="text-base md:text-base mt-4">{children}</p>;
};

interface LinkProps {
  url: string;
  children: string;
}

const Link: FC<LinkProps> = ({ url, children }) => {
  return (
    <a
      href={url}
      className="text-[#06367E] underline"
      target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  );
};

interface ListItemProps {
  children: string;
}

const ListItem: FC<ListItemProps> = ({ children }) => {
  return <li className="text-lg md:text-xl mt-4">{children}</li>;
};

export const formatDescription = (description: any[] = []) => {
  return description.map((item, index) => {
    if (item.type === "paragraph") {
      const text =
        item.children?.map((child: any) => child.text).join("") || "";
      return <Paragraph key={index}>{text}</Paragraph>;
    } else if (item.type === "link") {
      const url = item.url || "";
      const text =
        item.children?.map((child: any) => child.text).join("") || "";
      return (
        <Link key={index} url={url}>
          {text}
        </Link>
      );
    } else if (item.type === "list") {
      const listItems = item.children?.map(
        (listItem: any, listItemIndex: number) => {
          const text =
            listItem.children?.map((child: any) => child.text).join("") || "";
          return <ListItem key={listItemIndex}>{text}</ListItem>;
        }
      );
      return (
        <ul key={index} className="list-disc ml-6">
          {listItems}
        </ul>
      );
    }
    return null;
  });
};
