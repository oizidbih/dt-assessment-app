import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

let openai: OpenAI | null = null;

try {
    if (apiKey) {
        openai = new OpenAI({
            apiKey: apiKey,
            dangerouslyAllowBrowser: true
        });
    }
} catch (e) {
    console.error("Failed to initialize OpenAI client:", e);
}

export interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export interface QuestionContext {
    pillarTitle: string;
    description?: string;
    questions: {
        index: number;
        id: string;
        text: string;
        description: string;
        standardMapping: string[];
    }[];
    activeQuestionId?: string;
    previousAnswers: {
        pillarTitle: string;
        questionText: string;
        answerLabel: string;
    }[];
}

export const getAIResponse = async (messages: ChatMessage[], context?: QuestionContext) => {
    if (!apiKey) {
        return "I'm sorry, but my AI core is currently offline (OpenAI API key missing). Please contact your administrator to enable my intelligent features.";
    }

    try {
        const systemPrompt = `You are the "DTA Strategic Companion", a world-class digital transformation consultant specializing in Qatar's Digital Government Excellence.
        Your goal is to assist "Entity Focal Points" in completing their maturity assessment with high rigor and transparency.
        
        Current Module Context:
        - Module: ${context?.pillarTitle || 'General'}
        
        Available Questions on this Page:
        ${context?.questions.map(q => `${q.index}. [ID: ${q.id}] ${q.text} (Focus: ${q.description})`).join('\n') || 'None visible.'}
        
        Active Question Focus:
        ${context?.activeQuestionId ? `The user is currently focusing on [ID: ${context.activeQuestionId}].` : 'The user is browsing the module.'}
        
        Summary of Previous Answers:
        ${context?.previousAnswers.length ? context.previousAnswers.map(a => `- [${a.pillarTitle}] Q: "${a.questionText}" -> Answer: "${a.answerLabel}"`).join('\n') : 'No previous answers available yet.'}
        
        Guidelines:
        1. Be professional, direct, and helpful.
        2. You are aware of the sequence of questions. If the user asks about the "1st question" or "last question" on the page, refer to the list above.
        3. Use the "Summary of Previous Answers" to provide consistent advice. For example, if they answered high on "Strategy", suggest how "Digital Service Delivery" should align.
        4. Provide clear advice on required evidence (e.g., policy documents, system screenshots, audit reports).
        5. Explain alignment with international standards like UN EGDI or OECD.
        6. Help the user choose the best maturity level by explaining the nuances between levels.
        7. Keep responses relatively concise but thorough.`;

        if (!openai) {
            return "I'm sorry, but my AI core is currently offline (OpenAI initialization failed). Please contact your administrator.";
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                ...messages
            ],
            temperature: 0.7,
        });

        return response.choices[0].message.content || "I'm having trouble processing that right now. Could you rephrase your question?";
    } catch (error) {
        console.error("AI Service Error:", error);
        return "I encountered a neural sync error while processing your request. Please try again in a moment.";
    }
};
