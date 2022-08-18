import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'



const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? updItem : item)))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext