import { con } from './connection.js'

export function listarViloes() {
    const comando = `
    SELECT id_vilao     id,
           nm_vilao     nome,
           ds_maldades  maldades,
           bt_podevoar  podevoar
    `
}