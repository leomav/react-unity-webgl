import { WebGLContextAttributes } from "./webgl-context-attributes";

/**
 * The Unity config is provided when instantiating a Unity context. This config
 * will eventually be used to create the Unity arguments which will be passed
 * to the create Unity instance method in order to initialize it.
 */
type UnityConfig = {
  /**
   * The url to the build json file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly loaderUrl: string;

  /**
   * The url to the build data file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly dataUrl: string;

  /**
   * The url to the framework file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly frameworkUrl: string;

  /**
   * The url to the unity code file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly codeUrl: string;

  /**
   * The url where the streaming assets can be found. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly streamingAssetsUrl?: string;

  /**
   * The url to the framework file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   * This is set to the memory file when memory is stored in an external file,
   * otherwise it is set to an empty string.
   */
  readonly memoryUrl?: string;

  /**
   * The url to the unity code file generated by Unity. When using a relative
   * url, keep in mind this is relative from the path where your html file is
   * served. It is also possible to use an absolute url, for example when using
   * a CDN.This is set to the JSON file containing debug symbols when the
   * current build is using debug symbols, otherwise it is set to an empty
   * string.
   */
  readonly symbolsUrl?: string;

  /**
   * The application's company name. This argument is treated as meta data
   * which will be provided to the Unity Instance.
   */
  readonly companyName?: string;

  /**
   * The application's product name. This argument is treated as meta data
   * which will be provided to the Unity Instance.
   */
  readonly productName?: string;

  /**
   * The application's product version. This argument is treated as meta data
   * which will be provided to the Unity Instance.
   */
  readonly productVersion?: string;

  /**
   * This object allow you to configure WebGLRenderingContext creation options
   * which will be pass additional context attributes to the Unity canvas.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
   */
  readonly webglContextAttributes?: WebGLContextAttributes;

  /**
   * By default, the WebGL Cache stores the asset data file .data and
   * AssetBundle files .bundle, and revalidates them before loading them from
   * the cache. You can change this behavior by overriding the default
   * caching behavior. This argument is treated as meta data which will be
   * provided to the Unity Instance.
   */
  readonly cacheControl?: (url: string) => UnityCacheControlMode;
};

export type { UnityConfig };