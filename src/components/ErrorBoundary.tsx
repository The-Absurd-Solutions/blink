import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-bg) p-8 text-center">
                    <h1 className="text-4xl font-black tracking-tight mb-3 text-black">
                        Blink<span className="inline-block w-2 h-2 rounded-full bg-(--color-gold) ml-0.5 align-middle" />
                    </h1>
                    <p className="text-gray-500 text-sm mb-6">
                        Došlo je do greške. / Something went wrong.
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
                    >
                        Pokušaj ponovo / Try again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
