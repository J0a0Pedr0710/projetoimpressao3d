import type { IAppContext, IAuthContext } from "contexts";
import { projectFaker } from "../common/faker";
import { mockUser } from "./models";

export const mockAppContext: IAppContext = {
    loading: false,
    setLoading: vi.fn(),
    layoutMenuOpen: null,
    setLayoutMenuOpen: vi.fn(),
    openAlert: vi.fn(),
    isScreenXxs: true,
    isScreenXs: true,
    isScreenSm: true,
    isScreenMd: true,
    isScreenLg: true,
    isScreenXl: true,
    isScreenXl2: true,
    isNotifyDeparture: false,
    setIsNotifyDeparture: vi.fn(),
    openNotifyDepartureModal: vi.fn(),
    pathname: '/',
  };

  export const mockAuthContext: IAuthContext = {
    isTokenValid: true,
    logout: vi.fn(),
    token: projectFaker.string.uuid(),
    user: mockUser,
    setToken: vi.fn(),
    setUser: vi.fn(),
  };