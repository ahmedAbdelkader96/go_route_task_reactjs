import { decryptToken, encryptToken } from "./encryption";

// Define the type for the tokens
interface Tokens {
  accessToken: string;
  refreshToken: string;
}

// Save tokens to localStorage
export const encryptAndSaveTokens = (accessToken: string, refreshToken: string): void => {
  const encryptedAccessToken = encryptToken(accessToken);
  const encryptedRefreshToken = encryptToken(refreshToken);

  localStorage.setItem("accessToken", encryptedAccessToken);
  localStorage.setItem("refreshToken", encryptedRefreshToken);
};


export const decryptAndGetTokens = (): Tokens | null => {
  const encryptedAccessToken = localStorage.getItem("accessToken");
  const encryptedRefreshToken = localStorage.getItem("refreshToken");

  if (encryptedAccessToken && encryptedRefreshToken) {
    const accessToken = decryptToken(encryptedAccessToken);
    const refreshToken = decryptToken(encryptedRefreshToken);

    return { accessToken, refreshToken };
  }

  return null;
};


export const clearTokensAndUserName = (): void => {
  localStorage.removeItem("userName");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}