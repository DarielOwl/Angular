import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`
console.log("Hola Mundo!")