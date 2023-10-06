import "./Expanded-Label.css";

export default function ExpandedLabel({
  content,
  callback,
}: {
  content: string;
  callback: () => void;
}) {
  return (
    <div onClick={callback} className="description">
      {content}
    </div>
  );
}
