import { useEffect, EffectCallback } from "react";
type UseEffectDependencies = Parameters<typeof useEffect>[1];
type UseEffectReturn = ReturnType<typeof useEffect>;
interface Settings {
    warn: boolean;
    error: boolean;
}
declare function configureUseEffect(settings: Settings): void;
declare function usePostChangeEffect(setup: EffectCallback, dependencies: UseEffectDependencies): UseEffectReturn;
declare function usePostRenderEffect(setup: EffectCallback): UseEffectReturn;
declare function usePostInitialRenderEffect(setup: EffectCallback): UseEffectReturn;
export { configureUseEffect, usePostChangeEffect, usePostRenderEffect, usePostInitialRenderEffect, };
