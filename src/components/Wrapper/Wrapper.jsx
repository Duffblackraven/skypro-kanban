import { WrapperWrapp } from "./Wrapper.styled"

function Wrapper({ children }) {
    return (
        <WrapperWrapp>
            {children}
        </WrapperWrapp>
    )
}
export default Wrapper