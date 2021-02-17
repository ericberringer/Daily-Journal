const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "05/09/2021",
        concept: "Death by Code",
        entry: "Learned that the term 'Learn to Code' does not quite encompass the amount of work and difficulty involved with learning this new skill.",
        mood: "Angry"
    },
    {
        id: 3,
        date: "07/24/2025",
        concept: "Javascript",
        entry: "Javascript makes me want to die.",
        mood: "Indifferent"
    }
]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}