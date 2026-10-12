import dotenv from 'dotenv'; dotenv.config();
import { MCPManager } from './core/tools/mcp-manager-100.js';
import { VoiceEngine } from './core/voice/engine.js';
import { SwarmOrchestrator } from './core/swarm/orchestrator.js';
import { Governor } from './core/governor/governor.js';
import { GodModeHeartbeat } from './core/sovereign/heartbeat-god.js';

console.log(`
 ███╗   ███╗ █████╗ ██████╗ ██╗   ██╗██╗███████╗     ██████╗  ██████╗ ██████╗ 
 ██║   ██║██╔══██╗██╔══██╗██║   ██║██║██╔═════    ██╔═══██╗██╔═████╗██╔═████╗
 ██║   ██║███████║██████╔═══██║   ██║██║███████╗    ██║   ██║██║██╔██║██║██╔██║
 ██║   ██║██╔══██║██╔══██╗══██╗ ██╔═══██║═════██║    ██║   ██║████╔══██║████╔══██║
 ═██████╔══██║  ██║██║  ██║ ═████╔══ ██║███████║    ═██████╔═══██████╔═══██████╔══
`);
const mcp = new MCPManager(); await mcp.connectAll();
const voice = new VoiceEngine(); await voice.init();
const gov = new Governor();
const swarm = new SwarmOrchestrator(mcp, gov); await swarm.start();
const hb = new GodModeHeartbeat(mcp, gov); hb.start(6*60*60*1000);
console.log(`\n🚀 FULL BUILD ONLINE — ${mcp.activeCount}/115 MCP + Voice + Swarm + Governor + UI`);
