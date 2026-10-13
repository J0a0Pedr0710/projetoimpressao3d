export type IAlert = {
  id?: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'link';
  isFullWitdh?: boolean;
  isClose?: boolean;
  onClose?: () => void;
  message: string;
  time?: number;
};

export type IStyleAlert = {
  $type: 'success' | 'error' | 'warning' | 'info' | 'link';
  $isFullWitdh: boolean;
};
