import * as yup from 'yup'
const mesesA = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const now = new Date()
export const schema = yup.object({
  year: yup
    .number()
    .required('This field is required')
    .typeError('This field is required')
    .test({
      name: 'test-year-future',
      test: function (value, ctx) {
        if (value > now.getUTCFullYear()) {
          return ctx.createError({ message: 'Must be in the past' })
        }
        return true
      }
    }),
  month: yup
    .number()
    .required('This field is required')
    .typeError('This field is required')
    .min(1, 'Must be a valid month')
    .max(12, 'Must be a valid month')
    .test({
      name: 'test-month-future',
      test: function (value, ctx) {
        if (value - 1 > now.getUTCMonth()) {
          return ctx.createError({ message: 'Must be in the past' })
        }
        return true
      }
    }),
  day: yup
    .number()
    .required('This field is required')
    .typeError('This field is required')
    .min(1, 'Must be a valid day')
    .test({
      name: 'test-day',
      test: function (value, ctx) {
        if (value < 1 || value > mesesA[this.parent.month - 1]) {
          return ctx.createError({ message: 'Must be a valid day' })
        }

        return true
      }
    })
    .test({
      name: 'test-day-future',
      test: function (value, ctx) {
        if (value > now.getUTCDate()) {
          return ctx.createError({ message: 'Must be in the past' })
        }
        return true
      }
    })
})
