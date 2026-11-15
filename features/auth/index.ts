// -> The main feature index.ts then re-exports from each subdirectory
// features/auth/index.ts
export * from './components';

// Two places for shared code:
/*
    /components -> Truly universal UI components (buttons,inputs,cards)
    /features/shared -> Components, hooks, and utils that are specific to business domain
                        and not used across features.
*/