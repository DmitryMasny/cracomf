import React, {lazy} from "react";
import "./App.css";
import {ErrorBoundary} from 'react-error-boundary'

// @ts-ignore
const Grp = lazy(() => import('grp/App'));

function ErrorFallback({error, resetErrorBoundary}: any) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                }}
            >
                <React.Suspense fallback="loading">
                    <Grp/>
                </React.Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default App;
