import { readFileSync, writeFileSync } from "fs"

export function GrabAll(path: string) {
    return JSON.parse(readFileSync(path, { encoding: 'utf8' }))
}

export function Grab(path: string, varname: string) {
    const Ret = GrabAll(path)
    return eval('Ret.' + varname)
}

export function writeAll(path: string, data: any) {
    writeFileSync(path, JSON.stringify(data))
}

export function write(path: string, varname: string, value: any) {
    const Data = GrabAll(path)
    eval('Data.' + varname + ' = value')
    writeAll(path, Data)
}