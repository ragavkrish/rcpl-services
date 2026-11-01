import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
  isRoot?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for debugging while preventing blank page
    console.error('ErrorBoundary caught an unhandled rendering error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = (window as unknown as { __RCPL_BASE_PATH__?: string }).__RCPL_BASE_PATH__ || '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <section
          role="alert"
          aria-live="assertive"
          className="min-h-[50vh] flex items-center justify-center px-4 py-16 bg-[#F8F9FA]"
        >
          <div className="max-w-md w-full bg-white rounded-lg border border-[#E9ECEF] shadow-sm p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B28348]">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h2 className="text-xl font-semibold text-[#152E4D] mb-2 font-serif">
              {this.props.fallbackTitle || 'Unable to display this section'}
            </h2>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {this.props.fallbackMessage ||
                'A temporary display error occurred while rendering this page. You can reload or return to the main overview.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#152E4D] rounded hover:bg-[#0E2038] transition-colors focus:outline-none focus:ring-2 focus:ring-[#152E4D] focus:ring-offset-2"
              >
                Reload Page
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#152E4D] bg-[#F1F3F5] rounded hover:bg-[#E9ECEF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#152E4D] focus:ring-offset-2"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
