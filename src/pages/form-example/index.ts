import jails from 'jails-js'
import Swiper from 'swiper'

import * as mfeStepForm from '../../mfe/mfe-step-form'
import * as formValidation from '../../components/form-validation'
import config from '../../components/form-validation/config'

jails.register('form-validation', formValidation, { ...config })
jails.register('mfe-step-form', mfeStepForm, { Swiper })

jails.start()