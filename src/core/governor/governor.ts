export class Governor {
  validate(goal:any){
    if (!goal.proof) throw new Error('GOAL REJECTED: No proof — atomic write + test + screenshot required');
    return true;
  }
}
