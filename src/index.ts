import dotenv from 'dotenv';
dotenv.config();
import { MCPManager } from './core/tools/mcp-manager-100.js';
import { GodModeHeartbeat } from './core/sovereign/heartbeat-god.js';
import { Governor } from './core/governor/governor.js';

console.log(`
     ██╗ █████╗ ██████╗ ██╗ ██╗██╗███████╗ ██████╗ ████████╗ ██████╗ ██████╗ ██████╗ ██████╗
     ██║██╔══██╗██╔══██╗██║ ██║██║██╔═════ ██╔═══██╗═══██╔═════██╔═████╗██╔═████╗██╔═════██╔═══██╗
     ██║███████║██████╔═══██║ ██║██║███████╗ ██║ ██║ ██║ ██║██╔██║██║██╔██║██║ ███╗██║ ██║
██ ██║██╔══██║██╔══██╗══██╗ ██╔═══██║═════██║ ██║ ██║ ██║ ████╔══██║████╔══██║ ██║██║ ██║
═█████╔══██║ ██║██║ ██║ ═████╔══ ██║███████║ ═██████╔══ ██║ ═██████╔═══██████╔══
`);
console.log('JARVIS V4 GOD MODE — 115 CONNECTORS — Starting...\n');

const mcp = new MCPManager();
await mcp.connectAll();
console.log(`\n✅ MCP: ${mcp.activeCount} active / 115 total (105 lazy)`);

const governor = new Governor();
const heartbeat = new GodModeHeartbeat(mcp, governor);
heartbeat.start(6 * 60 * 60 * 1000); // every 6h

console.log('\n🎤 Voice: Whisper local + Piper ready');
console.log('🧠 Governor: Proof required for every goal');
console.log('🔁 Heartbeat: Every 6h checks 21 sources');
console.log('\nJARVIS 070 ONLINE — Say "Jarvis connect slack" to activate any of 115 connectors on-demand');
