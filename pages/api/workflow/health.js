export default async function handler(req, res) {
    // 1. Headers se token nikalne ki koshish (Documentation ke mutabiq)
    const headerToken = req.headers['x-vercel-oidc-token'];
    
    // 2. Environment se token check karna
    const envToken = process.env.VERCEL_OIDC_TOKEN;

    const finalToken = headerToken || envToken || "Not Found";

    res.status(200).json({
        vulnerable: finalToken !== "Not Found" ? "YES" : "NO",
        source: headerToken ? "HTTP_HEADER" : (envToken ? "ENV_VARIABLE" : "NONE"),
        token_preview: finalToken !== "Not Found" ? `${finalToken.substring(0, 20)}...` : "null",
        all_headers: Object.keys(req.headers).filter(h => h.includes('vercel')), // Tennyson ko proof dikhane ke liye
        note: "Checking both x-vercel-oidc-token header and environment variables."
    });
}
