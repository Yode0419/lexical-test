// Lexical editor configuration

import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { VariableNode } from '../components/Editor/nodes/VariableNode';

const theme = {
  paragraph: 'editor-paragraph',
  text: {
    bold: 'editor-text-bold',
    italic: 'editor-text-italic',
    underline: 'editor-text-underline',
  },
  list: {
    ul: 'editor-list-ul',
    ol: 'editor-list-ol',
    listitem: 'editor-listitem',
  },
};

export const editorConfig = {
  namespace: 'VariableEditor',
  theme,
  nodes: [
    VariableNode,
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
  ],
  onError: (error: Error) => {
    console.error('Lexical Error:', error);
  },
};
