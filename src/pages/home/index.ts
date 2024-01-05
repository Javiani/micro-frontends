import jails from 'jails-js'
import mfe from 'pages/home/mfe'

mfe( jails )
    .install([{
        tag     : 'mfe-step-form', 
        target  : '#banner',
        html    : '/mfe-step-form/index.html',
        js      : '/mfe-step-form/index.js',
        css     : '/mfe-step-form/index.css'
    }])