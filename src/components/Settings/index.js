import { LoremIpsum } from "lorem-ipsum";

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

const Settings = () => {
    const userData = JSON.parse(localStorage.getItem('user_data'))
    return (
        <div className="md:aspect-[9/16] md:mx-auto h-screen bg-slate-50 md:border-2 md:border-gray-300">
            <h1 className="bg-white p-4 textmd font-bold">Account Settings</h1>
            <div className="p-4">
            <div className="flex gap-3 mb-5">
                <img
                className="rounded-full"
                    src={`https://ui-avatars.com/api/?name=${userData.fullName}&background=random`}
                    alt={`${userData.fullName}`}
                    />
                <div>
                    <p>{userData.fullName}</p>
                    <p>{userData.email}</p>
                </div>
            </div>
            <p>
                {lorem.generateSentences(3)}
            </p>
            </div>
        </div>
    )
}

export default Settings