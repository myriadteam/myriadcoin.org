import tw, { styled } from "twin.macro"

export const PageContainer = tw.div`container`
export const BigText = tw.h2`text-2xl sm:text-3xl font-bold leading-extra-tight`
export const MediumText = tw.h3`text-md sm:text-2xl font-medium leading-extra-tight text-grey max-w-xl`
export const MediumBoldText = tw.h3`text-md sm:text-2xl font-bold leading-extra-tight mb-10`
export const BodyText = tw.p`text-sm sm:text-base font-normal`
export const BodyBoldText = tw.p`text-sm sm:text-md font-bold`
export const PurpleGrad = tw.div`bg-gradient-b-purple absolute inset-0`
export const OrangeGrad = tw.div`bg-gradient-tr-orange absolute inset-0`
export const Code = tw.p`text-xs text-code-green`
export const LinkButton = tw.a`inline-flex items-center justify-center bg-black hover:bg-purple text-white font-bold text-xs py-3 px-10 rounded mb-6 dark:bg-white dark:text-black`
export const GraphContainer = styled.div`
  ${tw`relative px-6 rounded mx--6 sm:mx-0 sm:shadow-wide sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18`}
  ${({ theme }) =>
    (theme === "graph1" && tw`sm:bg-light-grey sm:dark:bg-dark-light-bg`) ||
    (theme === "graph2" && tw`sm:bg-white sm:dark:bg-dark-bg`)}
`
