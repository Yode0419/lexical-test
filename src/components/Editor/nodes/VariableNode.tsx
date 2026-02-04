// Custom Lexical node for variable tags

import type {
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';
import { DecoratorNode } from 'lexical';
import type { ReactNode } from 'react';
import VariableComponent from './VariableComponent';

export interface SerializedVariableNode extends SerializedLexicalNode {
  variableKey: string;
  category: string;
  displayName: string;
}

export class VariableNode extends DecoratorNode<ReactNode> {
  __variableKey: string;
  __category: string;
  __displayName: string;

  static getType(): string {
    return 'variable';
  }

  static clone(node: VariableNode): VariableNode {
    return new VariableNode(
      node.__variableKey,
      node.__category,
      node.__displayName,
      node.__key
    );
  }

  constructor(
    variableKey: string,
    category: string,
    displayName: string,
    key?: NodeKey
  ) {
    super(key);
    this.__variableKey = variableKey;
    this.__category = category;
    this.__displayName = displayName;
  }

  createDOM(config: EditorConfig): HTMLElement {
    const span = document.createElement('span');
    span.className = 'variable-node';
    span.contentEditable = 'false';
    span.style.userSelect = 'none';
    return span;
  }

  updateDOM(): boolean {
    return false;
  }

  decorate(): ReactNode {
    return (
      <VariableComponent
        variableKey={this.__variableKey}
        category={this.__category}
        displayName={this.__displayName}
        nodeKey={this.__key}
      />
    );
  }

  exportJSON(): SerializedVariableNode {
    return {
      type: 'variable',
      version: 1,
      variableKey: this.__variableKey,
      category: this.__category,
      displayName: this.__displayName,
    };
  }

  static importJSON(serializedNode: SerializedVariableNode): VariableNode {
    return $createVariableNode(
      serializedNode.variableKey,
      serializedNode.category,
      serializedNode.displayName
    );
  }

  // Display inline with text
  isInline(): boolean {
    return true;
  }

  // Make the node selectable by keyboard
  isKeyboardSelectable(): boolean {
    return true;
  }

  // Ensure the node is treated as a single unit for selection
  isSegmented(): boolean {
    return false;
  }

  getVariableKey(): string {
    return this.__variableKey;
  }

  getCategory(): string {
    return this.__category;
  }

  getDisplayName(): string {
    return this.__displayName;
  }
}

// Factory function to create a VariableNode
export function $createVariableNode(
  variableKey: string,
  category: string,
  displayName: string
): VariableNode {
  return new VariableNode(variableKey, category, displayName);
}

// Type guard function
export function $isVariableNode(
  node: LexicalNode | null | undefined
): node is VariableNode {
  return node instanceof VariableNode;
}
