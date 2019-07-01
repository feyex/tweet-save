export interface JwtResponse {
  user: {
    id: string,
    password: string,
    email: string,
    token: string
    // expires_in: Date;
  };
}
/** Assume the API uses Jwtoken to authenticate user access */
