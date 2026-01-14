function FaqOptions({ questions, onSelect, onBack, backOptionEnabled }: {
  questions: { q: string; a: string }[];
  onSelect: (a: string) => void;
  onBack: () => void;
  backOptionEnabled: boolean;
}) {
  return (
    <div className="w-full bg-[#f5dcb0] border-4 border-valley-brown rounded-lg shadow-lg mt-4 font-pixel" style={{ boxShadow: '0 0 0 4px #c7966b' }}>
      <ul className="p-2">
        {backOptionEnabled ? (
          // Dialogue to go back to questions list
          <li>
            <button
              onClick={onBack}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-valley-brown leading-tight py-2 px-3 flex items-center cursor-pointer rounded-md hover:bg-[#e0c8a8] w-full text-left">
              ...Ask another question?
            </button>
          </li>
        ) : (
          questions.map((question, index) => (
            // Dialogue options for questions
            <li key={index}>
              <button
                onClick={() => onSelect(question.a)}
                className="text-sm sm:text-lg md:text-xl lg:text-2xl text-valley-brown leading-tight py-3 sm:py-2 px-3 flex items-center cursor-pointer rounded-md hover:bg-[#e0c8a8] w-full text-left active:bg-[#d4b58e] transition-colors">
                {question.q}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default FaqOptions;