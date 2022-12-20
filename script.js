const DEFAULT_DELAY = 5

function main(){
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    if( !hasParams(urlParams) ){
        alert("Missing destination")
        return
    }

    const openDestinationRunnable = () => {
        openDestination(urlParams)
    }
    delay(urlParams, openDestinationRunnable)
}

function hasParams(urlParams){
    return urlParams.has("d")
}

function delay(urlParams, callback){
    const delayDuration = urlParams.has("delay") ? urlParams.get("delay") : DEFAULT_DELAY
    setTimeout(callback, delayDuration * 1000)
}

function openDestination(urlParams){
    const destination = urlParams.get("d")
    window.open(destination, "_self", false)
}


main()