import * as yup from 'yup'
const nowYear = new Date().getFullYear().toString().slice(1)

const COMMON_ERROR_MESSAGES = {
  requerided: "Can't be blank"
}

export const schema = yup.object({
  cardHolderName: yup.string().required(COMMON_ERROR_MESSAGES.requerided),
  cardNumber: yup
    .string()
    .typeError(COMMON_ERROR_MESSAGES.requerided)
    .required(COMMON_ERROR_MESSAGES.requerided)
    .min(0)
    .length(19, 'Wrong format'),
  expDate: yup.object({
    month: yup
      .number()
      .typeError('Month ' + COMMON_ERROR_MESSAGES.requerided.toLowerCase())
      .required(COMMON_ERROR_MESSAGES.requerided)
      .min(1, 'Wrong month')
      .max(12, 'Wrong month'),
    year: yup
      .number()
      .typeError('Year ' + COMMON_ERROR_MESSAGES.requerided.toLowerCase())
      .required(COMMON_ERROR_MESSAGES.requerided)
      .min(parseInt(nowYear), 'Wrong year')
  }),
  cvc: yup
    .number()
    .typeError(COMMON_ERROR_MESSAGES.requerided)
    .required(COMMON_ERROR_MESSAGES.requerided)
    .min(100, 'Wrong value')
    .max(999, 'Wrong value')
})

// .test({
//     name: 'test',
//     test: function (value, ctx) {
//       if (!value.month || !value.year) {
//         return ctx.createError({ message: COMMON_ERROR_MESSAGES.requerided })
//       }
//       return true
//     }
//   }),
