import React from "react";
import { FederatedWrapper } from "./FederatedWrapper";

export const federatedWrapperHOC = (Component) => ({ error, fallback, ...props }) => (
    <FederatedWrapper error={error} fallback={fallback}>
        <Component {...props} />
    </FederatedWrapper>
);
