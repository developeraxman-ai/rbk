import { jwtVerify } from "jose";

export async function verifyEdgeJwtToken(token) {
  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return null;
    }

    const encoder = new TextEncoder();
    const result = await jwtVerify(token, encoder.encode(secret));
    return result.payload;
  } catch {
    return null;
  }
}
