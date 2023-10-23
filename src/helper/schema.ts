import * as yup from 'yup'
const mesesA = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const now = new Date().getUTCFullYear()
export const schema = yup.object({
  year: yup
    .number()
    .required('This field is required')
    .typeError('This field is required')
    .max(now, 'Must be in the past'),
  month: yup
    .number()
    .required('This field is required')
    .typeError('This field is required')
    .min(1, 'Must be a valid month')
    .max(12, 'Must be a valid month'),
  day: yup
    .number()
    .required('This field is required')
    .typeError('This field is required')
    .min(1, 'Must be a valid day')
    .test({
      name: 'test-name',

      test: function (value, ctx) {
        const intValue = value

        if (intValue < 1 || intValue > mesesA[this.parent.month - 1]) {
          return ctx.createError({ message: 'Must be a valid day' })
        }

        return true
      }
    })
})
