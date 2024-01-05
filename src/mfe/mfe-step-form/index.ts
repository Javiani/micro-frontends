import Swiper from 'swiper'
import config from 'components/form-validation/config'
import * as mfeStepForm from './app'
import * as formValidation from 'components/form-validation'

window.__jails__mfes.push({
    name: 'mfe-step-form',
    module: mfeStepForm,
    dependencies: { Swiper },
    components: [{
        name: 'form-validation',
        module: formValidation,
        dependencies: { ...config }
    }]
})
