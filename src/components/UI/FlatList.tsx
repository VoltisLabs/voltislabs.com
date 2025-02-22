import { paragrapghClassName } from "@/src/app/data";
import React from "react";

interface ListItem {
  id: number;
  name: string;
}

interface FlatListProps {
  listItems: ListItem[];
}

const FlatList: React.FC<FlatListProps> = ({ listItems }) => {
  return (
    <ul className="list-disc pl-5">
      {listItems.map((item) => (
        <li key={item.id}>
          <span className={paragrapghClassName}>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default FlatList;
