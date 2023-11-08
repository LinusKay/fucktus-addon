const spans = document.querySelectorAll('span')
for (let i=0; i < spans.length; i++) {
    let span = spans[i];
    if(span.innerHTML.includes('Outage')) {
        span.innerHTML = span.innerHTML.replace('Outage', 'Fucked')
    }
    else if(span.innerHTML.includes('Degraded Performance')) {
        span.innerHTML = span.innerHTML.replace('Degraded Performance', 'Kinda Fucked')
    }
    else if(span.innerHTML.includes('Operational')) {
        span.innerHTML = span.innerHTML.replace('Operational', 'Un-Fucked')
    }
}