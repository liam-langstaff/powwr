import {Status} from "../../../shared/features/ui/status-pill/enums/status";

export interface TenderStep {
  title: string;
  description: string;
  status?: Status;
}
