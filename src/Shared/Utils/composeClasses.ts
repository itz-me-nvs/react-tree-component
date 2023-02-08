import {
  globalStateClassesMapping,
  GlobalStateSlot,
  RegisteredComponent,
  TreeViewClassKey,
} from './ComponentMetaData';

export class ComposeClass {
  static getUtilityClass<T>(
    ComponentName: RegisteredComponent,
    slots: T
  ): Partial<Record<GlobalStateSlot | TreeViewClassKey, string>> {
    const prefix = 'state';
    const output: Partial<Record<GlobalStateSlot | TreeViewClassKey, string>> =
      {};

    Object.keys({ ...globalStateClassesMapping, ...slots }).forEach(
      (key: string) => {
        if (key in globalStateClassesMapping)
          output[`${key}` as keyof typeof output] = `${prefix}-${key}`;
        else
          output[`${key}` as keyof typeof output] = `${ComponentName}-${key}`;
      }
    );
    return output;
  }
}
