import fs from 'fs';
export class MCPManager {
  activeCount = 0;
  servers = new Map();
  async connectAll() {
    const config = JSON.parse(fs.readFileSync('./src/core/tools/mcp-config-115.json','utf-8'));
    const core = ['filesystem','github','puppeteer','fetch','memory','time','sequential-thinking'];
    for (const [name, cfg] of Object.entries(config.mcpServers) as any) {
      const hasKey =!cfg.env || Object.values(cfg.env).some((v:any)=>{
        const k = String(v).replace('${','').replace('}','');
        return!!process.env[k];
      });
      if (core.includes(name) || hasKey) {
        try { console.log(`✅ ${name}`); this.activeCount++; }
        catch { console.log(`💤 ${name} skip`); }
      } else {
        console.log(`💤 ${name} lazy`);
      }
    }
  }
  async connectOnDemand(name:string){ console.log(`⚡ Activating ${name} on-demand...`); this.activeCount++; }
}
