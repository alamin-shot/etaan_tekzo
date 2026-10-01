export type ApiSuccess<T> = { ok: true; data: T };
export type ApiFailure = {
    ok: false;
    code: string;
    message: string;
    fieldErrors?: Record<string, string>;
};
export type ApiResult<T> = ApiSuccess<T> | ApiFailure;