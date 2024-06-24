export interface INotification {
    id: number;
    type: string;
    title: string;
    description: string;
    read: boolean;
    metricUrl: string;
 }


export enum Statuses {
    Idle = "Idle",
    Loading = "Loading",
    Submitted = "Submitted",
    Error = "Error",
  }