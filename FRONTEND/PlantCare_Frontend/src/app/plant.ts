import { Guid } from "guid-typescript"

export class Plant {
    id: string = Guid.create().toString()
    name: string = ""
    water: string = ""
    light: string = ""
    homeTips: string[]=[]
}
