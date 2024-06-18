import { z } from 'zod';

const msgMin = 'Este campo no puede estar vacio.'

export const registerSchema = z.object({
  nombre_completo: z.string({
    required_error: 'El "Nombre" es requerido.',
    invalid_type_error: 'El "Nombre" debe de ser un texto.',
  }).max(60, {
    message: 'El nombre nom puede pasar de 60 caracteres.'
  }).min(1, {
    message: msgMin
  }),

  telefono: z.string({
    required_error: 'El "Teléfono" es requerido.',
    invalid_type_error: 'El "Teléfono" debe de ser un texto.',
  }).max(10, {
    message: 'El número de teléfono solo puede tener 10 caracteres.'
  }).min(1, {
    message: msgMin
  }),

  cedula: z.string({
    required_error: 'El "Cédula" es requerido.',
    invalid_type_error: 'El "Cédula" debe de ser un texto.',
  }).max(10, {
    message: 'El número de cédula solo puede tener 10 caracteres.'
  }).min(1, {
    message: msgMin
  }),

  rol: z.number({
    required_error: 'El "Rol" es requerido.',
    invalid_type_error: 'El "Rol" debe de ser un texto.',
  }),

  correo: z.string({
    required_error: 'El "Correo" es requerido.',
    invalid_type_error: 'El "Correo" debe de ser un texto.',
  }).max(40, {
    message: 'El correo electronico solo puede tener 40 caracteres.'
  }).min(1, {
    message: msgMin
  }),

  contrasenia: z.string({
    required_error: 'La "Contraseña" es requerido.',
    invalid_type_error: 'La "Contraseña" debe puede ser texto, números y simbolos.',
  }).max(16, {
    message: 'La contraseña puede tener como maximo 16 caracteres.'
  }).min(8, {
    message: 'La contraseña puede tener como minimo 8 caracteres.'
  }),

})


export const loginSchema = z.object({
  correo: z.string({
    required_error: 'El "Correo" es requerido.',
    invalid_type_error: 'El "Correo" debe de ser un texto.',
  }).max(40, {
    message: 'El correo electronico solo puede tener 40 caracteres.'
  }).min(1, {
    message: msgMin
  }),

  contrasenia: z.string({
    required_error: 'La "Contraseña" es requerido.',
    invalid_type_error: 'La "Contraseña" debe puede ser texto, números y simbolos.',
  }).max(16, {
    message: 'La contraseña puede tener como maximo 16 caracteres.'
  }).min(8, {
    message: 'La contraseña puede tener como minimo 8 caracteres.'
  }),
})

