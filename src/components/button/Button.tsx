import ButtonTextStagger from "./ButtonTextStagger/ButtonTextStagger";
import ButtonShiftHover from "./ButtonShiftHover/ButtonShiftHover";
import ButtonHoverMagnetic from "./ButtonHoverMagnetic/ButtonHoverMagnetic";
import ButtonTextUnderline from "./ButtonTextUnderline";
import ButtonIconArrow from "./ButtonIconArrow";
import ButtonHoverBubble from "./ButtonHoverBubble";
import ButtonExpandHover from "./ButtonExpandHover";
import { useRouter } from "next/navigation";
import type { ButtonVariantProps } from "./types";

export type { ButtonVariant, ButtonVariantProps, ButtonPropsForVariant } from "./types";

export default function Button({ variant, ...props }: ButtonVariantProps) {
  switch (variant) {
    case "text-stagger":
      return <ButtonTextStagger {...props} />;
    case "shift-hover":
      return <ButtonShiftHover {...props} />;
    case "hover-magnetic":
      return <ButtonHoverMagnetic {...props} />;
    case "text-underline":
      return <ButtonTextUnderline {...props} />;
    case "icon-arrow":
      return <ButtonIconArrow {...props} />;
    case "hover-bubble":
      return <ButtonHoverBubble {...props} />;
    case "expand-hover":
      return <ButtonExpandHover {...props} />;
    default:
      return <ButtonTextStagger {...props} />;
  }
}