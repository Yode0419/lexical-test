// TypeScript type definitions for variables

export interface Variable {
  key: string;           // Unique identifier (e.g., "client_first_name")
  displayName: string;   // Display text (e.g., "{{First Name}}")
}

export interface VariableCategory {
  name: string;          // Category name (e.g., "Client Info")
  variables: Variable[];
}

export interface VariableData {
  key: string;
  category: string;
  displayName: string;
}
