import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ComponentBasePage: React.FC<PageProps> = ({ data }: { data: any }) => {
    return "";
};

export default ComponentBasePage;

export const Head: HeadFC = () => (
    <>
        <meta
            name="go-import"
            content="beandev.io/datorum git https://github.com/BeanMicro/datorum"
        />
        <meta
            name="go-source"
            content="beandev.io/datorum https://github.com/BeanMicro/datorum https://github.com/BeanMicro/datorum/tree/master{/dir} https://github.com/BeanMicro/datorum/blob/master{/dir}/{file}#L{line}"
        />
    </>
);
