import React from 'react'
import PromptSuggestionButton from './PromptSuggestionButton';

const PromptSuggestionBox = ({ onPromptClick }) => {
  const prompts = [
    "Who is head of racing for Aston Martin's F1 Academy team?",
    "Who is the highest paid F1 Driver?",
    "Who will be the newest driver for Ferrari?",
    "Who is the current Formula One World Driver's Champion?"
  ];

  return (
    <div className="prompt-suggestion-row">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton 
          key={index} 
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />
      ))}
    </div>
  )
}

export default PromptSuggestionBox
