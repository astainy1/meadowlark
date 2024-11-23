    //Create cookies fortune for user
    const cookiesFortunes = [

        "Conquer your fears or they will conquer you.",
        "Rivers need springs.",
        "Do not fear what you don't know.",
        "You will have a pleasant surprise.",
        "Whenever possible, keep it simple."

    ]

    exports.getFortunes = () => {
        const randomFortunes = cookiesFortunes[Math.floor(Math.random() * cookiesFortunes.length)];
        return randomFortunes;
    }