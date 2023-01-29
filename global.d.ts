type Undefineable<T> = {
    [P in keyof T]: T[P] | undefined;
};

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
