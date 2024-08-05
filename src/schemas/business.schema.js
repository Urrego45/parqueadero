import { z } from 'zod';

export const createUpdateBusinessSchema = z.object({
  nombre: z.string({
    required_error: 'El "Nombre" de la empresa es requerido.',
    invalid_type_error: 'El "Nombre" debe de ser un texto.'
  }).max(30, {
    message: 'Este "Nombre" no puede pasar de 30 caracteres'
  }).min(1, {
    message: 'Este campo no puede estar vacio.'
  }),

  direccion: z.string({
    required_error: 'La "Dirección" de la empresa es requerido.',
    invalid_type_error: 'La "Dirección" debe de ser un texto.'
  }).max(50, {
    message: 'La "Dirección" no puede pasar de 50 caracteres'
  }).min(1, {
    message: 'Este campo no puede estar vacio.'
  }),

  telefono: z.string({
    required_error: 'El "Teléfono" de la empresa es requerido.',
    invalid_type_error: 'El "Teléfono" debe de ser un texto.'
  }).max(15, {
    message: 'Este "Teléfono" no puede pasar de 15 caracteres'
  }).min(1, {
    message: 'Este campo no puede estar vacio.'
  }),
})

