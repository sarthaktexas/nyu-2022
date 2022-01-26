let letters = Array.from({
    length: [..."sarthakmohanty"].length
}, (_, i) => ({
    number: i,
    last_name: [..."sarthakmohanty"][i],
    color: "#" + ["C31214", "46508A", "765F56", "E1B22F", "728481", "7A6472", "192022", "AB6D1E", "665C53", "BF3942", "2DA99E", "636448", "189965", "F09B49"][i],
    meaning: ["success", "award-winner", "radical", "take-charge", "happy", "adventurous", "kaleidoscopic", "magical", "organizer", "hopeful", "artist", "nomad", "trailblazing", "youthful"][i],
    description: [
        "Sarthak means success. My parents often enforced the idea that I need to be successful but I’ve noticed the most successful people don’t chase success, they chase their passion.",
        "I enjoy competing in a variety of competitions from STEM to design. I've got a couple awards under my belt from 6th place in Science in the city and a CSS Design Awards winner.",
        "I like trying new things even if nobody else is using them. Sometimes, it ends up in failure, and other times it's a success.",
        "I really do enjoy taking charge of anything. Whether it be a group, or of my own schedule, when I take charge of something, things get done fast.",
        "Ya, I'm happy. Think glittery smiley face sticker, that's me. I prioritize happiness over anything else. If there’s anything I can do to make me or anybody else happy, I’ll usually do it.",
        "Catch me any day having adventures in nature. Adventurous Sarthak should have a TV show. My weekends are mainly spent outside at extremely long intervals. You can probably find me exploring the great outdoors during about 60% of my day.",
        "Kaleidoscopes were my childhood and I’ve apparently grown to be one. I’m a multifaceted rotating body who bursts with color.",
        "I love creating magical web experiences for all generations. I believe the web should be inclusive, natural, and creative.",
        "I’ve helped organize some of the biggest high school hackathons in the nation. I love organizing events that change the world for the better.",
        "I’m hopeful about the future and while I don’t know where I’m going, I do know it’s going to be a meaningful adventure.",
        "I love creating art whether it be through software like Figma or Procreate or through code with CSS and Javascript. I even like playing with physical mediums (a fancy word for Play-Doh).",
        "I’m a digital nomad. I love exploring new tools and playing with them to see how I can become a more productive person.",
        "I love learning about the newest platforms and using them in my projects. Risk is something I love incorporating into my personal projects and usually keeps me going to find out how far I can take said risk.",
        "I’m still a creative child playing with the most basic things every day. I have a box of 800 (?) legos next to my bed that I make stuff with before I go to sleep every night."
    ][i],
}));

export default function Letters() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row mb-5">
                {letters.map((_, i) => (
                    <div key={i}>
                        <img className="h-10 md:h-20" src={`/letters/${i+1}.png`} />
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {letters.map(({ color, meaning, description }, i) => (
                    <div key={i} className="flex flex-row py-8 px-10 space-x-5 sm:w-1/2">
                        <img className="h-14 md:h-20" src={`/letters/${i+1}.png`} />
                        <div className="flex flex-col">
                            <h2 className="text-5xl" style={{ color: color }}>is for <span>{meaning}</span></h2>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}