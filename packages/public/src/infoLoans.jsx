import React from "react";

function InfoLoans() {
    const [arrayValueTiePeriod, setArrayValueTiePeriod] = React.useState([]);

    React.useEffect(() => {
        import("infrastructure-remote/arrayValueTiePeriods")
            .then(({ default: value }) => setArrayValueTiePeriod(value))
            .catch((err) => console.error(`Error getting array value: ${err}`));
    }, []);

    return (
        <section className="box">
            <h2>Loans section component</h2>
            <div>
                Tie the interest rate to:
                {arrayValueTiePeriod.map((element, i) => <div key={i}>{element} year</div>)}
            </div>
        </section>
    );
}

export default InfoLoans;
