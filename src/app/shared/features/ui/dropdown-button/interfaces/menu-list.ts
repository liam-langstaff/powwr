export interface MenuList {
  id: string;
  label: string;
  route: string;
  callback?: () => void;
  icon?: string;
}
