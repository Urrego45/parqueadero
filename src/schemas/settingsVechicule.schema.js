import { z } from 'zod';

export const createSettingsSchema = z.object({
  parqueadero: z.string({
    required_error: 'El "Parqueadero" es requerido.',
    invalid_type_error: 'El "Parqueadero" debe de ser un texto/UUID.',
  }).uuid({
    message: 'UUID invalido.'
  }),

  tipo_vehiculo: z.number({
    required_error: 'El "Tipo de vehiculo" es requerido.',
    invalid_type_error: 'El "Tipo de vehiculo" debe de ser un numero.',
  }),

  cupos: z.number({
    required_error: 'El "Cupo" es requerido.',
    invalid_type_error: 'El "Cupo" debe de ser un numero.',
  }),
})


export const updateSettingsSchema = z.object({
  tipo_vehiculo: z.number({
    required_error: 'El "Tipo de vehiculo" es requerido.',
    invalid_type_error: 'El "Tipo de vehiculo" debe de ser un numero.',
  }),

  cupos: z.number({
    required_error: 'El "Cupo" es requerido.',
    invalid_type_error: 'El "Cupo" debe de ser un numero.',
  }),
})
