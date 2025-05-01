const form = document.getElementById('workout-form')
const historyDiv = document.getElementById('workout-history')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('workout-name').value
    const exercises = document.getElementById('workout-exercises').value
    const duration = document.getElementById('workout-duration').value
    const notes = document.getElementById('workout-notes').value
    const date = document.getElementById('workout-date').value

    const card = document.createElement('div')
    card.classList.add('workout-card')
    card.innerHTML = `
        <h3>${name} <span style="font-weight: normal; font-size: 0.9rem;">(${date})</span></h3>
        <p><strong>Exercises:</strong> ${exercises}</p>
        <p><strong>Duration:</strong> ${duration} minutes</p>
        <p><strong>Notes:</strong> ${notes}</p>
    `
    historyDiv.appendChild(card)
})