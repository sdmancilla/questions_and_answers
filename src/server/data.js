const questions = [
    {
        question: '¿Cuál es el color del agua?',
        answers: ['Azul', 'Blanco', 'Amarillo', 'Verde'],
        correct: 3,
        difficulty: 'begginer'
    },
    {
        question: '¿Cuántos pelos tiene un gato?',
        answers: ['Muchos', 'Pocos', '3', 'Más'],
        correct: 0,
        difficulty: 'easy'
    },
    {
        question: '¿Cuántos gatos caben en un cajón de 3 posiciones?',
        answers: ['1', '2', '3', '4'],
        correct: 1,
        difficulty: 'medium'
    },
    {
        question: '¿A qué edad se pensiona Capacho?',
        answers: ['68', '75', '30', 'Nunca'],
        correct: 3,
        difficulty: 'hard'
    },
    {
        question: 'Complete la oración: Soy',
        answers: [
            'Una buena persona',
            'Esta no es',
            'Esta tampoco',
            'Esta menos'
        ],
        correct: 0,
        difficulty: 'impossible'
    }
]

const history = [

]

module.exports = { questions, history };