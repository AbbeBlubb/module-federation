import React from "react";

function InfoCards() {
    const [singleValueInterestRate, setSingleValueInterestRate] = React.useState(null);

    React.useEffect(() => {
        import("infrastructure-remote/singleValueInterestRate")
          .then(({ default: value }) => setSingleValueInterestRate(value))
          .catch((err) => console.error(`Error getting single value: ${err}`));
      }, []);

    return (
        <section className="box">
            <h2>Cards section component</h2>
            <p>Todays interest rate is {singleValueInterestRate} %</p>
        </section>
    );
}

export default InfoCards;
