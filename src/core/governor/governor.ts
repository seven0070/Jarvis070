export class Governor { validate(g:any){ if(!g.proof) throw new Error('No proof'); return true; } }
