// Variable categories and their definitions

import type { VariableCategory } from '../types/variables';

export const variableCategories: VariableCategory[] = [
  {
    name: "Client Info",
    variables: [
      { key: "client_first_name", displayName: "First Name" },
      { key: "client_last_name", displayName: "Last Name" },
      { key: "client_full_name", displayName: "Full Name" },
      { key: "client_email", displayName: "Email" }
    ]
  },
  {
    name: "Inspector Info",
    variables: [
      { key: "inspector_first_name", displayName: "First Name" },
      { key: "inspector_last_name", displayName: "Last Name" },
      { key: "inspector_full_name", displayName: "Full Name" },
      { key: "inspector_phone", displayName: "Phone" },
      { key: "inspector_email", displayName: "Email" },
      { key: "inspector_company", displayName: "Company Name" }
    ]
  },
  {
    name: "Inspection Details",
    variables: [
      { key: "property_address", displayName: "Property Address" },
      { key: "inspection_date", displayName: "Date" },
      { key: "inspection_time", displayName: "Time" },
      { key: "inspection_datetime", displayName: "Date & Time" },
      { key: "report_link", displayName: "Report Link" }
    ]
  }
];
