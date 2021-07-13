export interface GeneralResponse<T> {
    ok: boolean;
    codeMessage: string;
    data: T;
}
