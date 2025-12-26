
export interface BudgetItem {
  id: string;
  category: string;
  items: {
    label: string;
    cost: number;
    description: string;
  }[];
  total: number;
  timeframe?: string;
}

export interface TimelinePhase {
  month: string;
  title: string;
  activities: string[];
}

export interface MetricData {
  label: string;
  value: number;
  growth: string;
}
