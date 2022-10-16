import {Api} from 'telegram'
import { GramTGCalls } from "tgcalls-next";
import {EditParams} from 'tgcalls-next'

export default class Call extends GramTGCalls{
  protected volume?: number

  public edit(params: EditParams, participant?: Api.TypeEntityLike): Promise<boolean> {
    this.volume = params.volume
    return super.edit(params, participant);
  }
}
