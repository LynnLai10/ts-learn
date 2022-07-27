type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
    ? 
        X extends Promise<unknown> 
            ?
                MyAwaited<X>
            :
                X 
    :
        never;

// type MyAwaited<T> = T extends Promise<infer X> ? X : never
// type MyAwaited<T> = T extends Promise<infer X> ? MyAwaited<X> : T
// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? MyAwaited<X> : T
// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? X extends Promise<unknown> ? MyAwaited<X> : X : T

