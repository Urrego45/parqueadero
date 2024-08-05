import { z } from 'zod';

export const createUserParkingSchema = z.object({
  parqueadero: z.string({
    required_error: 'El "Parqueadero" es requerido.',
    invalid_type_error: 'El "Parqueadero" debe de ser un texto/UUID.',
  }).uuid({
    message: 'UUID invalido.'
  }),

  usuario: z.string({
    required_error: 'El "Usuario" es requerido.',
    invalid_type_error: 'El "Usuario" debe de ser un texto/UUID.',
  }).uuid({
    message: 'UUID invalido.'
  }),

  fecha_inicio: z.string({
    required_error: 'La "Fehca de ingreso" es requerida.',
    invalid_type_error: 'La "Fehca de ingreso" debe de ser un tipo fecha con tiempo.',
  }).datetime({
    message: 'Tipo de fecha incorrecto.'
  }),

})

export const updateUserParkingSchema = z.object({
  fecha_final: z.string().datetime().optional(),
})