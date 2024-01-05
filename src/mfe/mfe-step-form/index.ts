
import { animation } from './animation'

export default async function stepForm ({ main, elm, on, dependencies }) {
    
    const { Swiper } = dependencies
    const wrapper = elm.querySelector('.swiper')
    const canvas = elm.querySelector('canvas')
    const swiper = new Swiper(wrapper, { allowTouchMove: false })
    const { checking, numLook, handsUp, trigSuccess } = await animation( canvas )

    let formData = {}

    main(_ => {
        on('input', 'input[type="text"]', ontextchange)
		on('focus', 'input[type="text"]', ontextfocus)
		on('focus', 'input[name="password"]', onPasswordFocus)
		on('blur', 'input[name="password"]', onPasswordBlur)
		on('click', 'button[data-reset]', onReset)
        on('form-validation:submit', 'form', submit)
        on('click', '[data-prev]', prev)
    })

    const ontextchange = (e) => {
		const num = e.target.value.length
		numLook.value = num * 1.6
	}

    const ontextfocus = (e) => {
        checking.value = true
    }

	const onPasswordFocus = (e) => {
		handsUp.value = true
	}

	const onPasswordBlur = (e) => {
		handsUp.value = false
	}

	const onReset = (e) => {
		checking.value = false
	}

    const submit = (e, { data }) => {
        
        formData = {...formData, ...data }
        
        if( e.delegateTarget.finish ) {
            send()
        } else {
            swiper.slideNext()
        }
    }

    const prev = () => {
        swiper.slidePrev()
    }

    const send = () => {
        console.log( formData )
        setTimeout(_ => trigSuccess.fire(), 2000)
    }
}