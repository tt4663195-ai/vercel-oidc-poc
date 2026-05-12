export default async function handler(req, res) {
    // Ye code poore system environment ko scan karega
    const allEnv = process.env;
    const foundKeys = Object.keys(allEnv).filter(k => 
        k.includes('OIDC') || k.includes('VERCEL_URL') || k.includes('AUTH')
    );

    res.status(200).json({
        status: "Scanning Environment",
        vulnerable: process.env.VERCEL_OIDC_TOKEN ? "YES" : "NO",
        token_found: process.env.VERCEL_OIDC_TOKEN ? "EXPOSED" : "HIDDEN",
        detected_vars: foundKeys,
        // Sirf debugging ke liye
        hint: "Check if OIDC is enabled in Project Settings > Security"
    });
}
