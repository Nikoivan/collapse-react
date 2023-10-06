import CollapsedLabel from "../Collapsed-Label/Collapsed-Label";
import ExpandedLabel from "../Expanded-Label/ExpandedLabel";

export type CollapsePropsType = {
  collapsedLabel?: boolean;
  expandedLabel?: boolean;
  callback: () => void;
};

export default function Container({
  collapsedLabel = true,
  expandedLabel = false,
  callback,
}: CollapsePropsType) {
  const contentExpanded =
    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";

  const contentCollapsed = "Collapse";

  return (
    <>
      {expandedLabel ? (
        <ExpandedLabel content={contentExpanded} callback={callback} />
      ) : (
        ""
      )}
      {collapsedLabel ? (
        <CollapsedLabel content={contentCollapsed} callback={callback} />
      ) : (
        ""
      )}
    </>
  );
}
