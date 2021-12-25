import quoteData from "../../data/quote.data";
import { useState, useEffect } from "react";

// radom number range
const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const QuoteBlock = (props) => {
	const quote = quoteData[randomNumber(0, Object.keys(quoteData).length)];
    const [quoteText, setQuoteText] = useState({});

    useEffect(()=>{
        try{
            setQuoteText({
                quote: quote.quote,
                author: quote.author
            });
        }catch(error){
            setQuoteText({
                quote: "You don't take a photograph, you make it.",
                author: "Ansel Adams",
            });
        }
        
    }, [])

	return (
		<>
			<div className="quote__wrapper">
				<blockquote>
					<h1>{quoteText.quote}</h1>
					<p>{quoteText.author}</p>
				</blockquote>
			</div>
		</>
	);
};

export default QuoteBlock;
