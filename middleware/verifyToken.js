import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const tokenFromReq = req.header("Authorization")?.split(" ")[1];
  if (!tokenFromReq)
    return res.status(401).json({ error: "Access denied, No token available." });

  try {
    const decodedToken = jwt.verify(tokenFromReq, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token." });
  }
};

export default auth;
