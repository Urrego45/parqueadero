import { z } from 'zod';

export const createParkingSchema = z.object({
  empresa: z.string({
    required_error: 'El "Parqueadero" es requerido.',
    invalid_type_error: 'El "Parqueadero" debe de ser un texto/UUID.',
  }).uuid({
    message: 'UUID invalido.'
  }),

  nombre: z.string({
    required_error: 'El "Nombre" del parqueadero es requerido.',
    invalid_type_error: 'El "Nombre" debe de ser un texto.'
  }).max(30, {
      message: 'Este "Nombre" no puede pasar de 30 caracteres'
  }).min(1, {
      message: 'Este campo no puede estar vacio.'
  }),

  direccion: z.string({
    required_error: 'La "Dirección" del parqueadero es requerido.',
    invalid_type_error: 'La "Dirección" debe de ser un texto.'
  }).max(50, {
    message: 'La "Dirección" no puede pasar de 50 caracteres'
  }).min(1, {
    message: 'Este campo no puede estar vacio.'
  }),

  telefono: z.string({
    required_error: 'El "Teléfono" del parqueadero es requerido.',
    invalid_type_error: 'El "Teléfono" debe de ser un texto.'
  }).max(15, {
    message: 'Este "Teléfono" no puede pasar de 15 caracteres'
  }).min(1, {
    message: 'Este campo no puede estar vacio.'
  }),

})

export const updateParkingSchema = z.object({
  nombre: z.string({
    required_error: 'El "Nombre" del parqueadero es requerido.',
    invalid_type_error: 'El "Nombre" debe de ser un texto.'
  }).max(30, {
      message: 'Este "Nombre" no puede pasar de 30 caracteres'
  }).min(1, {
      message: 'Este campo no puede estar vacio.'
  }),

  direccion: z.string({
    required_error: 'La "Dirección" del parqueadero es requerido.',
    invalid_type_error: 'La "Dirección" debe de ser un texto.'
  }).max(50, {
    message: 'La "Dirección" no puede pasar de 50 caracteres'
  }).min(1, {
    message: 'Este campo no puede estar vacio.'
  }),

  telefono: z.string({
    required_error: 'El "Teléfono" del parqueadero es requerido.',
    invalid_type_error: 'El "Teléfono" debe de ser un texto.'
  }).max(15, {
    message: 'Este "Teléfono" no puede pasar de 15 caracteres'
  }).min(1, {
    message: 'Este campo no puede estar vacio.'
  }),
})
