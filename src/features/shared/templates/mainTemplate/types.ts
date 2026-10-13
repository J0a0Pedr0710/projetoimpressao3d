import type { IElement } from 'props';

import type { IMainTemplateRouteProps } from '@/features/shared/hooks/useMainTemplateRoute/types';

export type IMainTemplate = IMainTemplateRouteProps & IElement;

export type IMainTemplateContentStyle = { $isSideBarOpen: boolean; $hideBreadCrumb: boolean };
