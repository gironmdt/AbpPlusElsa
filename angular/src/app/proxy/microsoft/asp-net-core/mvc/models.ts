
export interface ActionResult {
}

export interface ActionResult<TValue> {
  result: ActionResult;
  value: TValue;
}

export interface ApiVersion {
  default: ApiVersion;
  neutral: ApiVersion;
  groupVersion?: string;
  majorVersion?: number;
  minorVersion?: number;
  status?: string;
}

export interface IActionResult {
}
