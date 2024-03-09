export interface TooltipProps {
  icon: {
    size: number;
    color?: string;
    source: string;
  };
  title?: string;
  onPress?: () => void;
}
