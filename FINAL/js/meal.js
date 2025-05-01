const form = document.getElementById('meal-form')
const historyDiv = document.getElementById('meal-history')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.getElementById('meal-name').value
    const foods = document.getElementById('meal-foods').value
    const calories = document.getElementById('meal-calories').value
    const notes = document.getElementById('meal-notes').value
    const date = document.getElementById('meal-date').value

    const card = document.createElement('div')
    card.classList.add('meal-card')

    card.innerHTML = `
        <h3>${name} <span style="font-weight: normal; font-size: 0.9rem;">(${date})</span></h3>
        <p><strong>Foods:</strong> ${foods}</p>
        <p><strong>Calories:</strong> ${calories}</p>
        <p><strong>Notes:</strong> ${notes}</p>
    `

    historyDiv.appendChild(card)
})