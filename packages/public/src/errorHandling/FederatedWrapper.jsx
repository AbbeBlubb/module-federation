import React from "react";

export class FederatedWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    // Update state so the next render will show the fallback UI.
    // getDerivedStateFromError() is called during the “render” phase, so side-effects are not permitted. For those use cases, use componentDidCatch() instead.
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // componentDidCatch() is called during the “commit” phase, so side-effects are permitted. It should be used for things like logging errors
    componentDidCatch(error, errorInfo) {
        // logErrorToMyService:
        console.error(
            "Log error to service from componentDidCatch in FederatedWrapper!: ",
            error,
            errorInfo
        );
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.error || (
                    <div className="box">Error DEFAULT: something went wrong default message.</div>
                )
            );
        }

        return (
            <React.Suspense
                fallback={
                    this.props.fallback || (
                        <div className="box">Suspense DEFAULT: delay fallback default message</div>
                    )
                }
            >
                {this.props.children}
            </React.Suspense>
        );
    }
}

/*
Example use:

<FederatedWrapper
  error={<div>Temporary Header</div>}
  fallback={<div>Loading header...</div>}
>
  <Header />
</FederatedWrapper>
*/
