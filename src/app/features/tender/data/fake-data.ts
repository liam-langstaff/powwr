import {Status} from "../../../shared/features/ui/status-pill/enums/status";
import {TenderStep} from "../interfaces/tender-steps";

export const TENDER_CARDS: TenderStep[] = [
  {
    title: 'Customer information',
    description: 'Enter the basic information about the client.',
    status: Status.pending
  },
  {
    title: 'Meter lookup & usage data',
    description: 'Lookup for meter information and upload usage data.',
    status: Status.completed
  },
  {
    title: 'Suppliers & products',
    description: 'Select suppliers, products, and terms.',
    status: Status.pending
  },
  {
    title: 'Documents',
    description: 'Attach documents to tender, like contract and terms of service.',
    status: Status.overdue
  },
  {
    title: 'Review & submit',
    description: 'Review all the information, add a custom message and submit the tender.'
  }
];
