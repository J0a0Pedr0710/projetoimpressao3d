import type { IBreadCrumbPages } from '@/features/shared/molecules/breadCrumb/types';

export type IMainTemplateRouteProps = {
  pages?: IBreadCrumbPages[];
  actualPage?: string;
  mobileUserSectionIsVisible?: boolean;
  hideBreadCrumb?: boolean;
  allowContextLoading?: boolean;
};
