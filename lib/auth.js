import jwt from "jsonwebtoken";

export function signToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(req) {
  const header = req.headers.authorization;
  if (!header) throw new Error("No auth header");
  const token = header.replace("Bearer ", "");
  return jwt.verify(token, process.env.JWT_SECRET);
}
