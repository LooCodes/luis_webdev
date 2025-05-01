const exercises = {
    chest: [{name: "Push-Up", preview: "Basic bodyweight chest exercise.", youtubeId: "IODxDxX7oi4?si=U_F2jCiR9isZmKEf", description: "Push-ups strengthen your chest, shoulders, and triceps. Great for beginners and can be modified easily.", src: "./img/push-up.png"},
        {name: "Barbell Bench Press", preview: "Classic chest strength builder.", youtubeId: "rT7DgCr-3pg?si=NYPpG9B85k3l1oeK", description: "The barbell bench press targets the chest, triceps, and shoulders. Focus on good form and controlled motion.", src: "./img/bench.png" }
    ],
    back: [{name: "Pull-Up", preview: "Bodyweight back exercise.", youtubeId: "6zyx46Vpato?si=VmA0vTs_uU4O0ci7", description: "Pull-ups primarily work your lats and upper back. They also strengthen arms and core.", src: "./img/pull-up.png"},
        {name: "Barbell Row", preview: "Build back thickness.", youtubeId: "pNzp064j8g0?si=WFxCwfa13RusUnsh", description: "Barbell rows target the middle back, rhomboids, and rear deltoids. Maintain a flat back for safety.", src: "./img/barbell-row.png"}
    ],
    legs: [{name: "Squat", preview: "Ultimate leg exercise.", youtubeId: "CsPAsICeRsM?si=xaxjCQsiLPZDTrs2", description: "Squats engage quads, hamstrings, glutes, and core. They are one of the best full-body strength movements.", src: "./img/squat.png" },
        {name: "Lunges", preview: "Single-leg strength builder.", youtubeId: "818SkLAPyKY?si=2h6loE3dMjBySZ63", description: "Lunges work your quads, hamstrings, glutes, and improve balance. Can be done weighted or bodyweight.", src: "./img/lunge.png" }
    ],
    cardio: [{name: "Jump Rope", preview: "High-intensity cardio drill.", youtubeId: "u3zgHI8QnqE?si=To1LKvm6OkX1eR2B", description: "Jump rope improves cardiovascular endurance, coordination, and burns calories quickly.", src: "./img/jump-roping.png" },
        {name: "Burpees", preview: "Full body cardio exercise.", youtubeId: "qLBImHhCXSw?si=8k7gjT_cNo1ceplB", description: "Burpees are a high-intensity full-body movement that boosts cardio endurance and strength.", src: "./img/burpees.png" }
    ]
}

const bp = document.querySelectorAll('#body-parts-selection input[type="radio"]')
bp.forEach(btn => {
    btn.addEventListener('change', () => {
        const selectedBodyPart = btn.value
        document.getElementById('exercise-preview-list').style.display = 'flex'
        document.getElementById('exercise-detail').style.display = 'none'
        printPreview(selectedBodyPart)
    })
})

function printPreview(bodyPart) {
    const previewDiv = document.querySelector('#exercise-preview-list')
    previewDiv.innerHTML = ""
    const exerciseList = exercises[bodyPart]
    exerciseList.forEach((exercise, index) => {
        const exerciseCard = document.createElement('div')
        exerciseCard.classList.add('exercise-preview-card')

        const img = document.createElement('img')
        img.src = exercise.src 
        img.alt = exercise.name
        img.classList.add('exercise-preview-img')

        const textDiv = document.createElement('div')
        textDiv.classList.add('exercise-preview-text')
        textDiv.innerHTML = `<h3>${exercise.name}</h3><p>${exercise.preview}</p>`

        exerciseCard.appendChild(img)
        exerciseCard.appendChild(textDiv)

        exerciseCard.addEventListener('click', () => {
            printExercise(bodyPart,index)
        })

        previewDiv.appendChild(exerciseCard)
    })
}



function printExercise(bodyPart, index) {
    document.getElementById('exercise-preview-list').style.display = 'none'
    document.getElementById('exercise-detail').style.display = 'flex'
    const exercise = exercises[bodyPart][index]
    const detailDiv = document.getElementById('exercise-detail')
    document.getElementById('exercise-preview-list').style.display = 'none'

    detailDiv.innerHTML = `
    <div class="exercise-detail-card">
      <h2>${exercise.name}</h2>
      <p>${exercise.description}</p>
      <div class="video-container">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/${exercise.youtubeId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `
}


