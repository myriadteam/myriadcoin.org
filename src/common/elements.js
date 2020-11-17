import tw from "twin.macro"

export const PageContainer = tw.div`container`
export const BigText = tw.h2`text-2xl sm:text-3xl font-bold leading-extra-tight`
export const MediumText = tw.h3`text-md sm:text-2xl font-medium leading-extra-tight text-grey max-w-xl`
export const MediumBoldText = tw.h3`text-md sm:text-2xl font-bold leading-extra-tight mb-10`
export const BodyText = tw.p`text-sm sm:text-base font-normal`
export const BodyBoldText = tw.p`text-sm sm:text-md font-bold`
export const PurpleGrad = tw.div`bg-gradient-b-purple absolute inset-0`
export const OrangeGrad = tw.div`bg-gradient-tr-orange absolute inset-0`
export const Code = tw.p`text-xs italic text-code-green`
export const LinkButton = tw.a`inline-flex items-center justify-center bg-black hover:bg-purple text-white font-bold text-xs py-3 px-10 rounded mb-6`
