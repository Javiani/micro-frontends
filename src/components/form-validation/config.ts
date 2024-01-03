export default {
    
    validations : {
        required(value, input) {
            if (!value) return 'This field is required'
            return ''
        },
    
        email(value, input) {
            if (!value) return ''
            if (!value.match(/(.*)@(.*)\.\w{2,}/)) return 'Invalid email'
            return ''
        },
    
        number(value, input) {
            if (value.match(/\D/g)) return 'This field takes only number'
            return ''
        }
    },

    masks: {
        number(value, input) {
            return value.replace(/\D/, '')
        }
    }
}