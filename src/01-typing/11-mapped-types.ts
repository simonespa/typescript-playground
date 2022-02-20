namespace Options_Verbose {
  interface Options {
    material: string;
    backlight: boolean;
  }

  interface ReadOnlyOptions {
    readonly material: string;
    readonly backlight: boolean;
  }

  interface OptionalOptions {
    material?: string;
    backlight?: boolean;
  }

  interface NullableOptions {
    material: string | null;
    backlight: boolean | null;
  }
}

/**
 * Mapped generics
 */
namespace Options_Terse {
  interface Options {
    material: string;
    backlight: boolean;
  }

  // readonly
  type ReadOnly<T> = { readonly [k in keyof T]: T[k]};

  // optional
  type Optional<T> = { [k in keyof T]?: T[k]};

  // nullable
  type Nullable<T> = { [k in keyof T]: T[k] | null};

  // Some examples
  type ReadOnlyOptions = ReadOnly<Options>
  type OptionalOptions = Optional<Options>
  type NullableOptions = Nullable<Options>

  const brick: ReadOnlyOptions = {
    backlight: true,
    material: 'brick'
  };

  const silk: OptionalOptions = {
    backlight: true
  }

  const gauze: NullableOptions = {
    backlight: null,
    material: null
  }

  // Union can be used with these generics
}
