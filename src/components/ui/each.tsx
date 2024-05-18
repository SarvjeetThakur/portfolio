import * as React from "react";

type EachProps<T> = {
    render: (item: T, index: number) => React.ReactNode,
    of: T[]
}

const Each = <T,>({ render, of }: EachProps<T>) => React.Children.toArray(of.map((item, index) => render(item, index)));

export default Each;
