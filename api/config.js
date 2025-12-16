// Vercel Serverless Function - Public Config Endpoint
// Returns public configuration values (non-secret, but stored in env for convenience)

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Return public config values
    // These are "public keys" meant to be exposed to the browser
    return res.status(200).json({
        vapiPublicKey: process.env.VAPI_PUBLIC_KEY || '',
        vapiAssistantId: process.env.VAPI_ASSISTANT_ID || ''
    });
}

