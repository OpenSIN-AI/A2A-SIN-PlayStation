import { createServer, IncomingMessage, ServerResponse } from 'node:http';
const AGENT_ID = process.env.AGENT_ID || '__AGENT__';
const PORT = parseInt(process.env.PORT || '3000', 10);
const FLEET_TOKEN = process.env.A2A_FLEET_TOKEN || '';
async function handleTask(payload: any): Promise<any> {
    console.log(`[A2A Task] ${payload.taskId}: ${payload.instruction}`);
    return { taskId: payload.taskId, status: 'completed', result: { agent: AGENT_ID, executed: payload.instruction }, executionTimeMs: Date.now() };
}
const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-OpenSIN-Requester');
    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }
    if (FLEET_TOKEN) { const auth = req.headers['authorization']; if (!auth || auth !== `Bearer ${FLEET_TOKEN}`) { res.writeHead(401, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'Unauthorized' })); return; } }
    if (req.method === 'GET' && req.url === '/a2a/v1/health') { res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ status: 'alive', agentId: AGENT_ID, version: '1.0.0' })); return; }
    if (req.method === 'POST' && req.url === '/a2a/v1/task') { let body = ''; req.on('data', chunk => { body += chunk.toString(); }); req.on('end', async () => { try { const payload = JSON.parse(body); const result = await handleTask(payload); res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(result)); } catch (e: any) { res.writeHead(400, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ status: 'failed', error: e.message })); } }); return; }
    res.writeHead(404); res.end();
});
server.listen(PORT, () => { console.log(`[A2A Agent] ${AGENT_ID} listening on port ${PORT}`); });
process.on('SIGTERM', () => { console.log('[A2A Agent] Shutting down...'); process.exit(0); });
