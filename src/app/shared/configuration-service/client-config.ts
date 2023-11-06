export class ClientConfiguration {
  public static _Config: any = {};

  public static get InternalUrl(): ConfigSection {
    return this._Config.InternalUrl || {};
  }

  public static get ExternalUrl(): ConfigSection {
    return this._Config.ExternalUrl || {};
  }
}

export class ConfigSection {
  [key: string]: any;
}
