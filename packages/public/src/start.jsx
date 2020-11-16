import React from "react";

function Start({ language }) {
    const [objectValueNewsTexts, setObjectValueNewsTexts] = React.useState({});

    React.useEffect(() => {
        import("infrastructure-remote/objectValueNewsTexts")
            .then(({ default: value }) => setObjectValueNewsTexts(value))
            .catch((err) => console.error(`Error getting object value: ${err}`));
    }, []);

    return (
        <section className="box">
            <h2>Start section component</h2>
            <p>Fetched language is {language}</p>
            {objectValueNewsTexts.hasOwnProperty("topArticle") &&
                objectValueNewsTexts.hasOwnProperty("secondArticle") && (
                    <>
                        <p>
                            <b>{objectValueNewsTexts.topArticle.heading}</b>
                            <br />
                            {objectValueNewsTexts.topArticle.text}
                        </p>
                        <p>
                            <b>{objectValueNewsTexts.secondArticle.heading}</b>
                            <br />
                            {objectValueNewsTexts.secondArticle.text}
                        </p>
                    </>
                )}
        </section>
    );
}

export default Start;
