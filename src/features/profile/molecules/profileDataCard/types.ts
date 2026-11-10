export type IProfileDataCardProps = {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
  };
  onEdit?: () => void;
  onExclude?: () => void;
  onChangePassword?: () => void;
};
