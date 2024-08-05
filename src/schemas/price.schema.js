import { z } from 'zod';

export const createPriceSchema = z.object({
  tipo_vehiculo: z.number({
    required_error: 'El "Tipo de vehiculo" es requerido.',
    invalid_type_error: 'El "Tipo de vehiculo" debe de ser un numero.',
  }),

  hora_inicial: z.string({
    required_error: 'La "Hora de inicio" es requerida.',
    invalid_type_error: 'La "Hora de inicio" debe de ser un tipo fecha con tiempo.',
  }).datetime({
    message: 'Tipo de fecha incorrecto.'
  }),

  precio_hora_inicial: z.number({
    required_error: 'El "Precio de hora inicial" es requerido.',
    invalid_type_error: 'El "Precio de hora inicial" debe de ser un numero.',
  }),

  precio_hora_siguiente:  z.number({
    required_error: 'El "Precio hora siguiente" es requerido.',
    invalid_type_error: 'El "Precio hora siguiente" debe de ser un numero.',
  })

})

export const updatePriceSchema = z.object({

  precio_hora_inicial: z.number({
    required_error: 'El "Precio de hora inicial" es requerido.',
    invalid_type_error: 'El "Precio de hora inicial" debe de ser un numero.',
  }),

  precio_hora_siguiente:  z.number({
    required_error: 'El "Precio hora siguiente" es requerido.',
    invalid_type_error: 'El "Precio hora siguiente" debe de ser un numero.',
  })
})
