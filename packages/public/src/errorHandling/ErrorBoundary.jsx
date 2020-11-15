import React from "react";


export class ErrorBoundary extends React.Component {
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
    console.log("Log error to service: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

/*
Example use:

<ErrorBoundary>
  <React.Suspense fallback={<div>Suspense message</div>}>
    <Header />
  </React.Suspense>
</ErrorBoundary>
 */
