export interface Player {
  evento: string
  fecha: string
  ubicacion: string
  participantes: Participante[]
}

export interface Participante {
  nombre: string
  alias: string
  pais: string
  peso: string
  record: string
  rival: string
  imagen: string
}
