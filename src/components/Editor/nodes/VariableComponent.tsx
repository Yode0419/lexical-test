// React component for displaying variable tags

import './VariableComponent.css';

interface VariableComponentProps {
  variableKey: string;
  category: string;
  displayName: string;
  nodeKey: string;
}

export default function VariableComponent({
  displayName,
}: VariableComponentProps) {
  return (
    <span className="variable-tag" contentEditable={false}>
      {displayName}
    </span>
  );
}
