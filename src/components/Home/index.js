import { LoremIpsum } from "lorem-ipsum";
import { useNavigate } from "react-router-dom";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 8,
        min: 4
    }
});

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="flex h-full items-end md:aspect-[9/16] md:mx-auto h-screen bg-slate-50 p-4 md:border-2 md:border-gray-300">
            <div>
                <h1 className="font-bold text-3xl leading-10">Welcome to PopX</h1>
                <div className="leading-7">{lorem.generateSentences(2)}</div>
                <div 
                className="bg-indigo-500 hover:bg-indigo-700  
                            text-md font-medium text-center 
                            rounded-md my-2 transition duration-300"
                >
                    <button
                    onClick={() => navigate('/register')}
                    className="text-white p-2"
                        type="button"
                    >
                        Create Account
                    </button>
                </div>
                <div
                className="bg-violet-300 hover:bg-violet-600 
                            text-md font-medium hover:text-white
                            text-center rounded-md my-2 transition duration-300"
                >
                    <button
                    onClick={() => navigate('/login')}
                    className="p-2"
                        type="button"
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home