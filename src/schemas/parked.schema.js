import { z } from 'zod';

export const createParkedSchema = z.object({
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

  placa: z.string({
    required_error: 'La "Placa" es requerida.',
    invalid_type_error: 'La "Placa" debe de ser un texto.',
  }).max(6, {
    message: 'La "Placa" no puede pasar de 6 caracteres.'
  }),

  fecha_ingreso: z.string({
    required_error: 'La "Fecha de ingreso" es requerida.',
    invalid_type_error: 'La "Fecha de ingreso" debe de ser un tipo fecha con tiempo.',
  }).datetime({
    message: 'Tipo de fecha incorrecto.'
  }),
})

export const updateParkedSchema = z.object({
  tipo_vehiculo: z.number({
    required_error: 'El "Tipo de vehiculo" es requerido.',
    invalid_type_error: 'El "Tipo de vehiculo" debe de ser un numero.',
  }),

  placa: z.string({
    required_error: 'La "Placa" es requerida.',
    invalid_type_error: 'La "Placa" debe de ser un texto.',
  }).max(6, {
    message: 'La "Placa" no puede pasar de 6 caracteres.'
  }),

  fecha_salida: z.string().datetime().optional(),
})
