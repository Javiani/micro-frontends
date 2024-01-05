
window.__jails__mfes = []

export default function mfe( jails ) {
    
    return {
        
        async install( mfes ) {
            
            mfes.forEach(({ tag, js, css, target, html }) => {
                
                if( css ) {
                    loadCss(css)
                }

                if( js ) {
                    loadScript(js)
                    .then(_ => {
                        
                        const mfe = window.__jails__mfes.find( mfe => mfe.name == tag )
                        mfe.components?.forEach( component => jails.register(component.name, component.module, component.dependencies))
                        jails.register(mfe.name, mfe.module, mfe.dependencies)
                        
                        loadHTML(html)
                            .then( xhtml => {
                                const element = document.querySelector(target)
                                element.innerHTML = xhtml
                                jails.start(element.parentNode) 
                            }) 
                    })
                }
            })
    
            return this
        }
    }
    
}

const loadCss = (url) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    document.head.appendChild(link)
}

const loadScript = ( url ) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.onload = resolve
        document.head.appendChild(script)
    })
}

const loadHTML = (html) => {
    return fetch(html)
        .then( response => response.text() )
}