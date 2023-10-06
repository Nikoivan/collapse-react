import "./Collapsed-Label.css";

export default function CollapsedLabel({
  content,
  callback,
}: {
  content: string;
  callback: () => void;
}) {
  return (
    <div className="wrapper" onClick={callback}>
      <div className="collapse-container">
        <div className="btn-container">
          <span className="collapse-btn btn">{content}</span>
        </div>
      </div>
    </div>
  );
}
