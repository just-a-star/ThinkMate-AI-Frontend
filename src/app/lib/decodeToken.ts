import { jwtDecode, JwtPayload } from "jwt-decode";

export function decodeToken(token: string): any{
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}
