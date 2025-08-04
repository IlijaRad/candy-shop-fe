export const AUTHENTICATION_COOKIE_NAME = "session";
export const REGISTRATION_BANNER_COOKIE_NAME = "showRegistrationBanner";
export const CHANGED_PASSWORD_BANNER_COOKIE_NAME = "changedPasswordBanner";

export type SearchPrams = Promise<{
  [key: string]: string | string[] | undefined;
}>;
