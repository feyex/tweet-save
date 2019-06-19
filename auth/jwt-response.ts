export interface JwtResponse {
  user: {
    id: number,
    fullName: string,
    email: string,
    access_token: string
    expires_in: Date;
  };
}
/** Assume the API uses Jwtoken to authenticate user access */
