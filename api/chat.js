// Vercel Serverless Function - Claude API Proxy
// This keeps your API key secure on the server side

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get API key from environment variable
    const apiKey = process.env.CLAUDE_API_KEY;
    
    if (!apiKey) {
        console.error('CLAUDE_API_KEY environment variable not set');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const { messages, system, max_tokens = 400 } = req.body;

        // Validate required fields
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages array is required' });
        }

        // Call Claude API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-haiku-20241022',
                max_tokens: max_tokens,
                system: system || '',
                messages: messages
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Claude API error:', errorData);
            return res.status(response.status).json({ 
                error: errorData.error?.message || 'Claude API error' 
            });
        }

        const data = await response.json();
        
        // Return the response
        return res.status(200).json(data);

    } catch (error) {
        console.error('Proxy error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

