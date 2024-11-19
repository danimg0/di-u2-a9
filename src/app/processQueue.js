export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for (let i = 0; i < queue.length; i++) {
      if (typeof queue[i] === 'function') {
        //El elemento individual aqui seria n => n + 1
        //Lo que hacemos aqui seria finalState = la funcion y le pasamos como parametro el finalState, que sustituye a n
        finalState = queue[i] (finalState)
      } else {
        finalState = queue[i]
      }
    }


    return finalState;
  }
  