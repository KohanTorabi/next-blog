import { Fragment, memo } from "react";

interface HighlightedTextProps {
  text: string;
  wordToBeHighlighted?: string;
}

function HighlightedText({ text, wordToBeHighlighted }: HighlightedTextProps) {
  const textArray = wordToBeHighlighted
    ? text.split(wordToBeHighlighted)
    : [text];
  return (
    <span>
      {textArray?.map((item, index) => (
        <Fragment key={item}>
          {item}
          {index !== textArray.length - 1 && (
            <strong>{wordToBeHighlighted}</strong>
          )}
        </Fragment>
      ))}
    </span>
  );
}
export default memo(HighlightedText);
