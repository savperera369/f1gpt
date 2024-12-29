"use client"
import Image from "next/image";
import f1GPTLogo from "./assets/formula-1-logo.png";
import { useChat } from "ai/react";
import { Message } from "ai";
import Bubble from "./components/Bubble";
import PromptSuggestionBox from "./components/PromptSuggestionBox";
import LoadingBubble from "./components/LoadingBubble";

const Home = () => {
    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat();
    const noMessages = !messages || messages.length === 0;

    const handlePrompt = ( promptText ) => {
        const msg: Message = {
            id: crypto.randomUUID(),
            content: promptText,
            role: "user"
        };

        append(msg);
    }

    return (
        <main>
            <Image width={250} src={f1GPTLogo} alt="f1GPTlogo"/>
            <section className={noMessages ? "" : "populated"}>
                {noMessages ? (
                    <>
                        <p className="starter-text">
                            The Ultimate Place for F1 Questions! Hope you enjoy!
                        </p>
                        <br />
                        <PromptSuggestionBox onPromptClick={handlePrompt}/>
                    </>
                ) : (
                    <>  
                        {messages?.length ? messages.map((message, index) => <Bubble key={index} message={message} />): null}
                        {isLoading && <LoadingBubble />}
                    </>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input className="question-box" onChange={handleInputChange} value={input} placeholder="Ask me something"/>
                <input type="submit" />
            </form>
        </main>
    );
}

export default Home;