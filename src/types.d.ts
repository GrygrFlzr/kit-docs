declare type RouteLoad = (params: {
    fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
    session: Record<string, any>;
    page: {
        host: string;
        path: string;
        params?: Record<string, string>;
        query: URLSearchParams;
    };
    context: Record<string, any>;
}) => Promise<{
    status?: number;
    /**
     * use new Error() to generate this
     */
    error?: Error;
    /**
     * only implemented for SSR for now, not client-side
     */
    redirect?: {
        to: string;
        status: number;
    };
    context?: Record<string, any>;
    /**
     * seconds before cleared from cache
     */
    maxage?: number;
    props?: Record<string, any>;
} | void>;

declare type ServerRoute = (
    req: {
        host: string;
        path: string;
        headers: Record<string, string>;
        query: URLSearchParams;
        body: undefined | Record<string, any>;
        params: Record<string, unknown>;
    },
    context?: Record<string, any>
) => Promise<{
    status?: number;
    headers?: Record<string, string>;
    body?: Record<string, any> | Buffer | DataView;
}>;

declare module '*.svx' {
    export const metadata: Record<string, any>;
    const render: Function;
    const $$render: Function;
    export default { render, $$render };
}
