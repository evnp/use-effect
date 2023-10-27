import { useEffect, EffectCallback } from "react";

type UseEffectDependencies = Parameters<typeof useEffect>[1];
type UseEffectReturn = ReturnType<typeof useEffect>;

interface Settings {
  warn: boolean;
  error: boolean;
}

const _settings = {
  warn: false,
  error: true,
};

function configureUseEffect(settings: Settings): void {
  if (typeof settings.warn === "boolean") {
    _settings.warn = settings.warn;
  }
  if (typeof settings.error === "boolean") {
    _settings.error = settings.error;
  }
}

function _validate(condition: boolean, message: string): void {
  if ((_settings.warn || _settings.error) && condition) {
    if (_settings.warn) {
      console.warn(message);
    }
    if (_settings.error) {
      throw new Error(message);
    }
  }
}

function usePostChangeEffect(
  setup: EffectCallback,
  dependencies: UseEffectDependencies
): UseEffectReturn {
  if (_settings.warn || _settings.error) {
    _validate(
      Array.isArray(dependencies),
      "React Hook usePostChangeEffect was incorrectly passed a dependency list" +
        " that is not an array literal. Use usePostRenderEffect instead if you" +
        " want to run an effect after every component re-render."
    );
  }
  return useEffect(setup, dependencies);
}

function usePostRenderEffect(setup: EffectCallback): UseEffectReturn {
  if (_settings.warn || _settings.error) {
    _validate(
      // Use `arguments` below to keep function type signature unadulterated.
      // eslint-disable-next-line prefer-rest-params
      arguments[1] === undefined || arguments[1] === null,
      "React Hook usePostRenderEffect was incorrectly passed a dependency list." +
        " Use usePostChangeEffect instead if you want to run an effect after" +
        " dependency changes."
    );
  }
  return useEffect(setup);
}

function usePostInitialRenderEffect(setup: EffectCallback): UseEffectReturn {
  if (_settings.warn || _settings.error) {
    _validate(
      // Use `arguments` below to keep function type signature unadulterated.
      // eslint-disable-next-line prefer-rest-params
      arguments[1] === undefined || arguments[1] === null,
      "React Hook usePostInitialRenderEffect was incorrectly passed a dependency" +
        " list. Use usePostChangeEffect instead if you want to run an effect after" +
        " dependency changes."
    );
  }
  return useEffect(setup);
}

export {
  configureUseEffect,
  usePostChangeEffect,
  usePostRenderEffect,
  usePostInitialRenderEffect,
};
