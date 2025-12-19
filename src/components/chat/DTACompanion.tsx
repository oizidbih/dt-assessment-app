import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Send,
    Sparkles,
    Brain,
    Paperclip
} from 'lucide-react';
import { getAIResponse, type ChatMessage, type QuestionContext } from '../../services/aiService';
import clsx from 'clsx';

const DigitalBrain: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.svg
            viewBox="0 0 100 100"
            className="w-10 h-10 text-white relative z-10"
        >
            {/* Brain Outline/Nodes */}
            <motion.path
                d="M50 20C30 20 20 35 20 50C20 65 35 80 50 80C65 80 80 65 80 50C80 35 70 20 50 20Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 2"
                animate={{
                    strokeDashoffset: [0, -20],
                    opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Neural Connections */}
            <motion.circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <motion.circle
                cx="50"
                cy="50"
                r="5"
                fill="currentColor"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Floating Nodes */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
                <motion.circle
                    key={i}
                    cx={50 + 25 * Math.cos(angle * Math.PI / 180)}
                    cy={50 + 25 * Math.sin(angle * Math.PI / 180)}
                    r="2"
                    fill="#00B2FF"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4
                    }}
                />
            ))}
        </motion.svg>
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-skyline/40 rounded-full blur-xl animate-pulse scale-75" />
    </div>
);

interface DTACompanionProps {
    context?: QuestionContext;
}

const DTACompanion: React.FC<DTACompanionProps> = ({ context }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'assistant', content: "Marhaba! I am your DTA Strategic Companion. How can I assist you with your digital maturity assessment today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const constraintsRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const response = await getAIResponse([...messages, userMessage], context);

        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
    };

    const quickPrompts = [
        "What evidence is required?",
        "Explain this standard",
        "How to reach Level 5?",
    ];

    return (
        <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-24 right-6 w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="bg-[#040F25] p-5 text-white flex items-center justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-skyline/20 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="flex items-center space-x-3 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-skyline to-palm flex items-center justify-center shadow-lg shadow-skyline/20">
                                    <Brain className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm tracking-tight">DTA Companion</h3>
                                    <div className="flex items-center space-x-1.5">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Quantum Core Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-xl transition-colors relative z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Page Context Banner (if in assessment) */}
                        {context && (
                            <div className="bg-sky-50 px-4 py-2 border-b border-sky-100 flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2 truncate font-bold text-skyline text-[9px] uppercase tracking-wider">
                                        <Sparkles className="w-3 h-3 shrink-0" />
                                        <span>TOTAL AWARENESS MODE: {context.pillarTitle}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[8px] bg-skyline/10 px-1.5 py-0.5 rounded text-skyline font-black">
                                            {context.questions.length} Qs
                                        </span>
                                        <span className="text-[8px] bg-palm/10 px-1.5 py-0.5 rounded text-palm font-black">
                                            {context.previousAnswers.length} Ans
                                        </span>
                                    </div>
                                </div>
                                {context.activeQuestionId && (
                                    <div className="text-[10px] text-sky-700/70 font-medium truncate italic pl-5">
                                        Focus: "{context.questions.find(q => q.id === context.activeQuestionId)?.text}"
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide bg-gray-50/30">
                            {messages.map((m, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={i}
                                    className={clsx(
                                        "flex",
                                        m.role === 'user' ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className={clsx(
                                        "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed",
                                        m.role === 'user'
                                            ? "bg-skyline text-white rounded-tr-none shadow-md"
                                            : "bg-white text-gray-700 rounded-tl-none border border-gray-100 shadow-sm"
                                    )}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Prompts */}
                        {!isLoading && messages.length <= 2 && (
                            <div className="px-5 pb-2 flex flex-wrap gap-2">
                                {quickPrompts.map((p, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setInput(p)}
                                        className="text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-skyline hover:text-white hover:border-skyline transition-all"
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="relative flex items-center space-x-2">
                                <button className="p-2 text-gray-400 hover:text-skyline transition-colors">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask anything about the DTA..."
                                    className="flex-1 bg-gray-50 border-none focus:ring-2 focus:ring-skyline/20 rounded-xl px-4 py-2.5 text-sm placeholder:text-gray-400"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className={clsx(
                                        "p-2.5 rounded-xl transition-all",
                                        input.trim() && !isLoading
                                            ? "bg-skyline text-white shadow-lg shadow-skyline/20 scale-100"
                                            : "bg-gray-100 text-gray-300 scale-95"
                                    )}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-[9px] text-center text-gray-300 mt-3 font-medium flex items-center justify-center">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Powered by Cognitive DTA Engine v2.5
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Draggable Trigger Button */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "absolute bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl pointer-events-auto cursor-grab active:cursor-grabbing transition-all duration-500 overflow-visible",
                    isOpen ? "bg-white text-gray-900 border border-gray-100" : "bg-[#040F25] text-white"
                )}
            >
                <DigitalBrain />
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-palm text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#040F25] animate-bounce z-20">
                        1
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default DTACompanion;
