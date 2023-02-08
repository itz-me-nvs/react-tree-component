import {
  globalStateClassesMapping,
  GlobalStateSlot,
  RegisteredComponent,
  TreeKeyof,
  TreeViewClassKey,
} from "./ComponentMetaData";

export class ComposeClass {
  static getUtilityClass<T, K>(
    ComponentName: RegisteredComponent,
    slots: T,
    styleClasses?: K
    // @ts-ignore
  ): Partial<
    Record<GlobalStateSlot | TreeViewClassKey | TreeKeyof<K>, string>
  > {
    const prefix = "state";
    // @ts-ignore
    const output: Partial<
      Record<GlobalStateSlot | TreeViewClassKey | TreeKeyof<K>, string>
    > = {};

    Object.keys({
      ...globalStateClassesMapping,
      ...slots,
      ...styleClasses,
    }).forEach((key: string) => {
      if (key in globalStateClassesMapping)
        output[`${key}` as keyof typeof output] = `${prefix}-${key}`;
      else output[`${key}` as keyof typeof output] = `${ComponentName}-${key}`;
    });
    return output;
  }
}
